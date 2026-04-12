"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import ExperienceSection from "@/components/ExperienceSection";
import ChosenWorksSection from "@/components/ChosenWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import HireMeSection from "@/components/HireMeSection";
import AboutMeSection from "@/components/AboutMeSection";
import FooterSection from "@/components/FooterSection";
import InteractiveBackground from "@/components/InteractiveBackground";
import GlobalNav from "@/components/GlobalNav";

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const [activeFrame, setActiveFrame] = useState(0);
  
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const vh = window.innerHeight;
    
    if (y < 120) {
      setActiveSection(0); // Hero
    } else if (y < vh * 1.8) {
      setActiveSection(1); // Experience
    } else if (y < vh * 7.5) {
      setActiveSection(2); // Chosen Works
      
      // Map remaining scroll zone to 5 frames (0–4)
      const frameStart = vh * 2.5;
      const frameEnd = vh * 7;
      const progress = Math.max(0, Math.min(0.999, (y - frameStart) / (frameEnd - frameStart)));
      setActiveFrame(Math.floor(progress * 5));
    } else if (y < vh * 9.5) {
      setActiveSection(3); // Testimonials
    } else if (y < vh * 11.5) {
      setActiveSection(4); // Hire Me For
    } else {
      setActiveSection(5); // About Me
    }
  });
  return (
    <>
    <GlobalNav activeSection={activeSection} />
    <main className="portfolio-main" style={{ position: "relative", zIndex: 10, backgroundColor: "transparent" }}>
      
      {/* Mega scroll container for all sections */}
      <div style={{ height: "1350vh", position: "relative" }}>
        
        {/* Sticky viewport — always fills the screen */}
        <div style={{ position: "sticky", top: "var(--nav-height)", height: "calc(100vh - var(--nav-height))", width: "100vw", overflow: "hidden" }}>
          
          <InteractiveBackground showChevron={activeSection === 1} activeSection={activeSection} />
          
          {/* 300vw horizontal track holding all 3 sections side-by-side */}
          <motion.div 
            style={{ 
              display: "flex", 
              width: "300vw", 
              height: "calc(100vh - var(--nav-height))",
              willChange: "transform"
            }}
            initial={false}
            animate={{ x: `${Math.min(activeSection, 2) * -100}vw` }}
            transition={{ ease: [0.25, 1, 0.5, 1], duration: 1.2 }}
          >
            
            {/* =========================================
                SECTION 1: HERO
                ========================================= */}
            <motion.section 
              className="hero-section"
              style={{ 
                width: "100vw", 
                height: "calc(100vh - var(--nav-height))", 
                flexShrink: 0, 
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden"
              }}
              initial={false}
              animate={{ 
                x: activeSection >= 1 ? "-20vw" : "0vw",
                filter: activeSection >= 1 ? "blur(30px) brightness(0)" : "blur(0px) brightness(1)",
                opacity: activeSection >= 1 ? 0 : 1 
              }}
              transition={{ 
                duration: 1.0, 
                ease: [0.32, 0.72, 0, 1]
              }}
            >
              
              <div className="matrix-container">
                <div className="background-img-wrapper" style={{ position: "absolute", width: "100%", height: "100%" }}>
                  <Image 
                    src="/background.png" 
                    alt="Matrix CRT Array"
                    fill 
                    sizes="100vw"
                    style={{ objectFit: 'fill' }}
                    priority
                    loading="eager"
                  />
                </div>

                <div className="precise-grid">
                   <div className="grid-cell cell-2-2">
                     <div className="inner-screen">
                       <motion.div
                          variants={{
                            hidden: { opacity: 1 },
                            visible: {
                              opacity: 1,
                              transition: { staggerChildren: 0.03, delayChildren: 0.2 },
                            },
                          }}
                          initial="hidden"
                          animate="visible"
                          className="text-screen"
                        >
                          {[
                            { text: "Hi.", className: "matrix-text intro" },
                            { text: "I'm Ayush.", className: "matrix-text intro" },
                            { text: "", className: "" }, 
                            { text: "A UX designer who turns heavy", className: "matrix-text bio" },
                            { text: "enterprise data into simple,", className: "matrix-text bio" },
                            { text: "scalable products. I recently", className: "matrix-text bio" },
                            { text: "spent over a year at Oracle", className: "matrix-text bio" },
                            { text: "modernizing complex ERP systems.", className: "matrix-text bio" }
                          ].map((line, lineIndex) => (
                            line.text === "" ? <br key={`br-${lineIndex}`} /> : (
                              <p key={`line-${lineIndex}`} className={line.className}>
                                {line.text.split("").map((char, charIndex) => (
                                  <motion.span 
                                    key={`${lineIndex}-${charIndex}`}
                                    variants={{
                                      hidden: { opacity: 0, display: "none" },
                                      visible: { opacity: 1, display: "inline-block" }
                                    }}
                                  >
                                    {char === " " ? "\u00A0" : char}
                                  </motion.span>
                                ))}
                              </p>
                            )
                          ))}
                        </motion.div>
                     </div>
                   </div>

                   <div className="grid-cell cell-2-3">
                     <div className="inner-screen profile-screen">
                       <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 1.2, delay: 0.5 }}
                          className="profile-image-container"
                        >
                         <Image
                            src="/Profile.png"
                            alt="Ayush Profile"
                            fill
                            sizes="(max-width: 768px) 100vw, 25vw"
                            priority
                            className="profile-image"
                         />
                        </motion.div>
                     </div>
                   </div>
                </div>
              </div>

              <div className="scanlines"></div>

              {/* Right-edge gradient mask for Hero exit */}
              <motion.div 
                style={{
                  position: "absolute",
                  top: 0, right: 0,
                  width: "25vw", height: "100%",
                  background: "linear-gradient(to right, transparent 0%, #060606 100%)",
                  pointerEvents: "none",
                  zIndex: 20
                }}
                initial={false}
                animate={{ opacity: activeSection >= 1 ? 1 : 0 }}
                transition={{ duration: 0.2, ease: "easeIn" }}
              />

            </motion.section>

            {/* =========================================
                SECTION 2: EXPERIENCE
                ========================================= */}
            <motion.div 
              style={{ width: "100vw", height: "calc(100vh - var(--nav-height))", flexShrink: 0, position: "relative" }}
              initial={false}
              animate={{ 
                x: activeSection >= 2 ? "-20vw" : "0vw",
                filter: activeSection >= 2 ? "blur(30px) brightness(0)" : "blur(0px) brightness(1)",
                opacity: activeSection >= 2 ? 0 : 1 
              }}
              transition={{ duration: 1.0, ease: [0.32, 0.72, 0, 1] }}
            >
              <ExperienceSection isActive={activeSection === 1} />

              {/* Right-edge gradient mask for Experience exit */}
              <motion.div 
                style={{
                  position: "absolute",
                  top: 0, right: 0,
                  width: "25vw", height: "100%",
                  background: "linear-gradient(to right, transparent 0%, #060606 100%)",
                  pointerEvents: "none",
                  zIndex: 20
                }}
                initial={false}
                animate={{ opacity: activeSection >= 2 ? 1 : 0 }}
                transition={{ duration: 0.2, ease: "easeIn" }}
              />
            </motion.div>

            {/* =========================================
                SECTION 3: CHOSEN WORKS
                ========================================= */}
            <motion.div 
              style={{ width: "100vw", height: "calc(100vh - var(--nav-height))", flexShrink: 0, position: "relative" }}
              initial={false}
              animate={{ 
                y: activeSection >= 3 ? "-20vh" : "0vh",
                filter: activeSection >= 3 ? "blur(30px) brightness(0)" : "blur(0px) brightness(1)",
                opacity: activeSection >= 3 ? 0 : 1 
              }}
              transition={{ duration: 1.0, ease: [0.32, 0.72, 0, 1] }}
            >
              <ChosenWorksSection isActive={activeSection === 2} activeFrame={activeFrame} />
            </motion.div>

          </motion.div>

          {/* =========================================
              SECTION 4: TESTIMONIALS (slides up from below)
              ========================================= */}
          <motion.div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100vw",
              height: "calc(100vh - var(--nav-height))",
              zIndex: 2,
            }}
            initial={false}
            animate={{
              y: activeSection >= 3 ? "0vh" : "100vh",
            }}
            transition={{ ease: [0.25, 1, 0.5, 1], duration: 1.0 }}
          >
            <TestimonialsSection isActive={activeSection === 3} />
          </motion.div>

        {/* =========================================
              SECTION 5: HIRE ME FOR (slides up from below over Section 4)
              ========================================= */}
          <motion.div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100vw",
              height: "calc(100vh - var(--nav-height))",
              zIndex: 3,
            }}
            initial={false}
            animate={{
              y: activeSection >= 4 ? "0vh" : "100vh",
            }}
            transition={{ ease: [0.25, 1, 0.5, 1], duration: 1.0 }}
          >
            <HireMeSection isActive={activeSection === 4} />
          </motion.div>

          {/* =========================================
              SECTION 6: ABOUT ME (slides up from below over Section 5)
              ========================================= */}
          <motion.div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100vw",
              height: "calc(100vh - var(--nav-height))",
              zIndex: 4,
            }}
            initial={false}
            animate={{
              y: activeSection >= 5 ? "0vh" : "100vh",
            }}
            transition={{ ease: [0.25, 1, 0.5, 1], duration: 1.0 }}
          >
            <AboutMeSection isActive={activeSection === 5} />
          </motion.div>

        </div>
      </div>
      
      {/* Spacer to force the 1350vh mega container to scroll upwards out of the screen natively */}
      <div style={{ height: "calc(100vh - var(--nav-height))", width: "100vw", pointerEvents: "none" }} />
    </main>
    <motion.div
      style={{
         position: "fixed",
         bottom: 0, left: 0, width: "100vw", height: "100vh", zIndex: -5,
      }}
      initial={false}
      animate={{
         opacity: activeSection >= 5 ? 1 : 0
      }}
    >
      <FooterSection />
    </motion.div>
    </>
  );
}
