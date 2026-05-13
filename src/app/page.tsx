"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import InteractiveHalftone from "./minimal/components/InteractiveHalftone";
import ExperienceCards from "./minimal/components/ExperienceCards";
import MinimalFooter from "./minimal/components/MinimalFooter";
import Testimonials from "./minimal/components/Testimonials";
import WhatElse from "./minimal/components/WhatElse";

import { EXTERNAL_CASE_STUDY_LINKS } from "@/lib/portfolio-content";

const EXPERIENCES = [
  {
    id: 1,
    company: "Oracle",
    designation: "UX Designer - SCM",
    subHeader: <>Jul 2024 - April 2026<br />Bangalore, India</>,
    body: <><b>Drove design for Oracle Fusion Pricing across 9 products</b>, from foundational entities to cross-ecosystem work. Designed for <b>scale</b>, with lists holding up to a million priced atoms, for <b>reuse</b>, with patterns compounding across the suite, and for <b>collaboration</b>, across four product teams in three ecosystems. Shipped within Oracle's Redwood design system, <b>extending it where pricing needed its own conventions</b>.</>
  },
  {
    id: 2,
    company: "Oracle",
    designation: "UX Intern - CX Marketing",
    subHeader: <>May 2023 - Jul 2023<br />Bangalore, India</>,
    body: <><b>Built a zero-to-one</b> customer segment analytics dashboard for Oracle Unity (CDP). While the initial brief focused solely on visualizing segments, I transformed these static visualizations into <b>actionable workflows</b>. This defined the <b>foundational product direction</b> for the analytics vertical, earning an <b>exclusive full-time return offer</b>.</>
  },
  {
    id: 3,
    company: "Alcheringa IIT Guwahati",
    designation: "Web Design Head",
    subHeader: <>May 2022 - May 2023<br />Guwahati, India</>,
    body: <><b>Co-led a 600 person organization</b> for North East India's largest cultural festival. <b>Spearheaded the design and delivery</b> of 13 web portals and a mobile app alongside the engineering team. Demonstrated <b>extreme operational leadership</b> by designing and delegating the construction of <b>life sized physical props</b> on an impossible timeline.</>
  }
];

