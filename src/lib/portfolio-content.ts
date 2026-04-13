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
      role: "UX Designer",
      timeline: "6 Release Cycles (25B to 26C)",
      focus: "Scalability, batch actions, engineering-ready specs",
    },
    sections: [
      {
        id: "problem",
        label: "The Problem",
        eyebrow: "Context",
        title: "Modernizing a Legacy ERP",
        body: "",
        bullets: [],
        imageLabel: "",
      },
      {
        id: "architecture",
        label: "The Architecture Battle",
        eyebrow: "Systems Thinking",
        title: "Single vs Multi Charge",
        body: "",
        bullets: [],
        imageLabel: "",
      },
      {
        id: "mass-actions",
        label: "Taming the Data Weight",
        eyebrow: "Solution",
        title: "Mass Actions",
        body: "",
        bullets: [],
        imageLabel: "",
      },
      {
        id: "escape-hatch",
        label: "The Escape Hatch",
        eyebrow: "UX Solution",
        title: "Data Grid",
        body: "",
        bullets: [],
        imageLabel: "",
      },
      {
        id: "constraints",
        label: "Constraints & Tech Debt",
        eyebrow: "Process",
        title: "Killing Technical Debt",
        body: "",
        bullets: [],
        imageLabel: "",
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
