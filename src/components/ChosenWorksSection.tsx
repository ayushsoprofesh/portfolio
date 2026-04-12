"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const FRAMES = [
  {
    id: 0,
    left: { type: "title" as const, text: "CHOSEN" },
    right: { type: "title" as const, text: "WORKS" }
  },
  {
    id: 1,
    left: {
      type: "project" as const,
      title: "Designing for Enterprise Scale",
      product: "Oracle Fusion Pricing | Timeline: 8 Release Cycles",
      tags: "Scalability • Complex Systems",
      body: "Increased system efficiency and significantly reduced cognitive load by designing mass-action workflows for repetitive tasks. Maintained a strict user-centric approach while solving complex edge cases and delivering detailed engineering specifications.",
    },
    right: { type: "image" as const, label: "Oracle Pricing Engine" }
  },
  {
    id: 2,
    left: {
      type: "project" as const,
      title: "Fast Execution and Cross-Team Design",
      product: "Oracle Fusion Pricing | Timeline: 5 Release Cycles",
      tags: "Rapid Execution • Cross-Functional",
      body: "Designed and delivered multiple cross-application features within accelerated timelines. Collaborated effectively across different product teams to ensure seamless integration, while pitching and documenting strategic enhancements for future roadmaps.",
    },
    right: { type: "image" as const, label: "Cross-Team Design" }
  },
  {
    id: 3,
    left: {
      type: "project" as const,
      title: "Visualising Segment Analytics",
      product: "Oracle CX Unity | Timeline: 3 Months",
      tags: "Cornerstone Project • Data Visualisation Dashboard",
      body: "Spearheaded a zero-to-one cornerstone project to design the foundational analytics dashboard for the Unity platform. Engaged in deep research workshops and stakeholder alignment, delivering a high-impact solution that secured a full-time return offer.",
    },
    right: { type: "image" as const, label: "Unity CDP Analytics" }
  },
  {
    id: 4,
    left: {
      type: "project" as const,
      title: "Solving College Event Management",
      product: "IITG SWC Eventdeck | Timeline: 6 Months",
      tags: "Zero-to-One • User Research",
      body: "Led the zero-to-one UX for a comprehensive campus event management portal. Directed the design of the MVP and subsequent feature enhancements by independently managing user research, iterative testing, wireframing, and final high-fidelity delivery.",
    },
    right: { type: "image" as const, label: "Eventdeck Platform" }
  }
];

/**
 * Word-aware typing line.
 * Characters are revealed one at a time, but grouped inside per-word
 * <span style="display:inline-block; white-space:nowrap"> wrappers
 * so the browser never breaks a word across two lines.
 */
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
          transition: { staggerChildren: 0.007 }, // 40% faster than 0.012
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
          {/* Space after each word (except the last) */}
          {wi < words.length - 1 && (
            <motion.span
              key={`space-${wi}`}
              variants={{
                hidden: { opacity: 0, display: "none" },
                visible: { opacity: 1, display: "inline-block" },
              }}
            >
              {"\u00A0"}
            </motion.span>
          )}
        </span>
      ))}
    </motion.p>
  );
}

/* A project frame with staggered typing reveal: title → product → tags → body */
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
          transition: { staggerChildren: 0.009, delayChildren: 0.05 }, // 40% faster
        },
      }}
      initial="hidden"
      animate={isActive ? "visible" : "hidden"}
    >
      <TypingLine text={title} className="chosen-project-title" isActive={isActive} />
      <TypingLine text={product} className="chosen-project-product" isActive={isActive} />
      <TypingLine text={tags} className="chosen-project-tags" isActive={isActive} />
      <TypingLine text={body} className="chosen-project-body" isActive={isActive} />
    </motion.div>
  );
}

export default function ChosenWorksSection({
  isActive,
  activeFrame,
}: {
  isActive: boolean;
  activeFrame: number;
}) {
  return (
    <section className="chosen-section">
      <div className="matrix-container">
        {/* CRT Background — identical to Hero */}
        <div className="background-img-wrapper" style={{ position: "absolute", width: "100%", height: "100%" }}>
          <Image
            src="/background.png"
            alt="Matrix CRT Array"
            fill
            sizes="100vw"
            style={{ objectFit: "fill" }}
          />
        </div>

        {/* 4x3 Grid overlay */}
        <div className="precise-grid">

          {/* LEFT SCREEN (cell-2-2) */}
          <div className="grid-cell cell-2-2">
            <div className="inner-screen chosen-screen">
              {FRAMES.map((frame, i) => {
                const frameIsActive = activeFrame === i && isActive;
                return (
                  <div
                    key={frame.id}
                    className={`chosen-frame ${frameIsActive ? "active" : ""}`}
                  >
                    {frame.left.type === "title" ? (
                      <div className="chosen-giant-wrapper">
                        <h2 className="chosen-giant-text">{frame.left.text}</h2>
                      </div>
                    ) : (
                      <ProjectFrame
                        title={frame.left.title!}
                        product={frame.left.product!}
                        tags={frame.left.tags!}
                        body={frame.left.body!}
                        isActive={frameIsActive}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT SCREEN (cell-2-3) */}
          <div className="grid-cell cell-2-3">
            <div className="inner-screen chosen-screen">
              {FRAMES.map((frame, i) => (
                <div
                  key={frame.id}
                  className={`chosen-frame ${activeFrame === i && isActive ? "active" : ""}`}
                >
                  {frame.right.type === "title" ? (
                    <div className="chosen-giant-wrapper">
                      <h2 className="chosen-giant-text">{frame.right.text}</h2>
                    </div>
                  ) : (
                    <div className="chosen-image-placeholder">
                      <div className="placeholder-scanlines" />
                      <span className="placeholder-label">{frame.right.label}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Scanlines overlay */}
        <div className="scanlines"></div>

        {/* Frame indicator dots */}
        <div className="frame-indicators">
          {FRAMES.map((_, i) => (
            <div
              key={i}
              className={`frame-dot ${activeFrame === i && isActive ? "active" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
