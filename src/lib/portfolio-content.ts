export const CONTACT_LINKS = {
  email: "ayush.singh451@gmail.com",
  linkedin:
    process.env.NEXT_PUBLIC_LINKEDIN_URL ??
    "https://www.linkedin.com/in/ayush-singh-5065881a1/",
} as const;

export const EXTERNAL_CASE_STUDY_LINKS = {
  figma:
    process.env.NEXT_PUBLIC_CASE_STUDY_3_URL ?? "https://www.figma.com/",
  behance:
    process.env.NEXT_PUBLIC_CASE_STUDY_4_URL ?? "https://www.behance.net/gallery/145955879/Eventdeck-Event-management-platform",
} as const;

export const PASSWORD_TARGETS = {
  "case-study-1": {
    label: "Designing for Enterprise Scale",
    success: {
      type: "internal" as const,
      href: "/case-study-1",
    },
  },
  "case-study-2": {
    label: "Fast Execution and Cross_Team Design",
    success: {
      type: "internal" as const,
      href: "/case-study-2",
    },
  },
  "project-3": {
    label: "Visualising Segment Analytics",
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
  isSubSection?: boolean;
};

export type CaseStudyContent = {
  slug: "case-study-1" | "case-study-2";
  title: string;
  subtitle: string;
  meta: {
    role: string;
    timeline: string;
    focus?: string;
    constraint?: string;
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
    title: "Designing Oracle Fusion Pricing Products for Scale",
    subtitle:
      "Oracle Fusion Pricing Ecosystem (Price Lists, Discount Lists, Currency Conversion List, Shipping Charge List, Currency Conversion List, Rate Plans and more)",
    meta: {
      role: "UX Designer",
      timeline: "20 months",
      constraint: "Zero direct user contact (legal restrictions); reliant on PM data, analytics and assumption-mapping.",
    },
    sections: [
      {
        id: "phase-1",
        label: "Phase 1: Auditing",
        eyebrow: "Phase 1",
        title: "Auditing the Challenge",
        body: "",
        bullets: [],
        imageLabel: "",
      },
      {
        id: "phase-2",
        label: "Phase 2: Framework",
        eyebrow: "Phase 2",
        title: "The Data-to-Design Framework",
        body: "",
        bullets: [],
        imageLabel: "",
      },
      {
        id: "phase-3",
        label: "Phase 3: Execution",
        eyebrow: "Phase 3",
        title: "Execution",
        body: "",
        bullets: [],
        imageLabel: "",
      },
      {
        id: "story-1",
        label: "Flattening the IA",
        eyebrow: "Case 1",
        title: "Flattening the Information Architecture",
        body: "",
        bullets: [],
        imageLabel: "",
        isSubSection: true,
      },
      {
        id: "story-2",
        label: "Designing for 1 million rows",
        eyebrow: "Case 2",
        title: "Designing for 1 Million Rows",
        body: "",
        bullets: [],
        imageLabel: "",
        isSubSection: true,
      },
      {
        id: "story-3",
        label: "Anticipating Scale",
        eyebrow: "Case 3",
        title: "Anticipating Scale Against PM Pushback",
        body: "",
        bullets: [],
        imageLabel: "",
        isSubSection: true,
      },
      {
        id: "story-4",
        label: "Centralising Assets",
        eyebrow: "Case 4",
        title: "Centralizing Assets for Global Scale",
        body: "",
        bullets: [],
        imageLabel: "",
        isSubSection: true,
      },
      {
        id: "story-5",
        label: "Establishing Component Library",
        eyebrow: "Case 5",
        title: "Establishing the Pricing Component Library",
        body: "",
        bullets: [],
        imageLabel: "",
        isSubSection: true,
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
      timeline: "4 Release Cycles (26A to 26D)",
      focus: "Cross-functional delivery, rapid iteration, multi-product alignment",
    },
    sections: [
      {
        id: "problem",
        label: "The Problem",
        eyebrow: "Context",
        title: "Moving Fast in a Giant Corporation",
        body: "",
        bullets: [],
        imageLabel: "",
      },
      {
        id: "rapid-execution",
        label: "Rapid Execution",
        eyebrow: "Execution",
        title: "Reusing Patterns",
        body: "",
        bullets: [],
        imageLabel: "",
      },
      {
        id: "scrappy-design",
        label: "Scrappy Design",
        eyebrow: "Future Proofing",
        title: "Saving Rejected Work & Pitching",
        body: "",
        bullets: [],
        imageLabel: "",
      },
      {
        id: "cross-team",
        label: "The Cross Team Battle",
        eyebrow: "Coordination",
        title: "Rate Plans",
        body: "",
        bullets: [],
        imageLabel: "",
      },
    ],
    nextProject: {
      label: "Next Project",
      href: "/password-gate?project=project-3",
    },
  },
};
