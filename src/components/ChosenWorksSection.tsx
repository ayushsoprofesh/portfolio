"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { EXTERNAL_CASE_STUDY_LINKS } from "@/lib/portfolio-content";

const FRAMES = [
  {
    id: 0,
    left: { type: "title" as const, text: "CHOSEN" },
    right: { type: "title" as const, text: "WORKS" },
  },
  {
    id: 1,
    left: {
      type: "project" as const,
      title: "Designing for Enterprise Scale",
      product: "Oracle Fusion Pricing | Timeline: 8 Release Cycles",
      tags: "Scalability / Complex Systems",
      body: "Increased system efficiency and significantly reduced cognitive load by designing mass-action workflows for repetitive tasks. Maintained a strict user-centric approach while solving complex edge cases and delivering detailed engineering specifications.",
      cta: {
        type: "internal" as const,
        href: "/password-gate?project=case-study-1",
      },
    },
    right: { type: "image" as const, src: "/Chosen works/Case study 1 and 2.png", alt: "Oracle Pricing Engine" },
  },
  {
    id: 2,
    left: {
      type: "project" as const,
      title: "Fast Execution and Cross-Team Design",
      product: "Oracle Fusion Pricing | Timeline: 5 Release Cycles",
      tags: "Rapid Execution / Cross-Functional",
      body: "Designed and delivered multiple cross-application features within accelerated timelines. Collaborated effectively across different product teams to ensure seamless integration, while pitching and documenting strategic enhancements for future roadmaps.",
      cta: {
        type: "internal" as const,
        href: "/password-gate?project=case-study-2",
      },
    },
    right: { type: "image" as const, src: "/Chosen works/Case study 1 and 2.png", alt: "Cross-Team Design" },
  },
  {
    id: 3,
    left: {
      type: "project" as const,
      title: "Visualising Segment Analytics",
      product: "Oracle CX Unity | Timeline: 3 Months",
      tags: "Cornerstone Project / Data Visualisation Dashboard",
      body: "Spearheaded a zero-to-one cornerstone project to design the foundational analytics dashboard for the Unity platform. Engaged in deep research workshops and stakeholder alignment, delivering a high-impact solution that secured a full-time return offer.",
      cta: {
        type: "internal" as const,
        href: "/password-gate?project=project-3",
      },
    },
    right: { type: "image" as const, src: "/Chosen works/Case study 3.jpg", alt: "Unity CDP Analytics" },
  },
  {
    id: 4,
    left: {
      type: "project" as const,
      title: "Solving College Event Management",
      product: "IITG SWC Eventdeck | Timeline: 6 Months",
      tags: "Zero-to-One / User Research",
      body: "Led the zero-to-one UX for a comprehensive campus event management portal. Directed the design of the MVP and subsequent feature enhancements by independently managing user research, iterative testing, wireframing, and final high-fidelity delivery.",
      cta: {
        type: "external" as const,
        href: EXTERNAL_CASE_STUDY_LINKS.behance,
      },
    },
    right: { type: "image" as const, src: "/Chosen works/Case Study 4.png", alt: "Eventdeck Platform" },
  },
];

function TypingLine({
  text,
  className,
  isActive,
}: {
  text: string;
  className: string;
  isActive: boolean;
}) {
  const words = text.split(" ");

  return (
    <motion.p
      className={className}
      variants={{
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.007 },
        },
      }}
      initial="hidden"
      animate={isActive ? "visible" : "hidden"}
    >
      {words.map((word, wi) => (
        <span
          key={wi}
          style={{ display: "inline-block", whiteSpace: "nowrap" }}
        >
          {word.split("").map((char, ci) => (
            <motion.span
              key={`${wi}-${ci}`}
              variants={{
                hidden: { opacity: 0, display: "none" },
                visible: { opacity: 1, display: "inline-block" },
              }}
            >
              {char}
            </motion.span>
          ))}
          {wi < words.length - 1 ? (
            <motion.span
              key={`space-${wi}`}
              variants={{
                hidden: { opacity: 0, display: "none" },
                visible: { opacity: 1, display: "inline-block" },
              }}
            >
              {"\u00A0"}
            </motion.span>
          ) : null}
        </span>
      ))}
    </motion.p>
  );
}

function ProjectFrame({
  title,
  product,
  tags,
  body,
  isActive,
}: {
  title: string;
  product: string;
  tags: string;
  body: string;
  isActive: boolean;
}) {
  return (
    <motion.div
      className="chosen-project-info"
      variants={{
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.009, delayChildren: 0.05 },
        },
      }}
      initial="hidden"
      animate={isActive ? "visible" : "hidden"}
    >
      <TypingLine
        text={title}
        className="chosen-project-title"
        isActive={isActive}
      />
      <TypingLine
        text={product}
        className="chosen-project-product"
        isActive={isActive}
      />
      <TypingLine
        text={tags}
        className="chosen-project-tags"
        isActive={isActive}
      />
      <TypingLine
        text={body}
        className="chosen-project-body"
        isActive={isActive}
      />
    </motion.div>
  );
}

