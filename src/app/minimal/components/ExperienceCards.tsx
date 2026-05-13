"use client";

import { useRef, useState } from "react";
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
  const [openId, setOpenId] = useState<number | null>(null);

  useGSAP(
    () => {
      if (window.innerWidth <= 640) return; // Mobile shows accordion instead

      const cards = gsap.utils.toArray<HTMLElement>(".exp-card");

      gsap.set(cards, { y: 80, autoAlpha: 0 });

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

      const flipTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 35%",
          end: "top 10%",
          toggleActions: "play none none none",
        },
      });

      cards.forEach((card, i) => {
        flipTl.to(
          card,
          { rotationY: 180, duration: 0.7, ease: "power2.inOut" },
          i * 0.18
        );
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
    <>
      {/* ── Desktop: 3D flip cards ── */}
      <div className="exp-cards-container exp-desktop-only" ref={containerRef}>
        {experiences.map((exp) => (
          <div className="exp-card" key={exp.id}>
            <div className="exp-card-face exp-card-front">
              <div className="exp-front-number">
                {String(exp.id).padStart(2, "0")}
              </div>
              <div className="exp-front-company">{exp.company}</div>
              <div className="exp-front-role">{exp.designation}</div>
            </div>
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

      {/* ── Mobile: accordion ── */}
      <div className="exp-mobile-only">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className={`exp-accordion-item${openId === exp.id ? " open" : ""}`}
            onClick={() => setOpenId(openId === exp.id ? null : exp.id)}
          >
            <div className="exp-accordion-header">
              <div className="exp-acc-left">
                <div className="exp-acc-company">{exp.company}</div>
                <div className="exp-acc-role">{exp.designation}</div>
              </div>
              <div className="exp-acc-meta">{exp.subHeader}</div>
              <div className="exp-acc-chevron">▾</div>
            </div>
            <div className="exp-accordion-body">
              <div className="exp-accordion-body-inner">
                <p className="exp-back-body">{exp.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
