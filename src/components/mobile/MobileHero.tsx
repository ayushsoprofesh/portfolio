"use client";

import { motion } from "framer-motion";

export default function MobileHero() {
  // Both cards share identical width, so they match in size
  const CARD_SIZE = "min(88vw, 340px)";

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      padding: "1rem 1.25rem",
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
    }}>
      {/* Profile Photo (Top) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        style={{
          width: CARD_SIZE,
          height: CARD_SIZE,           /* Same height as width = square-ish card */
          borderRadius: "20px",
          overflow: "hidden",
          position: "relative",
          border: "1px solid rgba(57,255,20,0.2)",
          boxShadow: "0 4px 30px rgba(57,255,20,0.08)",
          background: "rgba(0,0,0,0.4)",
          backdropFilter: "blur(8px)",
          flexShrink: 0,
          /* Fix for corner radius loss on some mobile browsers */
          WebkitMaskImage: "-webkit-radial-gradient(white, black)",
          transform: "translateZ(0)",
          WebkitTransform: "translateZ(0)",
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            borderRadius: "inherit",
          }}
        >
          <source src="/Profile.mp4" type="video/mp4" />
        </video>
        <div style={{
          position: "absolute",
          inset: 0,
          background: "rgba(113,255,24,0.15)",
          mixBlendMode: "multiply",
          pointerEvents: "none",
          borderRadius: "inherit",
        }} />
      </motion.div>

      {/* Text Card (Bottom) — same width, auto height */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        style={{
          width: CARD_SIZE,
          minHeight: "160px",
          padding: "1.5rem",
          borderRadius: "20px",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
          backdropFilter: "blur(12px)",
          background: "rgba(0,0,0,0.6)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <p style={{
          color: "#39ff14",
          fontFamily: "var(--font-share-tech), 'Share Tech Mono', monospace",
          fontSize: "1.75rem",
          marginBottom: "0.75rem",
          fontWeight: 700,
          letterSpacing: "0.04em",
          textShadow: "0 0 5px rgba(57,255,20,0.5)",
          lineHeight: 1.3,
        }}>
          Hi.<br/>I'm Ayush.
        </p>
        <div style={{
          color: "#d1d5db",
          fontSize: "0.9rem",
          lineHeight: 1.7,
          fontFamily: "var(--font-inter), system-ui, sans-serif",
        }}>
          <p>a UX Designer who turns data into simple, scalable products.</p>
          <p style={{ marginTop: "0.4rem" }}>I've spent close to 2 years at Oracle designing ERP systems.</p>
        </div>
      </motion.div>
    </div>
  );
}
