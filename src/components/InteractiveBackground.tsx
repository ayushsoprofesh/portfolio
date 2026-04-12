"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Dimensions for the tall skinny LED rectangles
const GRID_W = 12;
const GRID_H = 20;
const GAP = 2; // black grid line width

type Ripple = {
  id: number;
  x: number;
  y: number;
};

type ChevronCell = {
  col: number;
  row: number;
};

export default function InteractiveBackground({ showChevron, activeSection }: { showChevron: boolean, activeSection?: number }) {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [snappedPos, setSnappedPos] = useState({ x: -1000, y: -1000 });
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const chevronCanvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);
  const chevronTriggered = useRef(false);
  const mousePosRef = useRef({ x: -1000, y: -1000 });
  const prevSectionRef = useRef(activeSection);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
      setMousePos({ x: e.clientX, y: e.clientY });
      setSnappedPos({
        x: Math.floor(e.clientX / GRID_W) * GRID_W,
        y: Math.floor(e.clientY / GRID_H) * GRID_H,
      });
    };

    const handleMouseClick = (e: MouseEvent) => {
      const originX = Math.floor(e.clientX / GRID_W) * GRID_W + (GRID_W / 2);
      const originY = Math.floor(e.clientY / GRID_H) * GRID_H + (GRID_H / 2);
      const newRipple = { id: Date.now(), x: originX, y: originY };
      setRipples((prev) => [...prev, newRipple]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleMouseClick);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleMouseClick);
    };
  }, []);

  useEffect(() => {
    if (activeSection !== undefined && activeSection !== prevSectionRef.current) {
      // Trigger effect for "Hire Me For" (4) and "About Me" (5) sections
      if (activeSection === 4 || activeSection === 5) {
        const timer = setTimeout(() => {
          let originX = Math.floor(mousePosRef.current.x / GRID_W) * GRID_W + (GRID_W / 2);
          let originY = Math.floor(mousePosRef.current.y / GRID_H) * GRID_H + (GRID_H / 2);

          // Fallback to center if mouse is not on screen yet
          if (mousePosRef.current.x === -1000) {
            originX = Math.floor(window.innerWidth / 2 / GRID_W) * GRID_W + (GRID_W / 2);
            originY = Math.floor(window.innerHeight / 2 / GRID_H) * GRID_H + (GRID_H / 2);
          }

          const newRipple = { id: Date.now(), x: originX, y: originY };
          setRipples((prev) => [...prev, newRipple]);
        }, 1200); // 1.2s corresponds to the slide-up animation duration + slight delay

        prevSectionRef.current = activeSection;
        return () => clearTimeout(timer);
      }
      prevSectionRef.current = activeSection;
    }
  }, [activeSection]);

  // Build the chevron shape: one rectangle per row, forming a left-pointing arrow
  const buildChevron = useCallback(() => {
    const totalRows = Math.ceil(window.innerHeight / GRID_H);
    const midRow = Math.floor(totalRows / 2);
    const chevronHalfWidth = midRow; // max horizontal offset
    const cells: ChevronCell[] = [];

    for (let r = 0; r < totalRows; r++) {
      // Distance from vertical center determines the horizontal offset
      // Subtracting from max gives a ">" shape (pointing right)
      const distFromCenter = Math.abs(r - midRow);
      cells.push({ col: chevronHalfWidth - distFromCenter, row: r });
    }
    return cells;
  }, []);

  // Canvas-based chevron animation for performance
  useEffect(() => {
    if (!showChevron || chevronTriggered.current) return;
    chevronTriggered.current = true;

    const canvas = chevronCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chevronCells = buildChevron();
    const totalCols = Math.ceil(window.innerWidth / GRID_W);
    // The chevron width in columns (max offset from center row)
    const chevronWidth = Math.max(...chevronCells.map(c => c.col));
    // Start position: entirely off-screen right. End: entirely off-screen left.
    const startOffset = totalCols + chevronWidth + 5;
    const endOffset = -(chevronWidth + 5);
    const totalTravel = startOffset - endOffset;

    const duration = 2000; // 2 seconds to cross
    const startTime = performance.now() + 300; // Sync with card stagger entrance (delayChildren: 0.3s)

    const animate = (now: number) => {
      if (now < startTime) {
        animFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out quad for a decelerating sweep
      const eased = 1 - (1 - progress) * (1 - progress);
      const currentOffset = startOffset - eased * totalTravel;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const cell of chevronCells) {
        const col = Math.round(currentOffset - cell.col);
        const x = col * GRID_W;
        const y = cell.row * GRID_H;

        // Only draw if visible
        if (x + GRID_W < 0 || x > canvas.width) continue;

        // Core bright rectangle
        ctx.fillStyle = "rgba(57, 255, 20, 0.85)";
        ctx.fillRect(x + GAP, y + GAP, GRID_W - GAP, GRID_H - GAP);

        // Soft glow halo around the cell
        ctx.shadowColor = "rgba(57, 255, 20, 0.7)";
        ctx.shadowBlur = 15;
        ctx.fillStyle = "rgba(57, 255, 20, 0.4)";
        ctx.fillRect(x + GAP, y + GAP, GRID_W - GAP, GRID_H - GAP);
        ctx.shadowBlur = 0;

        // Trail glow: light up a few cells behind the leading edge
        for (let trail = 1; trail <= 4; trail++) {
          const trailCol = col + trail;
          const tx = trailCol * GRID_W;
          if (tx + GRID_W < 0 || tx > canvas.width) continue;
          const alpha = 0.5 - trail * 0.1;
          ctx.fillStyle = `rgba(57, 255, 20, ${Math.max(alpha, 0.05)})`;
          ctx.fillRect(tx + GAP, y + GAP, GRID_W - GAP, GRID_H - GAP);
        }
      }

      if (progress < 1) {
        animFrameRef.current = requestAnimationFrame(animate);
      } else {
        // Fade the canvas out after the sweep
        const fadeStart = performance.now();
        const fadeDuration = 600;
        const fadeOut = (now2: number) => {
          const fp = Math.min((now2 - fadeStart) / fadeDuration, 1);
          canvas.style.opacity = String(1 - fp);
          if (fp < 1) {
            requestAnimationFrame(fadeOut);
          } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            chevronTriggered.current = false; // Allow re-trigger
          }
        };
        requestAnimationFrame(fadeOut);
      }
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [showChevron, buildChevron]);

  // Reset trigger when section deactivates so it can fire again
  useEffect(() => {
    if (!showChevron) {
      chevronTriggered.current = false;
    }
  }, [showChevron]);

  return (
    <div
      style={{
        position: "absolute",
        top: 0, left: 0,
        width: "100%", height: "100%",
        zIndex: -10,
        pointerEvents: "none",
        overflow: "hidden"
      }}
    >
      {/* LAYER 1: Base + cursor glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#050505",
          backgroundImage: `radial-gradient(circle 400px at ${mousePos.x}px ${mousePos.y}px, rgba(57, 255, 20, 0.15), transparent)`
        }}
      />

      {/* LAYER 2: Click ripples */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            initial={{ width: 0, height: 0, x: "-50%", y: "-50%", opacity: 1 }}
            animate={{ width: 1400, height: 1400, opacity: 0 }}
            transition={{ duration: 1.2 }}
            onAnimationComplete={() => {
              setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
            }}
            style={{
              position: "absolute",
              left: ripple.x,
              top: ripple.y,
              borderRadius: "50%",
              backgroundColor: "rgba(57, 255, 20, 0.15)",
              boxShadow: "0 0 50px rgba(57, 255, 20, 0.5) inset, 0 0 20px rgba(57, 255, 20, 0.6)",
              border: "1px solid rgba(57, 255, 20, 0.4)",
              pointerEvents: "none"
            }}
          />
        ))}
      </AnimatePresence>

      {/* LAYER 3: Chevron sweep canvas
      <canvas
        ref={chevronCanvasRef}
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none"
        }}
      /> */}

      {/* LAYER 4: Single LED spotlight */}
      <div
        style={{
          position: "absolute",
          left: snappedPos.x,
          top: snappedPos.y - 2 * GRID_H,
          width: GRID_W,
          height: GRID_H,
          backgroundColor: "rgba(57, 255, 20, 0.8)",
          boxShadow: "0 0 20px rgba(57, 255, 20, 0.6)",
          transition: "left 0.05s linear, top 0.05s linear"
        }}
      />

      {/* LAYER 5: Black grid mask */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(#000 2px, transparent 2px),
            linear-gradient(90deg, #000 2px, transparent 2px)
          `,
          backgroundSize: `${GRID_W}px ${GRID_H}px, ${GRID_W}px ${GRID_H}px`
        }}
      />
    </div>
  );
}
