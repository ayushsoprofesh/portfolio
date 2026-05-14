"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const TESTIMONIALS = [
  {
    id: 1,
    company: "ORACLE",
    name: "PRAVIN ROBERTS",
    designation: "Senior Principal UX, Oracle",
    body: "...Ayush is dedicated, dependable, and proactive. He consistently meets tight deadlines, seeks clarification when needed, and ensures his work aligns with user needs and past design decisions...",
  },
  {
    id: 2,
    company: "ORACLE",
    name: "PRADIPTA DATTA MAJUMDAR",
    designation: "Senior Principal PM, Oracle",
    body: "...His ability to translate complex ideas into simple, user-friendly experiences has been particularly impressive. In one of our key projects, Ayush designed the pricing user interfaces, resulting in improved usability and a noticeable increase in user engagement...",
  },
  {
    id: 3,
    company: "ORACLE",
    name: "DAIPAYAN BHATTACHARJEE",
    designation: "Senior Principal UX, Oracle",
    body: "...The biggest strength he showed consistently, right from the first interview to the point he was offered a full time role at Oracle was the ability to 'jump in and figure out' with minimal handholding...",
  },
];

const LINKEDIN_RECO_URL =
  "https://www.linkedin.com/in/ayush-singh-5065881a1/details/recommendations/?detailScreenTabIndex=0";

// ── Desktop: hanging card design ──────────────────────────────────────────────

function SubtractCard({ content, className }: { content: (typeof TESTIMONIALS)[0]; className?: string }) {
  return (
    <div
      className={`subtract-layer ${className || ""}`}
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "470 / 641",
        zIndex: 1,
      }}
    >
      {/* Wire segment (stays static while card swings) */}
      <div
        style={{
          position: "absolute",
          top: "7.8%",
          transform: "translateY(-50%)",
          left: "calc(50% - 10px)",
          right: "-10px",
          height: "4.68%",
          background: "linear-gradient(to bottom, #e2e8f0 0%, #ffffff 20%, #ffffff 80%, #cbd5e1 100%)",
          borderTopLeftRadius: "999px",
          borderBottomLeftRadius: "999px",
          WebkitMaskImage: "linear-gradient(to right, black 0%, black calc(100% - 5px), transparent 100%)",
          maskImage: "linear-gradient(to right, black 0%, black calc(100% - 5px), transparent 100%)",
          zIndex: 10,
        }}
      />

      {/* Swinging card body */}
      <div
        className="testim-card-body"
        onClick={() => window.open(LINKEDIN_RECO_URL, "_blank")}
        onMouseEnter={(e) => {
          gsap.to(e.currentTarget, { rotation: -3, duration: 0.5, ease: "power2.out", overwrite: "auto" });
        }}
        onMouseLeave={(e) => {
          gsap.to(e.currentTarget, { rotation: 0, duration: 1.5, ease: "elastic.out(1, 0.3)", overwrite: "auto" });
        }}
        style={{
          position: "absolute",
          inset: 0,
          transformOrigin: "50% 7.8%",
          zIndex: 1,
          cursor: "pointer",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: -1,
            filter: "drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.06)) drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.04))",
          }}
        >
          <Image
            src="/testimonial-card-bg.svg"
            alt="Card Background"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
        <div
          style={{
            padding: "25% 10% 7.5%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            zIndex: 1,
          }}
        >
          <p className="exp-back-body">&ldquo;{content.body}&rdquo;</p>
          <div className="exp-back-header" style={{ marginTop: "auto", marginBottom: 0 }}>
            <div className="exp-back-company">{content.name}</div>
            <div className="exp-back-role">{content.designation}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Mobile: simple panel cards ────────────────────────────────────────────────

function TestimonialCard({ t }: { t: (typeof TESTIMONIALS)[0] }) {
  return (
    <div
      className="panel testim-card-mobile"
      data-panel
      onClick={() => window.open(LINKEDIN_RECO_URL, "_blank")}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        padding: "32px 28px",
        cursor: "pointer",
        margin: 0,
      }}
    >
      <div className="sec-label" style={{ marginBottom: 0 }}>
        <span className="num">{String(t.id).padStart(2, "0")}</span>
        <span className="bar"></span>
        {t.company}
      </div>
      <p
        style={{
          color: "var(--ink-soft)",
          fontSize: "15.5px",
          lineHeight: 1.65,
          flex: 1,
          margin: 0,
          fontStyle: "italic",
        }}
      >
        &ldquo;{t.body}&rdquo;
      </p>
      <div style={{ paddingTop: "16px", borderTop: "1px solid var(--rule)", marginTop: "auto" }}>
        <div className="exp-back-company">{t.name}</div>
        <div className="exp-back-role">{t.designation}</div>
      </div>
    </div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".testim-card");
      const bodies = gsap.utils.toArray<HTMLElement>(".testim-card-body");

      gsap.set(cards, { x: window.innerWidth });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          toggleActions: "play none none none",
        },
      });

      tl.to(
        cards,
        { x: 0, duration: 1.4, stagger: 0.18, ease: "power3.out" },
        0
      );

      tl.fromTo(
        bodies,
        { rotation: -12 },
        { rotation: 0, duration: 2.5, stagger: 0.18, ease: "elastic.out(1, 0.3)" },
        0
      );

      // Mobile fade-in
      const mobileCards = gsap.utils.toArray<HTMLElement>(".testim-card-mobile");
      if (mobileCards.length) {
        gsap.from(mobileCards, {
          autoAlpha: 0,
          y: 40,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="min-experience-section" style={{ position: "relative", zIndex: 1 }}>
      <h2 className="sec-h">People who vouch for my work.</h2>

      {/* Desktop / tablet — hanging wire cards */}
      <div className="testim-desktop-only" style={{ position: "relative", width: "100%", marginTop: "36px" }}>
        {/* Left edge fade */}
        <div
          style={{
            position: "absolute",
            right: "100%",
            width: "calc(50vw - 50%)",
            top: -100,
            bottom: -100,
            background: "linear-gradient(to right, var(--paper) 0%, var(--paper) 50%, transparent 100%)",
            zIndex: 10,
            pointerEvents: "none",
          }}
        />
        {/* Right edge fade */}
        <div
          style={{
            position: "absolute",
            left: "100%",
            width: "calc(50vw - 50%)",
            top: -100,
            bottom: -100,
            background: "linear-gradient(to left, var(--paper) 0%, var(--paper) 50%, transparent 100%)",
            zIndex: 10,
            pointerEvents: "none",
          }}
        />
        {/* Wire */}
        <div
          style={{
            position: "absolute",
            top: "7.8%",
            transform: "translateY(-50%)",
            left: "calc(-25vw + 25%)",
            right: "calc(-25vw + 25%)",
            height: "4.68%",
            background: "linear-gradient(to bottom, #e2e8f0 0%, #ffffff 20%, #ffffff 80%, #cbd5e1 100%)",
            filter: "drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.08))",
            zIndex: 0,
          }}
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {TESTIMONIALS.map((t) => (
            <SubtractCard key={t.id} content={t} className="testim-card" />
          ))}
        </div>
      </div>

      {/* Mobile — simple panel cards */}
      <div className="testim-mobile-only testim-grid">
        {TESTIMONIALS.map((t) => (
          <TestimonialCard key={t.id} t={t} />
        ))}
      </div>
    </section>
  );
}
