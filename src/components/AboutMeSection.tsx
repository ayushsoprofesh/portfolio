"use client";

import { motion } from "framer-motion";

const MARQUEE_ITEMS = [
  "Speaker",
  "Woodblock Printing",
  "Graffiti",
  "Motion Folio (Video Placeholder)",
  "Alcheringa Theme Video (Video Placeholder)",
  "Photos with Friends",
  "My Photo"
];

export default function AboutMeSection({ isActive }: { isActive: boolean }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, ease: [0.25, 1, 0.5, 1] }
    }
  };

  const textVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.3, duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="about-me-section">
      <motion.div
        className="about-me-container"
        variants={containerVariants}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
      >
        <motion.div className="about-me-text-wrapper" variants={textVariants}>
          <h2 className="about-me-title">Beyond the Pixels</h2>
          <p className="about-me-body">
            When I am not designing, I spend my time <strong style={{ color: "var(--matrix-green)", fontWeight: 700 }}>living</strong> and <strong style={{ color: "var(--matrix-green)", fontWeight: 700 }}>consuming</strong>. I love cinema, music, and all forms of storytelling. I admire how minute details shape a larger idea. Connecting with new people gives me a fresh perspective of the world through their lenses. Ultimately, good design comes from understanding people. I also like creating. Who does not? Here are a few snippets of my creations.
          </p>
        </motion.div>

        {/* The Infinite Marquee */}
        <motion.div
          className="marquee-container"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.8, duration: 1 } }
          }}
        >
          {/* We duplicate the track to create a seamless infinite loop */}
          <div className="marquee-track">
            <div className="marquee-content">
              {MARQUEE_ITEMS.map((item, index) => (
                <div key={`item-a-${index}`} className="marquee-frame glass-panel">
                  <span className="marquee-placeholder-text">{item}</span>
                </div>
              ))}
            </div>
            {/* Duplicated content for seamless loop */}
            <div className="marquee-content" aria-hidden="true">
              {MARQUEE_ITEMS.map((item, index) => (
                <div key={`item-b-${index}`} className="marquee-frame glass-panel">
                  <span className="marquee-placeholder-text">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
