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
    name: "PRAVIN ROBERTS",
    designation: "SENIOR PRINCIPLE UX, ORACLE",
    body: "...Ayush is dedicated, dependable, and proactive. He consistently meets tight deadlines, seeks clarification when needed, and ensures his work aligns with user needs and past design decisions...",
  },
  {
    id: 2,
    name: "PRADIPTA DATTA MAJUMDAR",
    designation: "SENIOR PRINCIPLE PM, ORACLE",
    body: "...Their ability to translate complex ideas into simple, user-friendly experiences has been particularly impressive. In one of our key projects, Ayush designed the pricing user interfaces, resulting in improved usability and a noticeable increase in user engagement...",
  },
  {
    id: 3,
    name: "DAIPAYAN BHATTACHARJEE",
    designation: "SENIOR PRINCIPLE UX, ORACLE",
    body: "...The biggest strength he showed consistently, right from the first interview to the point he was offered a full time role at Oracle was the ability to 'jump in and figure out' with minimal handholding...",
  },
];

function SubtractCard({ content, className }: { content: typeof TESTIMONIALS[0], className?: string }) {
  return (
    <div 
      className={`subtract-layer ${className || ''}`}
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "470 / 641",
        zIndex: 1,
      }}
    >
      {/* Black Wire Segment (Stays static while the card swings) */}
      <div 
        style={{
          position: 'absolute',
          top: '7.8%',
          transform: 'translateY(-50%)',
          left: 'calc(50% - 10px)',
          right: '-10px',
          height: '4.68%',
          background: 'linear-gradient(to bottom, #e2e8f0 0%, #ffffff 20%, #ffffff 80%, #cbd5e1 100%)',
          borderTopLeftRadius: '999px',
          borderBottomLeftRadius: '999px',
          WebkitMaskImage: 'linear-gradient(to right, black 0%, black calc(100% - 5px), transparent 100%)',
          maskImage: 'linear-gradient(to right, black 0%, black calc(100% - 5px), transparent 100%)',
          zIndex: 10 /* Over the body */
        }}
      />

      {/* Swinging Card Body */}
      <div 
        className="testim-card-body"
        onClick={() => window.open("https://www.linkedin.com/in/ayush-singh-5065881a1/details/recommendations/?detailScreenTabIndex=0", "_blank")}
        onMouseEnter={(e) => {
          gsap.to(e.currentTarget, { rotation: -3, duration: 0.5, ease: "power2.out", overwrite: "auto" });
        }}
        onMouseLeave={(e) => {
          gsap.to(e.currentTarget, { rotation: 0, duration: 1.5, ease: "elastic.out(1, 0.3)", overwrite: "auto" });
        }}
        style={{
          position: 'absolute',
          inset: 0,
          transformOrigin: '50% 7.8%', // Hinge precisely on the wire axis!
          zIndex: 1,
          cursor: 'pointer'
        }}
      >
        <div style={{ position: "absolute", inset: 0, zIndex: -1, filter: "drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.06)) drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.04))" }}>
          <Image 
            src="/testimonial-card-bg.svg" 
            alt="Card Background" 
            fill 
            style={{ objectFit: 'contain' }} 
            priority
          />
        </div>
        <div style={{ padding: "25% 10% 7.5%", height: "100%", display: "flex", flexDirection: "column", position: "relative", zIndex: 1 }}>
          
          <p className="exp-back-body">
            "{content.body}"
          </p>

          <div className="exp-back-header" style={{ marginTop: "auto", marginBottom: 0 }}>
            <div className="exp-back-company">
              {content.name}
            </div>
            <div className="exp-back-role">
              {content.designation}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>('.testim-card');
    const bodies = gsap.utils.toArray<HTMLElement>('.testim-card-body');
    
    // Push the entire assemblies off-screen
    gsap.set(cards, { x: window.innerWidth });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 40%", 
        toggleActions: "play none none none"
      }
    });

    // Translate the outer containers (which carry the static wires)
    tl.to(cards, {
      x: 0,
      duration: 1.4,
      stagger: 0.18,
      ease: "power3.out"
    }, 0);

    // Swing the card bodies! 
    // They start tilted backward (-12deg) as if dragging due to friction,
    // then overshoot forward past 0 and wobble into place elastically.
    tl.fromTo(bodies, 
      { rotation: -12 },
      {
        rotation: 0,
        duration: 2.5,
        stagger: 0.18,
        ease: "elastic.out(1, 0.3)" // 1 amplitude, 0.3 period (springy)
      },
      0
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="min-experience-section" style={{ position: 'relative', zIndex: 1 }}>
      
      <h2 className="sec-h">People who vouch for my work.</h2>
      
      <div style={{ position: 'relative', width: '100%', marginTop: '36px' }}>
        
        {/* Left Edge Opacity Gradient Overlay */}
        {/* Fades from solid background at the screen edge/midpoint to transparent at the grid edge */}
        <div style={{
          position: 'absolute',
          right: '100%',
          width: 'calc(50vw - 50%)', 
          top: -100, bottom: -100, // Covers shadows
          background: 'linear-gradient(to right, var(--paper) 0%, var(--paper) 50%, transparent 100%)',
          zIndex: 10,
          pointerEvents: 'none'
        }} />

        {/* Right Edge Opacity Gradient Overlay */}
        <div style={{
          position: 'absolute',
          left: '100%',
          width: 'calc(50vw - 50%)',
          top: -100, bottom: -100,
          background: 'linear-gradient(to left, var(--paper) 0%, var(--paper) 50%, transparent 100%)',
          zIndex: 10,
          pointerEvents: 'none'
        }} />

        {/* Wire System: Stretches exactly from the left midpoint to the right midpoint */}
        <div 
          style={{
            position: 'absolute',
            top: '7.8%',
            transform: 'translateY(-50%)',
            left: 'calc(-25vw + 25%)',
            right: 'calc(-25vw + 25%)',
            height: '4.68%',
            background: 'linear-gradient(to bottom, #e2e8f0 0%, #ffffff 20%, #ffffff 80%, #cbd5e1 100%)',
            filter: 'drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.08))',
            zIndex: 0
          }}
        />
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          position: 'relative',
          zIndex: 1
        }}>
          {TESTIMONIALS.map(t => <SubtractCard key={t.id} content={t} className="testim-card" />)}
        </div>
      </div>
    </section>
  );
}
