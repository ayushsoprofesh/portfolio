export const CONTACT_LINKS = {
  email: "ayush.singh451@gmail.com",
  linkedin:
    process.env.NEXT_PUBLIC_LINKEDIN_URL ??
    "https://www.linkedin.com/in/ayush-singh/",
} as const;

export const EXTERNAL_CASE_STUDY_LINKS = {
  figma:
    process.env.NEXT_PUBLIC_CASE_STUDY_3_URL ?? "https://www.figma.com/",
  behance:
    process.env.NEXT_PUBLIC_CASE_STUDY_4_URL ?? "https://www.behance.net/",
} as const;

export const PASSWORD_TARGETS = {
  "case-study-1": {
    label: "Project 1",
    success: {
      type: "internal" as const,
      href: "/case-study-1",
    },
  },
  "case-study-2": {
    label: "Project 2",
    success: {
      type: "internal" as const,
      href: "/case-study-2",
    },
  },
  "project-3": {
    label: "Project 3",
    success: {
      type: "external" as const,
      href: EXTERNAL_CASE_STUDY_LINKS.figma,
    },
  },
} as const;

export type PasswordTargetKey = keyof typeof PASSWORD_TARGETS;

export const PASSWORD_HINTS: Record<PasswordTargetKey, string> = {
  "case-study-1": "CASE_STUDY_1_PASSWORD",
  "case-study-2": "CASE_STUDY_2_PASSWORD",
  "project-3": "CASE_STUDY_3_PASSWORD",
};

export type CaseStudySection = {
  id: string;
  label: string;
  eyebrow: string;
  title: string;
  body: string;
  bullets: string[];
  imageLabel: string;
};

export type CaseStudyContent = {
  slug: "case-study-1" | "case-study-2";
  title: string;
  subtitle: string;
  meta: {
    role: string;
    timeline: string;
    focus: string;
  };
  sections: CaseStudySection[];
  nextProject: {
    label: string;
    href: string;
  };
};

export const CASE_STUDIES: Record<
  CaseStudyContent["slug"],
  CaseStudyContent
