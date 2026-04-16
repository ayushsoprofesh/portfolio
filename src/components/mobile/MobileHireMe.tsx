"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HIRE_ME_SERVICES = [
  {
    id: 1,
    title: "Complex System Architecture",
    body: "I specialize in enterprise B2B SaaS and data ecosystems. I thrive in environments where I must translate massive data volumes, edge cases, and technical constraints into scalable UI patterns."
  },
  {
    id: 2,
    title: "Rapid Agile Execution",
    body: "I combine enterprise systems thinking with startup speed. I champion rapid design cycles, collaborating in real time with cross functional PMs and engineers to unblock development and ship features fast."
  },
  {
    id: 3,
    title: "Zero to One Product Strategy",
    body: "From foundational analytics dashboards to end to end B2C event platforms, I take ambiguous requirements and drive the UX lifecycle from research to high fidelity delivery."
  },
  {
    id: 4,
    title: "Design Systems and Standardization",
    body: "I design for the ecosystem, not isolated screens. I align strictly with design systems, creating standardized reusable patterns that support familiarity and scaling across multiple applications."
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

export default function MobileHireMe() {
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
      }}>Hire Me For</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <AnimatePresence initial={false}>
          {HIRE_ME_SERVICES.map((service, index) => {
            const isExpanded = expandedId === service.id;
            const isHidden = expandedId !== null && expandedId !== service.id;
            if (isHidden) return null;

            return (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                style={isExpanded ? cardActive : cardBase}
                onClick={() => setExpandedId(isExpanded ? null : service.id)}
              >
                <div style={{ padding: "1.25rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "8px", flex: 1, paddingRight: "1rem" }}>
                      <span style={{
                        color: "#39ff14",
                        fontFamily: "var(--font-share-tech), monospace",
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        opacity: 0.8,
                        flexShrink: 0,
                      }}>0{index + 1}</span>
                      <h3 style={{
                        color: "#ffffff",
                        fontWeight: 700,
                        fontSize: "1rem",
                        lineHeight: 1.4,
                        fontFamily: "var(--font-inter), system-ui, sans-serif",
                      }}>{service.title}</h3>
                    </div>
                    <span style={{
                      color: "#39ff14",
                      fontFamily: "var(--font-share-tech), monospace",
                      fontSize: "1.25rem",
                      lineHeight: 1,
                      flexShrink: 0,
                    }}>{isExpanded ? "−" : "+"}</span>
                  </div>

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
                          marginTop: "0.75rem",
                          fontFamily: "var(--font-inter), system-ui, sans-serif",
                        }}>
                          {service.body}
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
