"use client";

import React, { useEffect, useRef } from "react";
import { HALFTONE_SETTINGS } from "./HalftoneSettings";

interface Dot {
  ox: number; // original x
  oy: number; // original y
  x: number;  // current x
  y: number;  // current y
  baseRadius: number;
  currentRadius: number;
  targetRadius: number;
  hitByWave: boolean;
}

export default function InteractiveHalftone({
  imageSrc,
  triggerRipple
}: {
  imageSrc: string;
  triggerRipple: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const waveRef = useRef({ active: false, y: 0 });
  const sizeRef = useRef({ w: 0, h: 0 });
  const boundsRef = useRef({ minD: Infinity, maxD: -Infinity });
  const hasWavedRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    let imgObj: HTMLImageElement | null = null;
    let resizeTimeout: NodeJS.Timeout;

    const buildGrid = () => {
      if (!imgObj) return;

      const rect = container.getBoundingClientRect();
      const docTop = rect.top + window.scrollY;
      const docLeft = rect.left + window.scrollX;

      const width = window.innerWidth;
      const height = Math.max(window.innerHeight, rect.height + docTop + 100);
      sizeRef.current = { w: width, h: height };

      canvas.style.position = "absolute";
      canvas.style.left = `-${docLeft}px`;
      canvas.style.top = `-${docTop}px`;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      
      // Reset transform before scaling again to prevent accumulation on resize
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      // Use tighter spacing on mobile so dot density matches the desktop portrait
      const spacing = window.innerWidth <= 640 ? 3.3 : HALFTONE_SETTINGS.dotSpacing;
      const maxDotRadius = spacing * HALFTONE_SETTINGS.maxDotRadiusMultiplier;

      const offscreen = document.createElement("canvas");
      offscreen.width = width;
      offscreen.height = height;
      const offCtx = offscreen.getContext("2d", { willReadFrequently: true });
      if (!offCtx) return;

      offCtx.fillStyle = "#ffffff";
      offCtx.fillRect(0, 0, width, height);

      let rightStart = docLeft + container.clientWidth * 0.55; 
      let targetW = container.clientWidth * 0.45;
      let targetH = container.clientHeight;
      let targetY = docTop;

      const targetEl = document.getElementById("hero-image-target");
      const leftEl = document.getElementById("hero-left-panel");
      if (targetEl) {
        const tRect = targetEl.getBoundingClientRect();
        rightStart = tRect.left + window.scrollX;
        targetW = tRect.width;
        
        // On mobile the image target is stacked above the card;
        // use its own dimensions. On desktop sync with the left panel.
        if (leftEl && window.innerWidth > 640) {
          const lRect = leftEl.getBoundingClientRect();
          targetY = lRect.top + window.scrollY;
          targetH = lRect.height;
        } else {
          targetY = tRect.top + window.scrollY;
          targetH = tRect.height;
        }
      }

      const scale = Math.max(targetW / imgObj.width, targetH / imgObj.height);
      const dw = imgObj.width * scale;
      const dh = imgObj.height * scale;
      
      const dx = rightStart + (targetW - dw) / 2;
      const dy = targetY + (targetH - dh) / 2;

      offCtx.drawImage(imgObj, dx, dy, dw, dh);

      const imgData = offCtx.getImageData(0, 0, width, height).data;

      const dots: Dot[] = [];
      const cols = Math.floor(width / spacing);
      const rows = Math.floor(height / spacing);
      
      let minD = Infinity;
      let maxD = -Infinity;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing + spacing / 2;
          const y = j * spacing + spacing / 2;
          
          const px = Math.floor(x);
          const py = Math.floor(y);
          if (px >= width || py >= height) continue;

          const index = (py * width + px) * 4;
          const r = imgData[index];
          const g = imgData[index + 1];
          const b = imgData[index + 2];
          
          const brightness = (r + g + b) / 3;
          let normalized = brightness / 255;
          
          normalized = ((normalized - 0.5) * HALFTONE_SETTINGS.contrast) + 0.5;
          normalized = Math.max(0, Math.min(1, normalized));
          normalized = Math.pow(normalized, 1 / HALFTONE_SETTINGS.gamma);

          const darkness = 255 - (normalized * 255);
          
          const isMobileLayout = window.innerWidth <= 640;
          const featherDist = isMobileLayout ? 15 : 80;
          const cornerRadius = isMobileLayout ? 12 : 36;

          // Rounded-rectangle SDF — gives corner rounding + uniform feather zone
          const cx = rightStart + targetW / 2;
          const cy = targetY + targetH / 2;
          const qx = Math.abs(x - cx) - targetW / 2 + cornerRadius;
          const qy = Math.abs(y - cy) - targetH / 2 + cornerRadius;
          const sdf =
            Math.sqrt(Math.max(qx, 0) ** 2 + Math.max(qy, 0) ** 2) +
            Math.min(Math.max(qx, qy), 0) -
            cornerRadius;
          // sdf < 0 → inside; map to [0,1] then apply smoothstep for gradual fade
          const t = Math.max(0, Math.min(1, -sdf / featherDist));
          const feather = t * t * (3 - 2 * t);
          
          let baseRadius = 0;
          if (darkness > HALFTONE_SETTINGS.darknessThreshold) {
             baseRadius = (darkness / 255) * maxDotRadius * feather;
             const d = x + y;
             if (d < minD) minD = d;
             if (d > maxD) maxD = d;
          }

          dots.push({
            ox: x,
            oy: y,
            x: x,
            y: y,
            baseRadius,
            currentRadius: 0,
            targetRadius: 0,
            hitByWave: hasWavedRef.current, // Safely rely on the actual wave state
          });
        }
      }
      dotsRef.current = dots;
      if (minD !== Infinity) {
        boundsRef.current = { minD, maxD };
      }
    };

    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      imgObj = img;
      buildGrid();
    };

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        buildGrid();
      }, 150); // Debounce to prevent lag during aggressive scaling
    };
    window.addEventListener("resize", handleResize);

    let resizeObserver: ResizeObserver | null = null;
    const targetLeftPanel = document.getElementById("hero-left-panel");
    if (targetLeftPanel) {
      resizeObserver = new ResizeObserver(() => {
        handleResize();
      });
      resizeObserver.observe(targetLeftPanel);
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX + window.scrollX,
        y: e.clientY + window.scrollY,
      };
    };
    // Cursor repel only on desktop — no mouse pointer on touch devices
    if (window.innerWidth > 640) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    const render = () => {
      const { w: width, h: height } = sizeRef.current;
      if (width === 0 || height === 0) {
        animationRef.current = requestAnimationFrame(render);
        return;
      }
      
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "var(--ink)";

      const mouse = mouseRef.current;
      const wave = waveRef.current;
      const waveSpeed = HALFTONE_SETTINGS.rippleSpeed * 1.5;
      
      const spacing = HALFTONE_SETTINGS.dotSpacing;
      const maxDotRadius = spacing * HALFTONE_SETTINGS.maxDotRadiusMultiplier;

      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      
      const { minD, maxD } = boundsRef.current;
      const totalDist = maxD - minD;
      
      // Wipe progress goes from 0 (at top) to 1 (at bottom of scroll)
      const wipeProgress = Math.max(0, Math.min(1, scrollY / vh));
      // Wipe line L moves from minD - fadeBand to maxD
      const fadeBand = 300; 
      const wipeLine = minD - fadeBand + (totalDist + fadeBand) * wipeProgress;

      if (wave.active) {
        wave.y += waveSpeed;
        if (wave.y > height + 800) { // Extended to account for waveBand
          wave.active = false;
        }
      }

      for (let i = 0; i < dotsRef.current.length; i++) {
        const dot = dotsRef.current[i];
        
        let targetR = 0;

        if (wave.active && !dot.hitByWave) {
          const dist = wave.y - dot.oy;
          const waveBand = 600; // Wide band for a very soft, subtle gradient
          
          if (dist > waveBand) {
            dot.hitByWave = true;
            targetR = dot.baseRadius;
          } else if (dist > 0) {
            const progress = dist / waveBand;
            // Ease-in-out curve for softer transition
            const smoothProgress = progress * progress * (3 - 2 * progress);
            targetR = dot.baseRadius * smoothProgress;
          }
        } else if (dot.hitByWave) {
          targetR = dot.baseRadius;
        }

        // Apply diagonal wipe based on wipeLine
        const d = dot.ox + dot.oy;
        let wipeMultiplier = 1;
        
        if (d < wipeLine) {
          wipeMultiplier = 0; // Behind wipe line, completely vanished
        } else if (d < wipeLine + fadeBand) {
          // Inside the fade band, linearly interpolate from 0 to 1
          wipeMultiplier = (d - wipeLine) / fadeBand;
        } // else > wipeLine + fadeBand, wipeMultiplier = 1

        dot.targetRadius = targetR * wipeMultiplier;

        let targetX = dot.ox;
        let targetY = dot.oy;

        if (dot.hitByWave && dot.baseRadius > 0) {
          const mdx = dot.x - mouse.x;
          const mdy = dot.y - mouse.y;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
          const maxDist = HALFTONE_SETTINGS.repelRadius;
          
          if (mDist < maxDist && mDist > 0) {
            const force = (maxDist - mDist) / maxDist;
            const repelStrength = HALFTONE_SETTINGS.repelStrength * force;
            targetX = dot.ox + (mdx / mDist) * repelStrength;
            targetY = dot.oy + (mdy / mDist) * repelStrength;
          }
        }

        dot.currentRadius += (dot.targetRadius - dot.currentRadius) * HALFTONE_SETTINGS.springStiffness;
        dot.x += (targetX - dot.x) * HALFTONE_SETTINGS.movementSpring;
        dot.y += (targetY - dot.y) * HALFTONE_SETTINGS.movementSpring;

        if (dot.currentRadius > 0.2) {
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, dot.currentRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (resizeObserver) resizeObserver.disconnect();
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [imageSrc]);

  useEffect(() => {
    if (triggerRipple && containerRef.current) {
      hasWavedRef.current = true;
      
      waveRef.current = {
        active: true,
        y: 0, 
      };
    }
  }, [triggerRipple]);

  return (
    <div ref={containerRef} className="halftone-container" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0, overflow: "visible" }}>
      <canvas
        ref={canvasRef}
        style={{
          display: "block"
        }}
      />
    </div>
  );
}
