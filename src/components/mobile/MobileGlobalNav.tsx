"use client";

import { useEffect, useRef, useState } from "react";

const FULL_TEXT = "Ayush's Portfolio";

export default function MobileGlobalNav() {
  const [displayed, setDisplayed] = useState("");
  const typingRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let i = 0;
    setDisplayed("");
    const type = () => {
      i += 1;
      setDisplayed(FULL_TEXT.slice(0, i));
      if (i < FULL_TEXT.length) {
        typingRef.current = setTimeout(type, 65);
      }
    };
    typingRef.current = setTimeout(type, 400);
    return () => { if (typingRef.current) clearTimeout(typingRef.current); };
  }, []);

  const pathname = typeof window !== "undefined" ? window.location.pathname : "";
  const isHomePage = pathname === "/";

  const handleLogoClick = () => {
    if (!isHomePage) {
      window.location.href = "/";
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav style={{
      position: "fixed",
      top: 0, left: 0,
      width: "100%",
      height: "var(--nav-height, 56px)",
      padding: "0 1.25rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      zIndex: 100,
      background: "rgba(0,0,0,0.85)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid rgba(57,255,20,0.1)",
    }}>
      <div
        onClick={handleLogoClick}
        style={{
          color: "#39ff14",
          fontFamily: "var(--font-share-tech), 'Share Tech Mono', monospace",
          fontSize: "0.85rem",
          letterSpacing: "0.08em",
          cursor: "pointer",
          userSelect: "none",
          textShadow: "0 0 6px rgba(57,255,20,0.5)",
          display: "flex",
          alignItems: "center",
          gap: "2px",
          whiteSpace: "nowrap",
        }}
      >
        <span>{displayed}</span>
        <span style={{
          display: "inline-block",
          animation: "cursor-blink 1s steps(2,start) infinite",
          opacity: 0.7,
        }}>▌</span>
      </div>

      <a
        href="/Resume updated.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          padding: "5px 10px",
          border: "1px solid rgba(57,255,20,0.4)",
          borderRadius: "4px",
          color: "#39ff14",
          fontSize: "0.7rem",
          fontFamily: "var(--font-share-tech), monospace",
          letterSpacing: "0.1em",
          background: "rgba(57,255,20,0.05)",
          boxShadow: "0 0 10px rgba(57,255,20,0.15)",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: "4px",
          transition: "all 0.2s ease",
        }}
      >
        Resume <span style={{ fontSize: "10px" }}>↓</span>
      </a>
    </nav>
  );
}
