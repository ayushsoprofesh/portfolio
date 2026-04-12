"use client";

import { motion } from "framer-motion";

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

export default function ExperienceSection({ isActive }: { isActive: boolean }) {
  const revealEase = [0.25, 1, 0.5, 1] as const;

  // Orchestrate the staggering of the elements once this section is completely visible
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3 // Wait for the horizontal sweep to begin before fading content
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
    <section className="experience-section">
      <motion.div 
        className="experience-container"
        variants={containerVariants}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
      >
        <motion.h2 
          className="experience-title"
          variants={itemVariants}
        >
          Experience
        </motion.h2>
        
        <div className="cards-grid">
          {EXPERIENCES.map((exp) => (
            <motion.div
              key={exp.id}
              className="experience-card glass-panel"
              variants={itemVariants}
              whileHover={{ 
                y: -4, 
                backgroundColor: "rgba(30, 30, 30, 0.85)",
                boxShadow: "0 0 15px rgba(57, 255, 20, 0.15), 0 8px 32px 0 rgba(0, 0, 0, 0.37)",
                borderColor: "rgba(255, 255, 255, 0.15)"
              }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="card-company">{exp.company}</h3>
              <p className="card-designation">{exp.designation}</p>
              <p className="card-tenure">{exp.subHeader}</p>
              <div className="card-body">
                {exp.body}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
