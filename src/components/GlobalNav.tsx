"use client";

import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

interface GlobalNavProps {
  activeSection: number;
}

export default function GlobalNav({ activeSection }: GlobalNavProps) {
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

  const handleScrollTo = (sectionIndex: number) => {
    if (!isHomePage) {
      router.push("/");
      return;
    }

    const vh = window.innerHeight;
    const scrollTargets: Record<number, number> = {
      0: 0,                // Hero
      1: vh * 0.5,         // Experience (WORK)
      2: vh * 2.5,         // Chosen Works
      3: vh * 8.2,         // Hire Me For
      4: vh * 10.1,        // About Me
      5: vh * 12.1,        // Footer panel
    };
    window.scrollTo({ top: scrollTargets[sectionIndex] ?? 0, behavior: "smooth" });
  };

  const isWorkActive = activeSection === 1 || activeSection === 2;
  const isAboutActive = activeSection === 3 || activeSection === 4 || activeSection === 5;

  const navLinks = [
    { label: "WORK", active: isWorkActive, onClick: () => handleScrollTo(1) },
    { label: "ABOUT", active: isAboutActive, onClick: () => handleScrollTo(3) },
    {
      label: "CONTACT",
      active: false,
      onClick: () => {
        if (!isHomePage) {
          router.push("/");
          return;
        }

        handleScrollTo(5);
      },
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