> = {
  "case-study-1": {
    slug: "case-study-1",
    title: "Oracle Fusion Pricing",
    subtitle:
      "Designing mass-action workflows that reduced friction across dense enterprise pricing operations.",
    meta: {
      role: "Lead UX Designer",
      timeline: "8 release cycles",
      focus: "Scalability, batch actions, engineering-ready specs",
    },
    sections: [
      {
        id: "problem",
        label: "1. The Problem",
        eyebrow: "Context",
        title: "High-volume pricing work collapsed under repetitive manual flows",
        body:
          "Teams managing enterprise pricing data were stuck repeating the same action across large record sets, which amplified cognitive load and made simple operations feel risky. The redesign focused on making high-volume tasks legible, safe, and fast without losing the depth required by enterprise users.",
        bullets: [
          "Mapped where repetitive steps were multiplying across the workflow.",
          "Reframed the experience around confidence, scale, and recoverability.",
          "Identified the minimum system feedback needed for users to trust bulk execution.",
        ],
        imageLabel: "Figma export placeholder: problem framing",
      },
      {
        id: "architecture-battle",
        label: "2. Architecture Battle",
        eyebrow: "Systems Thinking",
        title: "The interaction model had to work with a dense rules engine",
        body:
          "The challenge was not just UI polish. The flow had to respect enterprise data structures, asynchronous processing, and implementation constraints while still feeling simple in the moment. This phase balanced design ambition with architectural reality and kept the solution grounded in how the platform actually behaves.",
        bullets: [
          "Compared multiple interaction models for bulk execution and review.",
          "Pressure-tested states, system messages, and exception paths with engineering.",
          "Documented behavior so implementation details stayed aligned with the intended UX.",
        ],
        imageLabel: "Figma export placeholder: architecture states",
      },
      {
        id: "mass-actions",
        label: "3. Mass Actions",
        eyebrow: "Solution",
        title: "Mass actions became the anchor for efficiency at enterprise scale",
        body:
          "The final direction focused on a clear selection model, explicit review moments, and strong system feedback before and after execution. The result created a workflow that felt lighter for expert users while remaining dependable under complex edge cases and large data sets.",
        bullets: [
          "Introduced a clear bulk-action sequence with review checkpoints.",
          "Used system messaging to make progress, errors, and success states unmistakable.",
          "Reduced friction without sacrificing the safeguards enterprise work demands.",
        ],
        imageLabel: "Figma export placeholder: mass action flow",
      },
      {
        id: "outcome",
        label: "4. Outcome",
        eyebrow: "Impact",
        title: "The work reduced effort and created a stronger implementation handoff",
        body:
          "Beyond the direct workflow improvements, the project produced a clearer pattern language for future pricing experiences. It improved operational efficiency for repetitive tasks and gave engineering teams detailed, implementation-ready documentation they could build from with confidence.",
        bullets: [
          "Improved efficiency for repetitive enterprise actions.",
          "Created clearer behavioral guidance for future pricing features.",
          "Strengthened alignment between UX intent and engineering execution.",
        ],
        imageLabel: "Figma export placeholder: impact snapshot",
      },
    ],
    nextProject: {
      label: "Next Project",
      href: "/case-study-2",
    },
  },
  "case-study-2": {
    slug: "case-study-2",
    title: "Oracle Cross-Team Execution",
    subtitle:
      "Shipping accelerated design work across interconnected products without losing coherence.",
    meta: {
      role: "UX Designer",
      timeline: "5 release cycles",
      focus: "Cross-functional delivery, rapid iteration, multi-product alignment",
    },
    sections: [
      {
        id: "problem",
        label: "1. The Problem",
        eyebrow: "Context",
        title: "Multiple product teams were moving fast, but the experience risked fragmentation",
        body:
          "The project demanded quick decisions across overlapping product surfaces, each with its own constraints and stakeholders. The challenge was to maintain speed without producing a stitched-together experience that felt inconsistent from one application to the next.",
        bullets: [
          "Audited where users would experience cross-application handoffs.",
          "Prioritized consistency in the moments that mattered most.",
          "Created a delivery rhythm that could keep up with fast-moving stakeholders.",
        ],
        imageLabel: "Figma export placeholder: cross-team landscape",
      },
      {
        id: "architecture-battle",
        label: "2. Architecture Battle",
        eyebrow: "Coordination",
        title: "Delivery depended on negotiating across systems, constraints, and teams",
        body:
          "Design decisions had to scale across multiple teams and timelines, which meant the architecture challenge was also an organizational one. The work centered on simplifying decisions, exposing dependencies early, and building alignment before implementation locked the experience in place.",
        bullets: [
          "Translated shared goals into patterns multiple teams could adopt.",
          "Worked through technical and product dependencies before they became blockers.",
          "Kept documentation lean enough for speed but specific enough for implementation.",
        ],
        imageLabel: "Figma export placeholder: coordination artifacts",
      },
      {
        id: "mass-actions",
        label: "3. Fast Execution",
        eyebrow: "Solution",
        title: "A reusable interaction language helped the team move faster with less rework",
        body:
          "The solution emphasized reusable structures, fast iteration loops, and strong communication between product, engineering, and design. That approach enabled multiple features to move forward in parallel while preserving a cohesive user experience across the suite.",
        bullets: [
          "Built reusable patterns instead of solving each feature in isolation.",
          "Shortened feedback loops with clearer review artifacts.",
          "Protected user clarity while the product surface expanded quickly.",
        ],
        imageLabel: "Figma export placeholder: execution system",
      },
      {
        id: "outcome",
        label: "4. Outcome",
        eyebrow: "Impact",
        title: "The work improved delivery speed and set up a stronger future roadmap",
        body:
          "The project delivered near-term features on compressed timelines while also surfacing strategic opportunities for future enhancements. It demonstrated that rapid enterprise delivery can still feel intentional when the system, collaboration model, and documentation all pull in the same direction.",
        bullets: [
          "Delivered multiple features under accelerated timelines.",
          "Improved cross-team alignment during implementation.",
          "Created a clearer runway for future roadmap proposals.",
        ],
        imageLabel: "Figma export placeholder: roadmap handoff",
      },
    ],
    nextProject: {
      label: "Next Project",
      href: "/password-gate?project=project-3",
    },
  },
};
