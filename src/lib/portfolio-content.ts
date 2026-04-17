export const CONTACT_LINKS = {
  email: "ayush.singh451@gmail.com",
  linkedin:
    process.env.NEXT_PUBLIC_LINKEDIN_URL ??
    "https://www.linkedin.com/in/ayush-singh-5065881a1/",
} as const;

export const EXTERNAL_CASE_STUDY_LINKS = {
  figma:
    process.env.NEXT_PUBLIC_CASE_STUDY_3_URL ?? "https://www.figma.com/proto/1NlEmSIcdvEJYf9HIXu8Th/Portfolio?node-id=401-82901&p=f&viewport=505%2C9%2C0.08&t=UkW17W2GLhvz7cjj-1&scaling=contain&content-scaling=fixed&starting-point-node-id=401%3A82901&page-id=401%3A2&show-proto-sidebar=1",
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
    title: "Designing for Speed and Cross-Team Complexity",
    subtitle:
      "Oracle Fusion Pricing (Rate Plans, Currency Conversion, Promotions, Shipping, Mass Actions)",
    meta: {
      role: "UX Designer",
      timeline: "20 Months",
      constraint: "Fast delivery deadlines (1-3 weeks), cross-team dependencies and no direct access to end-users.",
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
        title: "Strategic Execution",
        body: "",
        bullets: [],
        imageLabel: "",
      },
      {
        id: "case-1",
        label: "Defending User Mental Model",
        eyebrow: "Case 1",
        title: "Defending the User Mental Model (Rate Plans)",
        body: "",
        bullets: [],
        imageLabel: "",
        isSubSection: true,
      },
      {
        id: "case-2",
        label: "Breaking UX Rules",
        eyebrow: "Case 2",
        title: "Breaking Internal UX Rules for External Context",
        body: "",
        bullets: [],
        imageLabel: "",
        isSubSection: true,
      },
      {
        id: "case-3",
        label: "High-Velocity App Delivery",
        eyebrow: "Case 3",
        title: "High-Velocity App Delivery (Currency Conversion List)",
        body: "",
        bullets: [],
        imageLabel: "",
        isSubSection: true,
      },
      {
        id: "case-4",
        label: "Modular Redesign",
        eyebrow: "Case 4",
        title: "Rapid Feature Injection & Modular Redesign",
        body: "",
        bullets: [],
        imageLabel: "",
        isSubSection: true,
      },
      {
        id: "case-5",
        label: "Proactive UX Pitching",
        eyebrow: "Case 5",
        title: "Proactive UX Pitching via Proxy Data (Mass Action Templates)",
        body: "",
        bullets: [],
        imageLabel: "",
        isSubSection: true,
      },
    ],
    nextProject: {
      label: "View Next",
      href: "/password-gate?project=project-3",
    },
  },
};
