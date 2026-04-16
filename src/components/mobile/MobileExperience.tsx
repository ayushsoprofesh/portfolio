"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EXPERIENCES = [
  {
    id: 1,
    company: "Oracle",
    designation: "UX Designer - SCM",
    subHeader: "Jul 2024 - Present | Bangalore, India",
    body: "Led UX design for Oracle Fusion Pricing across 9 products. Solved massive data bottlenecks by designing scalable batch job workflows that drastically reduced manual effort. Standardized UI patterns across the enterprise ecosystem in strict alignment with Oracle's design system, executing through rapid, cross-functional sprints."
  },
  {
    id: 2,
    company: "Oracle",
    designation: "UX Intern - CX Marketing",
    subHeader: "May 2023 - Jul 2023 | Bangalore, India",
    body: "Built a zero-to-one customer segment analytics dashboard for Oracle Unity (CDP). Translated ambiguous requirements into intuitive data visualizations that defined the foundational product direction for the analytics vertical, resulting in an exclusive full-time return offer."
  },
  {
    id: 3,
    company: "Alcheringa IIT Guwahati",
    designation: "Web Design Head",
    subHeader: "May 2022 - May 2023 | Guwahati, India",
    body: "Co-led a 600-person team for North East India's largest cultural festival. Directed the end-to-end design and delivery of 13 web portals and 1 mobile app alongside the development team, demonstrating rapid cross-functional execution by delivering massive-scale projects on extreme 18-day deadlines."
  }
];

const cardBase: React.CSSProperties = {
  overflow: "hidden",
  border: "1px solid rgba(255,255,255,0.1)",
  background: "rgba(0,0,0,0.4)",
  backdropFilter: "blur(10px)",
  borderRadius: "16px",
  cursor: "pointer",
  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
};

const cardActive: React.CSSProperties = {
  ...cardBase,
  boxShadow: "0 0 0 1px rgba(57,255,20,0.4), 0 4px 20px rgba(57,255,20,0.1)",
  border: "1px solid rgba(57,255,20,0.5)",
};

export default function MobileExperience() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <h2 style={{
        color: "#39ff14",
        fontFamily: "var(--font-share-tech), monospace",
        fontSize: "1.5rem",
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        paddingLeft: "0.5rem",
        marginBottom: "0.5rem",
        textShadow: "0 0 4px rgba(57,255,20,0.5)",
      }}>Experience</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <AnimatePresence initial={false}>
          {EXPERIENCES.map((exp) => {
            const isExpanded = expandedId === exp.id;
            const isHidden = expandedId !== null && expandedId !== exp.id;
            if (isHidden) return null;

            return (
              <motion.div
                key={exp.id}
                layout
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                style={isExpanded ? cardActive : cardBase}
                onClick={() => setExpandedId(isExpanded ? null : exp.id)}
              >
                <div style={{ padding: "1.25rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "4px" }}>
                    <div>
                      <h3 style={{
                        color: "#ffffff",
                        fontWeight: 700,
                        fontSize: "1.1rem",
                        fontFamily: "var(--font-inter), system-ui, sans-serif",
                        marginBottom: "2px",
                      }}>{exp.company}</h3>
                      <p style={{
                        color: "#d1d5db",
                        fontSize: "0.875rem",
                        fontFamily: "var(--font-inter), system-ui, sans-serif",
                      }}>{exp.designation}</p>
                    </div>
                    <span style={{
                      color: "#39ff14",
                      fontFamily: "var(--font-share-tech), monospace",
                      fontSize: "1.25rem",
                      lineHeight: 1,
                      marginTop: "2px",
                    }}>{isExpanded ? "−" : "+"}</span>
                  </div>
                  <p style={{
                    color: "rgba(57,255,20,0.75)",
                    fontSize: "0.7rem",
                    fontFamily: "var(--font-share-tech), monospace",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: isExpanded ? "1rem" : 0,
                    marginTop: "6px",
                  }}>{exp.subHeader}</p>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: "hidden" }}
                      >
                        <div style={{
                          color: "#9ca3af",
                          fontSize: "0.875rem",
                          lineHeight: 1.7,
                          borderTop: "1px solid rgba(255,255,255,0.08)",
                          paddingTop: "1rem",
                          fontFamily: "var(--font-inter), system-ui, sans-serif",
                        }}>
                          {exp.body}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
