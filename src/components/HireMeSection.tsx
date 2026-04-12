"use client";

import { motion } from "framer-motion";

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

export default function HireMeSection({ isActive }: { isActive: boolean }) {
  const revealEase = [0.25, 1, 0.5, 1] as const;

  // Staggering animation when section is active
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1, 
      transition: { ease: revealEase, duration: 0.8 } 
    }
  };

  return (
    <section className="hire-me-section">
      <motion.div 
        className="hire-me-container"
        variants={containerVariants}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
      >
        <motion.h2 
          className="hire-me-title"
          variants={itemVariants}
        >
          Hire Me For
        </motion.h2>
        
        <div className="hire-me-grid">
          {HIRE_ME_SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              className="hire-me-card glass-panel"
              variants={itemVariants}
              whileHover={{ 
                y: -4, 
                backgroundColor: "rgba(30, 30, 30, 0.85)",
                boxShadow: "0 0 15px rgba(57, 255, 20, 0.15), 0 8px 32px 0 rgba(0, 0, 0, 0.37)",
                borderColor: "rgba(255, 255, 255, 0.15)"
              }}
              transition={{ duration: 0.3 }}
            >
              <div style={{ display: "flex", alignItems: "baseline", gap: "0.8rem", marginBottom: "0.8rem" }}>
                <span style={{ color: "var(--matrix-green)", fontSize: "1.2rem", fontWeight: "bold", opacity: 0.8 }}>0{index + 1}</span>
                <h3 className="card-company" style={{ margin: 0 }}>{service.title}</h3>
              </div>
              <div className="card-body">
                {service.body}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
