"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

interface GlobalNavProps {
  activeSection: number;
  isLoaded?: boolean;
  onNavigate?: (index: number) => void;
}

const FULL_TEXT = "Ayush's Portfolio";

export default function GlobalNav({ activeSection, isLoaded = true, onNavigate }: GlobalNavProps) {
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

  // ── Typing animation state ──────────────────────────────────────────────
  const [displayed, setDisplayed] = useState("");
  const [typingDone, setTypingDone] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const typingRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Wait until loader finishes if on homepage
    if (isHomePage && !isLoaded) return;

    let i = 0;
    setDisplayed("");
    setTypingDone(false);
    setShowCursor(true);

    const type = () => {
      i += 1;
      setDisplayed(FULL_TEXT.slice(0, i));
      if (i < FULL_TEXT.length) {
        typingRef.current = setTimeout(type, 65);
      } else {
        setTypingDone(true);
      }
    };

    // Small initial delay before starting
    typingRef.current = setTimeout(type, 400);
    return () => {
      if (typingRef.current) clearTimeout(typingRef.current);
    };
  }, [isLoaded, isHomePage]);

  // The cursor blinks indefinitely.



  // ── Scroll helpers ──────────────────────────────────────────────────────
  const handleScrollTo = (sectionIndex: number) => {
    if (!isHomePage) {
      router.push("/");
      return;
    }
    
    if (onNavigate) {
      onNavigate(sectionIndex);
    }
  };

  const isWorkActive    = activeSection === 1 || activeSection === 2;
  const isAboutActive   = activeSection === 3 || activeSection === 4;
  const isContactActive = activeSection === 5;

  const navLinks = [
    { label: "WORK",    active: isWorkActive,    onClick: () => handleScrollTo(1) },     // Index 1 = Experience
    { label: "ABOUT",   active: isAboutActive,   onClick: () => handleScrollTo(4) },     // Index 4 = About Me
    {
      label: "CONTACT",
      active: isContactActive,
      onClick: () => {
        if (!isHomePage) { router.push("/"); return; }
        handleScrollTo(5);
      },
    },
  ];

  return (
    <nav className="global-nav" id="global-nav">
      {/* Left — Logo / Name with typing animation */}
      <div className="nav-left" onClick={() => handleScrollTo(0)}>
        <span className="nav-logo-text">{displayed}</span>
        {showCursor && (
          <span className="nav-cursor" aria-hidden="true">▌</span>
        )}
      </div>

      {/* Center — Links */}
      <div className="nav-center">
        {navLinks.map(({ label, active, onClick }) => (
          <motion.button
            key={label}
            className={`nav-link${active ? " nav-link-active" : ""}${label === "CONTACT" && active ? " nav-contact-lit" : ""}`}
            onClick={onClick}
            whileHover={{ color: "#39ff14" }}
            transition={{ duration: 0.2 }}
          >
            {label}
          </motion.button>
        ))}
      </div>

      {/* Right — Resume CTA */}
      <motion.div
        className="nav-right"
        initial={false}
        animate={{
          x: isContactActive ? 150 : 0,
          opacity: isContactActive ? 0 : 1,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{ pointerEvents: isContactActive ? "none" : "auto" }}
      >
        <a
          href="/Resume updated.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-resume-btn nav-resume-btn--glow"
        >
          Resume <span className="resume-arrow">↓</span>
        </a>
      </motion.div>
    </nav>
  );
}
