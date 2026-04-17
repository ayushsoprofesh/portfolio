"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { CaseStudyContent } from "@/lib/portfolio-content";
import GlobalNav from "@/components/GlobalNav";
import MobileGlobalNav from "@/components/mobile/MobileGlobalNav";
import InteractiveBackground from "@/components/InteractiveBackground";
import MobileInteractiveBackground from "@/components/mobile/MobileInteractiveBackground";

type CaseStudyTemplateProps = {
  study: CaseStudyContent;
  children?: React.ReactNode;
};

export default function CaseStudyTemplate({
  study,
  children,
}: CaseStudyTemplateProps) {
  const [activeSection, setActiveSection] = useState(study.sections[0]?.id ?? "");
  const contentPanelRef = useRef<HTMLElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 1024px)").matches);
  }, []);

  useEffect(() => {
    if (!contentPanelRef.current) {
      return;
    }

    const sectionElements = study.sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => element !== null);

    if (!sectionElements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: isMobile ? null : contentPanelRef.current,
        rootMargin: isMobile ? "-10% 0px -60% 0px" : "-25% 0px -70% 0px",
        threshold: 0,
      },
    );

    sectionElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [study.sections, isMobile]);

  return (
    <>
      {isMobile ? <MobileGlobalNav /> : <GlobalNav activeSection={2} />}
      <main className="case-study-page">
        <div className="case-study-background-layer">
          {isMobile ? (
            <div style={{ position: "absolute", inset: 0, background: "#000", pointerEvents: "none" }} />
          ) : (
            <InteractiveBackground showChevron={false} activeSection={2} isNotFuckedUpPage={true} />
          )}
        </div>



        <div className="case-study-grid">
          <aside className="case-study-panel case-study-sidebar">
            <div className="case-study-sidebar-inner">
              <p className="case-study-sidebar-kicker">Mission Control</p>
              <h2 className="case-study-sidebar-title">Contents</h2>
              <nav aria-label="Case study sections">
                <ul className="case-study-toc">
                  {study.sections.map((section) => {
                    const isActive = activeSection === section.id;

                    return (
                      <li key={section.id}>
                        <a
                          className={`case-study-toc-link${isActive ? " is-active" : ""}${section.isSubSection ? " is-subsection" : ""}`}
                          href={`#${section.id}`}
                        >
                          {section.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </aside>

          <section
            ref={contentPanelRef}
            className="case-study-panel case-study-content-panel"
          >
            <div className="case-study-topbar">
              <Link className="case-study-back-link" href="/">
                {"<- Back to Home"}
              </Link>
            </div>

            <header className="case-study-hero">
              <p className="case-study-eyebrow">Case Study</p>
              <h1 className="case-study-title">{study.title}</h1>

              <dl className="case-study-meta-grid">
                <div className="case-study-meta-card">
                  <dt>Product</dt>
                  <dd>{study.subtitle}</dd>
                </div>
                <div className="case-study-meta-card">
                  <dt>Role</dt>
                  <dd>{study.meta.role}</dd>
                </div>
                <div className="case-study-meta-card">
                  <dt>Timeline</dt>
                  <dd>{study.meta.timeline}</dd>
                </div>
                {study.meta.focus && (
                  <div className="case-study-meta-card">
                    <dt>Focus</dt>
                    <dd>{study.meta.focus}</dd>
                  </div>
                )}
                {study.meta.constraint && (
                  <div className="case-study-meta-card">
                    <dt>Constraint</dt>
                    <dd>{study.meta.constraint}</dd>
                  </div>
                )}
              </dl>
            </header>

            <div className="case-study-sections">
              {children || study.sections.map((section) => (
                <article
                  key={section.id}
                  id={section.id}
                  className="case-study-section-block"
                >
                  <p className="case-study-section-eyebrow">{section.eyebrow}</p>
                  <h2 className="case-study-section-title">{section.label}</h2>
                  <h3 className="case-study-section-subtitle">{section.title}</h3>
                  <div className="case-study-prose">
                    <p>{section.body}</p>
                  </div>

                  <ul className="case-study-bullets">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>

                  <div className="case-study-image-placeholder">
                    <span>{section.imageLabel}</span>
                  </div>
                </article>
              ))}
            </div>

            <footer className="case-study-footer-nav">
              <Link className="case-study-next-link" href={study.nextProject.href}>
                {study.nextProject.label} {"->"}
              </Link>
            </footer>
          </section>
        </div>
      </main>
    </>
  );
}
