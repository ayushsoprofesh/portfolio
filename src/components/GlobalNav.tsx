"use client";

import { motion } from "framer-motion";

interface GlobalNavProps {
  activeSection: number;
}

export default function GlobalNav({ activeSection }: GlobalNavProps) {
  const handleScrollTo = (sectionIndex: number) => {
    const vh = window.innerHeight;
    const scrollTargets: Record<number, number> = {
      0: 0,                // Hero
      1: vh * 0.5,         // Experience (WORK)
      2: vh * 2.5,         // Chosen Works
      // 3: vh * 8,        // Testimonials (HIDDEN)
      3: vh * 8,           // Hire Me For (ABOUT) - was 4, mapped up
      4: vh * 10,          // About Me - was 5, mapped up
    };
    window.scrollTo({ top: scrollTargets[sectionIndex] ?? 0, behavior: "smooth" });
  };

  // WORK is active during Experience (1) and Chosen Works (2)
  const isWorkActive = activeSection === 1 || activeSection === 2;
  // ABOUT is active during Hire Me For (3) and About Me (4) [Testimonials hidden]
  const isAboutActive = activeSection === 3 || activeSection === 4;

  const navLinks = [
    { label: "WORK", active: isWorkActive, onClick: () => handleScrollTo(1) },
    { label: "ABOUT", active: isAboutActive, onClick: () => handleScrollTo(3) },
    {
      label: "CONTACT",
      active: false,
      onClick: () => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" }),
    },
  ];

  return (
    <nav className="global-nav" id="global-nav">
      {/* Left — Logo / Name */}
      <div className="nav-left" onClick={() => handleScrollTo(0)}>
        <span className="nav-logo-text">Ayush&apos;s Portfolio</span>
        <span className="nav-cursor" aria-hidden="true">▌</span>
      </div>

      {/* Center — Links */}
      <div className="nav-center">
        {navLinks.map(({ label, active, onClick }) => (
          <motion.button
            key={label}
            className={`nav-link${active ? " nav-link-active" : ""}`}
            onClick={onClick}
            whileHover={{ color: "#39ff14" }}
            transition={{ duration: 0.2 }}
          >
            {label}
          </motion.button>
        ))}
      </div>

      {/* Right — Resume CTA */}
      <div className="nav-right">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-resume-btn"
        >
          Resume <span className="resume-arrow">↓</span>
        </a>
      </div>
    </nav>
  );
}
