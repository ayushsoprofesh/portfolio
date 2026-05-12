"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface Experience {
  id: number;
  company: string;
  designation: string;
  subHeader: React.ReactNode;
  body: React.ReactNode;
}

interface ExperienceCardsProps {
  experiences: Experience[];
}

export default function ExperienceCards({ experiences }: ExperienceCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".exp-card");

      // Initial state: cards below, invisible
      gsap.set(cards, {
        y: 80,
        autoAlpha: 0,
      });

      // Phase 1: Cards scroll up into view (staggered entrance)
      const entranceTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          end: "top 40%",
          toggleActions: "play none none none",
        },
      });

      entranceTl.to(cards, {
        y: 0,
        autoAlpha: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      // Phase 2: Sequential card flip when section reaches center
      const flipTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 35%",
          end: "top 10%",
          toggleActions: "play none none none",
        },
      });

      cards.forEach((card, i) => {
        // Flip the entire card
        flipTl.to(
          card,
          {
            rotationY: 180,
            duration: 0.7,
            ease: "power2.inOut",
          },
          i * 0.18
        );

        // Add shadow after flip completes
        flipTl.to(
          card,
          {
            boxShadow:
              "0 20px 60px -12px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.05)",
            duration: 0.35,
            ease: "power2.out",
          },
          i * 0.18 + 0.5
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <div className="exp-cards-container" ref={containerRef}>
      {experiences.map((exp) => (
        <div className="exp-card" key={exp.id}>
          {/* FRONT FACE */}
          <div className="exp-card-face exp-card-front">
            <div className="exp-front-number">
              {String(exp.id).padStart(2, "0")}
            </div>
            <div className="exp-front-company">{exp.company}</div>
            <div className="exp-front-role">{exp.designation}</div>
          </div>

          {/* BACK FACE */}
          <div className="exp-card-face exp-card-back">
            <div className="exp-back-header">
              <div className="exp-back-company">{exp.company}</div>
              <div className="exp-back-role">{exp.designation}</div>
            </div>
            <div className="exp-back-meta">{exp.subHeader}</div>
            <p className="exp-back-body">{exp.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
