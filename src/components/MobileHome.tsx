"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import MobileGlobalNav from "@/components/mobile/MobileGlobalNav";
import MobileHero from "@/components/mobile/MobileHero";
import MobileExperience from "@/components/mobile/MobileExperience";
import MobileChosenWorks from "@/components/mobile/MobileChosenWorks";
import MobileHireMe from "@/components/mobile/MobileHireMe";
import MobileAboutMe from "@/components/mobile/MobileAboutMe";
import MobileFooter from "@/components/mobile/MobileFooter";
import MobileInteractiveBackground from "@/components/mobile/MobileInteractiveBackground";
import MobileMatrixLoader from "@/components/mobile/MobileMatrixLoader";

// Single source of truth for horizontal page padding — change here to affect entire mobile layout
const PX = "1.25rem";

function MobileHomeContent() {
  const [showLoader, setShowLoader] = useState(true);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!showLoader) {
      const sectionParam = searchParams.get("section");
      if (sectionParam !== null) {
        const sectionMap: Record<string, string> = {
          "0": "hero",
          "1": "experience",
          "2": "chosen-works",
          "3": "hire-me",
          "4": "about-me",
          "5": "footer"
        };
        const id = sectionMap[sectionParam];
        if (id) {
          setTimeout(() => {
            const el = document.getElementById(id);
            if (el) {
              const navHeight = 56;
              const top = el.getBoundingClientRect().top + window.pageYOffset - navHeight;
              window.scrollTo({ top, behavior: "smooth" });
            }
          }, 100);
        }
      }
    }
  }, [showLoader, searchParams]);

  return (
    <div style={{
      maxWidth: "100%",
      overflowX: "hidden",
      position: "relative",
      color: "white",
      minHeight: "100vh",
      fontFamily: "var(--font-inter), system-ui, sans-serif",
    }}>
      {showLoader && (
        <MobileMatrixLoader onComplete={() => setShowLoader(false)} />
      )}

      <MobileInteractiveBackground fixed={true} />

      <div style={{
        opacity: showLoader ? 0 : 1,
        transition: "opacity 0.8s ease-in",
        position: "relative",
        zIndex: 1,
      }}>
        <MobileGlobalNav />

        <main style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          position: "relative",
          zIndex: 10,
          paddingTop: "var(--nav-height, 56px)",
        }}>
          {/* Hero — no horizontal padding here; MobileHero centres its own cards */}
          <section id="hero" style={{
            width: "100%",
            minHeight: "calc(100vh - 56px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}>
            <MobileHero />
          </section>

          {/* Experience */}
          <section id="experience" style={{ width: "100%", padding: `3rem ${PX} 2rem` }}>
            <MobileExperience />
          </section>

          {/* Chosen Works */}
          <section id="chosen-works" style={{ width: "100%", padding: `2rem ${PX}` }}>
            <MobileChosenWorks />
          </section>

          {/* Hire Me For */}
          <section id="hire-me" style={{ width: "100%", padding: `2rem ${PX}` }}>
            <MobileHireMe />
          </section>

          {/* About Me — 0 horizontal padding so marquee touches edges; text inside uses PX */}
          <section id="about-me" style={{ width: "100%", padding: `2rem 0 3rem` }}>
            <MobileAboutMe px={PX} />
          </section>
        </main>

        <MobileFooter px={PX} />
      </div>
    </div>
  );
}

export default function MobileHome() {
  return (
    <Suspense fallback={<div style={{ width: "100%", height: "100vh", backgroundColor: "#050505" }} />}>
      <MobileHomeContent />
    </Suspense>
  );
}
