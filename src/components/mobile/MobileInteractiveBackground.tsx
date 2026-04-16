"use client";

import { useEffect, useRef } from "react";

const GRID_W = 12;
const GRID_H = 20;
const GAP = 3;
const MAX_BOXES = 35;
const SPAWN_PROB = 0.15;
const BRIGHTNESS = 0.7;

interface Props {
  /** When true, renders as fixed covering the whole viewport (MobileHome).
   *  When false, renders as absolute inside a positioned parent (PasswordGate, CaseStudy). */
  fixed?: boolean;
}

export default function MobileInteractiveBackground({ fixed = true }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    type Box = { x: number; y: number; birth: number; duration: number };
    let boxes: Box[] = [];
    let isUnmounted = false;
    let rafId = 0;

    const makeBox = (now: number, offset = 0): Box => {
      const cols = Math.floor(canvas.width / GRID_W);
      const rows = Math.floor(canvas.height / GRID_H);
      return {
        x: Math.floor(Math.random() * cols) * GRID_W,
        y: Math.floor(Math.random() * rows) * GRID_H,
        birth: now - offset,
        duration: 600 + Math.random() * 300, // fast: 600–900 ms
      };
    };

    // Pre-seed boxes at random phases so the animation is visible immediately
    const now0 = performance.now();
    for (let i = 0; i < 18; i++) {
      boxes.push(makeBox(now0, Math.random() * 600));
    }

    const animate = (now: number) => {
      if (isUnmounted) return;

      if (Math.random() < SPAWN_PROB && boxes.length < MAX_BOXES) {
        boxes.push(makeBox(now));
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = boxes.length - 1; i >= 0; i--) {
        const b = boxes[i];
        const age = now - b.birth;
        if (age > b.duration) { boxes.splice(i, 1); continue; }

        const progress = age / b.duration; // 0 → 1

        // === HORIZONTAL EXPAND from centre vertical line ===
        // Phase 1 (0–35%): width grows from 0 to full, centred
        // Phase 2 (35–65%): fully lit, hold
        // Phase 3 (65–100%): fade alpha to 0
        let drawW = GRID_W - GAP;
        let xOffset = 0;
        let alpha = BRIGHTNESS;

        if (progress < 0.35) {
          const ep = progress / 0.35;            // 0 → 1
          drawW = Math.max(1, (GRID_W - GAP) * ep);
          xOffset = ((GRID_W - GAP) - drawW) / 2; // keep centred
        } else if (progress > 0.65) {
          const fp = (progress - 0.65) / 0.35;   // 0 → 1
          alpha = BRIGHTNESS * (1 - fp);
        }

        ctx.fillStyle = `rgba(57, 255, 20, ${alpha})`;
        ctx.shadowColor = `rgba(57, 255, 20, ${alpha * 0.7})`;
        ctx.shadowBlur = 10;
        ctx.fillRect(b.x + GAP + xOffset, b.y + GAP, drawW, GRID_H - GAP);
        ctx.shadowBlur = 0;
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      isUnmounted = true;
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const pos = fixed ? "fixed" : "absolute";

  return (
    <div style={{
      position: pos,
      top: 0, left: 0,
      width: "100%", height: "100%",
      zIndex: fixed ? 0 : -1,
      pointerEvents: "none",
      overflow: "hidden",
    }}>
      <div style={{ position: "absolute", inset: 0, backgroundColor: "#050505" }} />
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0 }} />
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `
          linear-gradient(#000 ${GAP}px, transparent ${GAP}px),
          linear-gradient(90deg, #000 ${GAP}px, transparent ${GAP}px)
        `,
        backgroundSize: `${GRID_W}px ${GRID_H}px, ${GRID_W}px ${GRID_H}px`,
      }} />
    </div>
  );
}
