"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, useMotionValueEvent, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import ExperienceSection from "@/components/ExperienceSection";
import ChosenWorksSection from "@/components/ChosenWorksSection";
// import TestimonialsSection from "@/components/TestimonialsSection"; // HIDDEN FOR NOW
import HireMeSection from "@/components/HireMeSection";
import AboutMeSection from "@/components/AboutMeSection";
import FooterSection from "@/components/FooterSection";
import InteractiveBackground from "@/components/InteractiveBackground";
import GlobalNav from "@/components/GlobalNav";
import MatrixLoader from "@/components/MatrixLoader";
import { ScrollConfig } from "@/lib/scroll-config";

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const [activeFrame, setActiveFrame] = useState(0);
  const [showLoader, setShowLoader] = useState(true);
  const [counterZoom, setCounterZoom] = useState(1);
  const baselineDpr = useRef(1);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!showLoader && videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  }, [showLoader]);

  // Track browser zoom: compare current DPR to the baseline and invert it
  useEffect(() => {
    baselineDpr.current = window.devicePixelRatio;

    const check = () => {
      const ratio = baselineDpr.current / window.devicePixelRatio;
      setCounterZoom(ratio);
    };

    // Poll for changes since there's no reliable cross-browser zoom event
    const interval = setInterval(check, 500);
    return () => clearInterval(interval);
  }, []);

  const rawScrollY = useMotionValue(0);
  const scrollY = useSpring(rawScrollY, ScrollConfig.spring);

  useMotionValueEvent(scrollY, "change", (y) => {
    if (showLoader) return; // don't update layout sections when loading

    const vh = window.innerHeight;
    const { breakpoints, chosenWorksFrames } = ScrollConfig;

    if (y < breakpoints.heroPx) {
      setActiveSection(0); // Hero
    } else if (y < vh * breakpoints.experienceVh) {
      setActiveSection(1); // Experience
    } else if (y < vh * breakpoints.chosenWorksVh) {
      setActiveSection(2); // Chosen Works

      // Map remaining scroll zone to frames based on config
      const frameStart = vh * chosenWorksFrames.startVh;
      const frameEnd = vh * chosenWorksFrames.endVh;
      const progress = Math.max(0, Math.min(0.999, (y - frameStart) / (frameEnd - frameStart)));
      setActiveFrame(Math.floor(progress * chosenWorksFrames.frameCount));
      
    } else if (y < vh * breakpoints.hireMeForVh) {
      setActiveSection(3); // Hire Me For
    } else if (y < vh * breakpoints.aboutMeVh) {
      setActiveSection(4); // About Me
    } else {
      setActiveSection(5); // Footer
    }
  });

  // Lock scrolling while loading
  useEffect(() => {
    // Force initial section calculation after loader goes away
    if (!showLoader) {
      window.dispatchEvent(new Event("scroll"));
    }
  }, [showLoader]);

  // Virtual Custom Scroll Engine
  useEffect(() => {
    let touchStartY = 0;
    let isAutoScrolling = false;

    const snapToNextOrPrev = (direction: 'up' | 'down') => {
      if (isAutoScrolling) return;
      isAutoScrolling = true;
      setTimeout(() => { isAutoScrolling = false; }, ScrollConfig.snapCooldownMs);

      const vh = window.innerHeight;
      const currentY = rawScrollY.get();
      const pts = ScrollConfig.snapPointsVh.map((p) => p * vh);

      let closestIdx = 0;
      let minDiff = Infinity;
      pts.forEach((p, i) => {
        if (Math.abs(p - currentY) < minDiff) {
          minDiff = Math.abs(p - currentY);
          closestIdx = i;
        }
      });

      if (direction === 'down' && closestIdx < pts.length - 1) {
        rawScrollY.set(pts[closestIdx + 1]);
      } else if (direction === 'up' && closestIdx > 0) {
        rawScrollY.set(pts[closestIdx - 1]);
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (showLoader) return;

      const target = e.target as HTMLElement;
      let isScrollable = false;
      let curr: HTMLElement | null = target;

      while (curr && curr !== document.body) {
        const style = window.getComputedStyle(curr);
        if (style.overflowY === 'auto' || style.overflowY === 'scroll') {
          if (curr.scrollHeight > curr.clientHeight) {
            const atTop = curr.scrollTop <= 0;
            const atBottom = curr.scrollTop + curr.clientHeight >= curr.scrollHeight - 1;

            if (e.deltaY < 0 && !atTop) { isScrollable = true; break; }
            if (e.deltaY > 0 && !atBottom) { isScrollable = true; break; }
          }
        }
        curr = curr.parentElement;
      }

      if (!isScrollable) {
        if (Math.abs(e.deltaY) > 5) {
          snapToNextOrPrev(e.deltaY > 0 ? 'down' : 'up');
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (showLoader) return;

      const target = e.target as HTMLElement;
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      let isScrollable = false;
      let curr: HTMLElement | null = target;

      while (curr && curr !== document.body) {
        const style = window.getComputedStyle(curr);
        if (style.overflowY === 'auto' || style.overflowY === 'scroll') {
          if (curr.scrollHeight > curr.clientHeight) {
            const atTop = curr.scrollTop <= 0;
            const atBottom = Math.ceil(curr.scrollTop + curr.clientHeight) >= curr.scrollHeight;

            if (deltaY < 0 && !atTop) { isScrollable = true; break; }
            if (deltaY > 0 && !atBottom) { isScrollable = true; break; }
          }
        }
        curr = curr.parentElement;
      }

      if (!isScrollable) {
        if (Math.abs(deltaY) > 20) { // Threshold for swipe
          snapToNextOrPrev(deltaY > 0 ? 'down' : 'up');
          touchStartY = touchY;
        }
      } else {
        touchStartY = touchY;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [rawScrollY, showLoader]);

  return (
    <>
      <AnimatePresence>
        {showLoader && (
          <MatrixLoader onComplete={() => setShowLoader(false)} />
        )}
      </AnimatePresence>

      <div style={{ opacity: showLoader ? 0 : 1, transition: "opacity 0.6s ease-in" }}>
        <GlobalNav 
          activeSection={activeSection} 
          isLoaded={!showLoader}
          onNavigate={(idx) => {
             const vh = window.innerHeight;
             const targetVh = ScrollConfig.navTargetsVh[idx];
             const targetY = idx === 5 ? vh * ScrollConfig.maxScrollVh : vh * targetVh;
             rawScrollY.set(targetY);
          }}
        />

        {/* Index Scroll Bar — zoom-independent via counter-scale */}
        <div
          style={{
            position: "fixed",
            right: "12px",
            top: "50%",
            transform: `translateY(-50%) scale(${counterZoom})`,
            transformOrigin: "right center",
            display: "flex",
            flexDirection: "column",
            zIndex: 9000,
          }}
        >
          {[0, 1, 2, 3, 4, 5].map((idx) => (
            <div
              key={idx}
              onClick={() => {
                const vh = window.innerHeight;
                const targetVh = ScrollConfig.navTargetsVh[idx];
                const targetY = idx === 5 ? vh * ScrollConfig.maxScrollVh : vh * targetVh;
                rawScrollY.set(targetY);
              }}
              style={{
                /* Hit area: generous padding around the tiny visual dot */
                padding: "6px 20px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              {/* Visual dot — fixed px sizes */}
              <div
                style={{
                  width: "4px",
                  height: activeSection === idx ? "32px" : "12px",
                  backgroundColor: activeSection === idx ? "var(--matrix-green)" : "rgba(255,255,255,0.2)",
                  borderRadius: "4px",
                  transition: "all 0.3s ease",
                  boxShadow: activeSection === idx ? "0 0 10px rgba(57,255,20,0.4)" : "none",
                }}
              />
            </div>
          ))}
        </div>

        <motion.main
          className="portfolio-main"
          style={{
            position: "relative",
            zIndex: 10,
            backgroundColor: "transparent",
            pointerEvents: "none",
          }}
          initial={false}
          animate={{ y: activeSection >= 5 ? "-100vh" : "0vh" }}
          transition={{ ease: [0.25, 1, 0.5, 1], duration: 1.0 }}
        >

          {/* Mega scroll container for all sections */}
          <div style={{ height: "100vh", position: "relative", width: "100vw", overflow: "hidden" }}>

            {/* Static viewport — always fills the screen minus nav */}
            <div style={{ position: "absolute", top: "var(--nav-height)", left: 0, right: 0, bottom: 0, pointerEvents: "auto" }}>


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
                    filter: activeSection >= 1 ? "blur(30px) brightness(0)" : "none",
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
                                transition: { staggerChildren: 0.03, delayChildren: 0.6 },
                              },
                            }}
                            initial="hidden"
                            animate={showLoader ? "hidden" : "visible"}
                            className="text-screen"
                          >
                            {[
                              { text: "Hi.", className: "matrix-text intro" },
                              { text: "I'm Ayush.", className: "matrix-text intro" },
                              { text: "", className: "" },
                              { text: "a UX Designer who turns data", className: "matrix-text bio" },
                              { text: "into simple, scalable products.", className: "matrix-text bio" },
                              { text: "I've spent close to 2 years at", className: "matrix-text bio" },
                              { text: "Oracle designing ERP systems.", className: "matrix-text bio" }
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
                            <video
                              ref={videoRef}
                              loop
                              muted
                              playsInline
                              preload="auto"
                              className="profile-image"
                              style={{ 
                                objectFit: "cover", 
                                width: "100%", 
                                height: "100%", 
                                borderRadius: "inherit",
                                transform: "translateZ(0)",
                                willChange: "transform"
                              }}
                            >
                              <source src="/Profile.mp4" type="video/mp4" />
                            </video>
                            <div
                              style={{
                                position: "absolute",
                                inset: 0,
                                backgroundColor: "rgba(113, 255, 24, 0.3)",
                                mixBlendMode: "multiply",
                                pointerEvents: "none",
                                borderRadius: "inherit",
                              }}
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
                    filter: activeSection >= 2 ? "blur(30px) brightness(0)" : "none",
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
                    filter: activeSection >= 3 ? "blur(30px) brightness(0)" : "none",
                    opacity: activeSection >= 3 ? 0 : 1
                  }}
                  transition={{ duration: 1.0, ease: [0.32, 0.72, 0, 1] }}
                >
                  <ChosenWorksSection 
                    isActive={activeSection === 2} 
                    activeFrame={activeFrame} 
                    onFrameDotClick={(frameIdx) => {
                      const vh = window.innerHeight;
                      // snapPointsVh: Idx 2 is Frame 0, Idx 3 is Frame 1, etc.
                      const targetSnapIdx = 2 + frameIdx; 
                      const targetVh = ScrollConfig.snapPointsVh[targetSnapIdx];
                      rawScrollY.set(vh * targetVh);
                    }}
                  />
                </motion.div>

              </motion.div>

              {/* =========================================
              SECTION 4: TESTIMONIALS (slides up from below)
              ========================================= */}
              {/* TESTIMONIALS HIDDEN FOR NOW
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
          */}

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
                  y: activeSection >= 3 ? "0vh" : "100vh", // Shifted threshold from 4 to 3
                }}
                transition={{ ease: [0.25, 1, 0.5, 1], duration: 1.0 }}
              >
                <HireMeSection isActive={activeSection === 3} /> {/* Shifted from 4 to 3 */}
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
                  y: activeSection >= 4 ? "0vh" : "100vh", // Shifted threshold from 5 to 4
                }}
                transition={{ ease: [0.25, 1, 0.5, 1], duration: 1.0 }}
              >
                <AboutMeSection isActive={activeSection === 4} /> {/* Shifted from 5 to 4 */}
              </motion.div>

            </div>
          </div>
        </motion.main>
        <motion.div
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 0,
          }}
          initial={false}
          animate={{
            opacity: activeSection >= 5 ? 1 : 0
          }}
        >
          <FooterSection />
        </motion.div>
      </div>
    </>
  );
}