export default function Home() {
  const [heroPoppedOut, setHeroPoppedOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroPoppedOut(true);
    }, 1000);

    // Set default CSS variables for Tweaks
    const root = document.documentElement;
    root.setAttribute('data-mood', 'editorial');
    root.setAttribute('data-voice', 'serif');
    root.setAttribute('data-panel-feel', 'flush');

    const updateOnScroll = () => {
      const panels = document.querySelectorAll('[data-panel]');
      const vh = window.innerHeight;
      panels.forEach((p) => {
        const r = p.getBoundingClientRect();
        // Trigger band: top < vh * 0.45, bottom > vh * 0.05
        if (r.top < vh * 0.45 && r.bottom > vh * 0.05) {
          p.classList.add('lifted');
        } else {
          p.classList.remove('lifted');
        }
      });

      const nav = document.getElementById('topnav');
      if (nav) {
        if (window.scrollY > 8) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', updateOnScroll, { passive: true });
    window.addEventListener('resize', updateOnScroll);
    updateOnScroll();

    return () => {
      window.removeEventListener('scroll', updateOnScroll);
      window.removeEventListener('resize', updateOnScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <nav className="topnav" id="topnav">
        <div className="topnav-inner">
          <a className="home" href="/">Ayush's Portfolio</a>
          <div className="crumb">
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'inherit', textDecoration: 'none' }}>
              <b>Resume</b>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* HERO SECTION */}
        <div className="row-flow hero-row" style={{ position: 'relative', minHeight: '80vh', marginBottom: '80px', marginTop: '20px', alignItems: 'center' }}>
          <InteractiveHalftone imageSrc="/Profile.png" triggerRipple={heroPoppedOut} />

          <div className="hero-card-wrapper" style={{ position: 'relative', zIndex: 10 }}>
            <section
              id="hero-left-panel"
              className={`panel hero ${heroPoppedOut ? 'lifted' : ''}`}
              style={{ margin: 0, transition: 'all 1s cubic-bezier(0.2, 0.6, 0.2, 1)' }}
            >
              <h1>Hi.<br/>I'm <em>Ayush.</em></h1>
              <p className="lede">A UX Designer who turns data into simple, scalable products. I've spent close to 2 years at Oracle designing ERP systems.</p>
              <dl className="meta">
                <div><dt>Role</dt><dd>UX Designer</dd></div>
                <div><dt>Location</dt><dd>Bangalore, India</dd></div>
                <div><dt>Experience</dt><dd>2+ Years</dd></div>
                <div><dt>Focus</dt><dd>Enterprise B2B</dd></div>
              </dl>
            </section>
          </div>

          <div id="hero-image-target" className="hero-image-target" style={{ pointerEvents: 'none', width: '100%', height: '100%', minHeight: '500px' }}>
          </div>
        </div>

        {/* EXPERIENCE SECTION */}
        <section className="min-experience-section">
          <h2 className="sec-h">Where I've worked.</h2>
          <ExperienceCards experiences={EXPERIENCES} />
        </section>

        {/* CHOSEN WORKS SECTION */}
        <section className="min-experience-section">
          <h2 className="sec-h">What I've worked on.</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>

            <Link href="/case-study-1" className="panel row-flow work-card-link" data-panel style={{ display: 'grid', textDecoration: 'none', color: 'inherit', margin: 0, padding: '40px', alignItems: 'stretch', height: '460px' }}>
              <div className="card-info" style={{ display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'center' }}>
                <div className="sec-label" style={{ marginBottom: 0 }}>
                  <span className="num">01</span><span className="bar"></span> ORACLE FUSION PRICING
                </div>
                <h4 className="sec-h" style={{ marginTop: 0, marginBottom: '8px', fontSize: '32px' }}>Redesigning the Price List</h4>
                <p style={{ color: 'var(--ink-soft)' }}>Rebuilding a foundational entity in Oracle's pricing suite for the scale, logic, and recurrence of how pricing teams actually work.</p>
                <dl className="meta" style={{ paddingTop: '16px', marginTop: 'auto', gap: '16px', gridTemplateColumns: '1fr 1fr' }}>
                  <div><dt>SCOPE</dt><dd>Core entity redesign across 6 release quarters</dd></div>
                  <div><dt>OUTCOME</dt><dd>From database to working surface</dd></div>
                </dl>
              </div>
              <div className="card-image" style={{ padding: 0, overflow: 'hidden', border: '1px solid var(--rule)', background: 'var(--paper)', borderRadius: '18px' }}>
                <img src="/Chosen works/Case Study 2.png" alt="Redesigning the Price List" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </Link>

            <Link href="/case-study-2" className="panel row-flow work-card-link" data-panel style={{ display: 'grid', textDecoration: 'none', color: 'inherit', margin: 0, padding: '40px', alignItems: 'stretch', height: '460px' }}>
              <div className="card-info" style={{ display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'center' }}>
                <div className="sec-label" style={{ marginBottom: 0 }}>
                  <span className="num">02</span><span className="bar"></span> ORACLE FUSION PRICING
                </div>
                <h4 className="sec-h" style={{ marginTop: 0, marginBottom: '8px', fontSize: '32px' }}>Designing Across a Product Suite</h4>
                <p style={{ color: 'var(--ink-soft)' }}>How patterns, persuasion, and patience compound when you design across a product suite.</p>
                <dl className="meta" style={{ paddingTop: '16px', marginTop: 'auto', gap: '16px', gridTemplateColumns: '1fr 1fr' }}>
                  <div><dt>SCOPE</dt><dd>3 products across the pricing suite</dd></div>
                  <div><dt>COLLABORATION</dt><dd>4 product teams across 3 ecosystems</dd></div>
                </dl>
              </div>
              <div className="card-image" style={{ padding: 0, overflow: 'hidden', border: '1px solid var(--rule)', background: 'var(--paper)', borderRadius: '18px' }}>
                <img src="/Chosen works/Case Study 1.jpg" alt="Designing Across a Product Suite" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </Link>

            <Link href={EXTERNAL_CASE_STUDY_LINKS.figma} target="_blank" rel="noopener noreferrer" className="panel row-flow work-card-link" data-panel style={{ display: 'grid', textDecoration: 'none', color: 'inherit', margin: 0, padding: '40px', alignItems: 'stretch', height: '460px' }}>
              <div className="card-info" style={{ display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'center' }}>
                <div className="sec-label" style={{ marginBottom: 0 }}>
                  <span className="num">03</span><span className="bar"></span> Oracle CX Unity
                </div>
                <h4 className="sec-h" style={{ marginTop: 0, marginBottom: '8px', fontSize: '32px' }}>Customer Segment Dashboard</h4>
                <p style={{ color: 'var(--ink-soft)' }}>Zero-to-one customer segment analytics dashboard for Oracle Unity CDP, translating ambiguous requirements into intuitive data visualizations.</p>
                <dl className="meta" style={{ paddingTop: '16px', marginTop: 'auto', gap: '16px', gridTemplateColumns: '1fr 1fr' }}>
                  <div><dt>Timeline</dt><dd>12 Weeks</dd></div>
                  <div><dt>Role</dt><dd>UX Intern</dd></div>
                </dl>
              </div>
              <div className="card-image" style={{ padding: 0, overflow: 'hidden', border: '1px solid var(--rule)', background: 'var(--paper)', borderRadius: '18px' }}>
                <img src="/Chosen works/Case study 3.jpg" alt="Customer Segment Dashboard" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </Link>

          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <Testimonials />

        {/* WHAT ELSE SECTION */}
        <WhatElse />

        <MinimalFooter />
      </main>
    </>
  );
}
