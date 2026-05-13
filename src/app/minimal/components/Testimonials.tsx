"use client";

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
    body: "Ayush is dedicated, dependable, and proactive. He consistently meets tight deadlines, seeks clarification when needed, and ensures his work aligns with user needs and past design decisions.",
  },
  {
    id: 2,
    company: "ORACLE",
    name: "PRADIPTA DATTA MAJUMDAR",
    designation: "Senior Principal PM, Oracle",
    body: "Their ability to translate complex ideas into simple, user-friendly experiences has been particularly impressive. In one of our key projects, Ayush designed the pricing user interfaces, resulting in improved usability and a noticeable increase in user engagement.",
  },
  {
    id: 3,
    company: "ORACLE",
    name: "DAIPAYAN BHATTACHARJEE",
    designation: "Senior Principal UX, Oracle",
    body: "The biggest strength he showed consistently, right from the first interview to the point he was offered a full time role at Oracle was the ability to 'jump in and figure out' with minimal handholding.",
  },
];

const LINKEDIN_RECO_URL =
  "https://www.linkedin.com/in/ayush-singh-5065881a1/details/recommendations/?detailScreenTabIndex=0";

function TestimonialCard({ t }: { t: (typeof TESTIMONIALS)[0] }) {
  return (
    <div
      className="panel testim-card"
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

      <div
        style={{
          paddingTop: "16px",
          borderTop: "1px solid var(--rule)",
          marginTop: "auto",
        }}
      >
        <div className="exp-back-company">{t.name}</div>
        <div className="exp-back-role">{t.designation}</div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".testim-card");

      gsap.from(cards, {
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
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="min-experience-section">
      <h2 className="sec-h">People who vouch for my work.</h2>

      <div
        className="testim-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
          marginTop: "36px",
        }}
      >
        {TESTIMONIALS.map((t) => (
          <TestimonialCard key={t.id} t={t} />
        ))}
      </div>
    </section>
  );
}