export default function ChosenWorksSection({
  isActive,
  activeFrame,
  onFrameDotClick,
}: {
  isActive: boolean;
  activeFrame: number;
  onFrameDotClick?: (frameIndex: number) => void;
}) {
  const router = useRouter();
  // Track which frame pair is being hovered (by frame index)
  const [hoveredFrame, setHoveredFrame] = useState<number | null>(null);

  const [isSwitching, setIsSwitching] = useState(false);
  const prevFrameRef = useRef(activeFrame);

  useEffect(() => {
    if (activeFrame !== prevFrameRef.current) {
      setIsSwitching(true);
      prevFrameRef.current = activeFrame;
      const timer = setTimeout(() => {
        setIsSwitching(false);
      }, 350); // duration of the glitch animation
      return () => clearTimeout(timer);
    }
  }, [activeFrame]);

  const handleFrameClick = (frame: (typeof FRAMES)[number]) => {
    if (frame.left.type !== "project") return;
    const { cta } = frame.left;
    if (cta.type === "external") {
      window.open(cta.href, "_blank", "noreferrer noopener");
    } else {
      router.push(cta.href);
    }
  };

  return (
    <section className="chosen-section">
      <div className="matrix-container">
        <div
          className="background-img-wrapper"
          style={{ position: "absolute", width: "100%", height: "100%" }}
        >
          <Image
            src="/background.png"
            alt="Matrix CRT Array"
            fill
            sizes="100vw"
            style={{ objectFit: "fill" }}
          />
        </div>

        <div className="precise-grid" style={{ zIndex: "auto" }}>
          {/* LEFT SCREEN — project info */}
          <div className="grid-cell cell-2-2" style={{ zIndex: 5 }}>
            <div className="inner-screen chosen-screen">
              {FRAMES.map((frame, i) => {
                const frameIsActive = activeFrame === i && isActive;
                const isClickable = frame.left.type === "project";

                return (
                  <div
                    key={frame.id}
                    className={`chosen-frame ${frameIsActive ? "active" : ""} ${isClickable ? "chosen-frame-clickable" : ""}`}
                    onMouseEnter={() => isClickable && setHoveredFrame(i)}
                    onMouseLeave={() => setHoveredFrame(null)}
                    onClick={() => handleFrameClick(frame)}
                    aria-label={
                      isClickable && frame.left.type === "project"
                        ? `View case study: ${frame.left.title}`
                        : undefined
                    }
                    role={isClickable ? "button" : undefined}
                  >
                    {frame.left.type === "title" ? (
                      <div className="chosen-giant-wrapper">
                        <h2 className="chosen-giant-text">{frame.left.text}</h2>
                      </div>
                    ) : (
                      <ProjectFrame
                        title={frame.left.title}
                        product={frame.left.product}
                        tags={frame.left.tags}
                        body={frame.left.body}
                        isActive={frameIsActive}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT SCREEN — image placeholder */}
          <div className="grid-cell cell-2-3" style={{ zIndex: 20 }}>
            <div className="inner-screen chosen-screen">
              {FRAMES.map((frame, i) => {
                const frameIsActive = activeFrame === i && isActive;
                const isHovered = hoveredFrame === i;
                const isClickable = frame.right.type === "image";

                return (
                  <div
                    key={frame.id}
                    className={`chosen-frame ${frameIsActive ? "active" : ""} ${isClickable ? "chosen-frame-clickable" : ""}`}
                    onMouseEnter={() => isClickable && setHoveredFrame(i)}
                    onMouseLeave={() => setHoveredFrame(null)}
                    onClick={() => handleFrameClick(frame)}
                    aria-label={
                      isClickable ? "View case study" : undefined
                    }
                    role={isClickable ? "button" : undefined}
                  >
                    {frame.right.type === "title" ? (
                      <>
                        <div className="chosen-giant-wrapper">
                          <h2 className="chosen-giant-text">{frame.right.text}</h2>
                        </div>
                        <div className="scanlines"></div>
                      </>
                    ) : (
                      <div className="chosen-image-placeholder relative w-full h-full">
                        <div className={`tv-noise-overlay ${isSwitching ? "active" : ""}`} style={{ zIndex: 30 }} />
                        <div className={`tv-scanline-glitch ${isSwitching ? "active" : ""}`} style={{ zIndex: 31 }} />
                        {frame.right.src ? (
                          <Image
                            src={frame.right.src}
                            alt={frame.right.alt || "Project Image"}
                            fill
                            style={{ objectFit: "cover" }}
                          />
                        ) : (
                          <>
                            <div className="placeholder-scanlines" />
                            <span className="placeholder-label">{frame.right.alt}</span>
                          </>
                        )}

                        {/* Hover overlay */}
                        <div
                          className={`chosen-image-overlay ${isHovered && frameIsActive ? "visible" : ""}`}
                          aria-hidden="true"
                        >
                          <span className="chosen-image-overlay-text">View Case Study</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              <div
                className="frame-indicators"
                style={{ bottom: "4.5%", zIndex: 20 }}
              >
                {[1, 2, 3, 4].map((caseIdx, dotIdx) => {
                  const isDotActive = activeFrame === caseIdx && isActive;
                  const isSweeping = activeFrame === 0 && isActive;
                  return (
                    <div
                      key={caseIdx}
                      className={`frame-dot ${isDotActive ? "active" : ""} ${isSweeping ? "sweep" : ""}`}
                      style={isSweeping ? { animationDelay: `calc(var(--dot-stagger, 0.5s) * ${dotIdx})` } : undefined}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onFrameDotClick) onFrameDotClick(caseIdx);
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="scanlines"></div>
      </div>
    </section>
  );
}
