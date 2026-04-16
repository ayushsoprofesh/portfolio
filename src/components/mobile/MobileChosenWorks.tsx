"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { EXTERNAL_CASE_STUDY_LINKS } from "@/lib/portfolio-content";

const PROJECTS = [
  {
    id: 1,
    title: "Designing for Enterprise Scale",
    tags: ["Oracle Fusion Pricing", "Scalability / Complex Systems"],
    image: "/Chosen works/Case study 1 and 2.png",
    cta: { type: "internal", href: "/password-gate?project=case-study-1" },
  },
  {
    id: 2,
    title: "Fast Execution and Cross-Team Design",
    tags: ["Oracle Fusion Pricing", "Rapid Execution"],
    image: "/Chosen works/Case study 1 and 2.png",
    cta: { type: "internal", href: "/password-gate?project=case-study-2" },
  },
  {
    id: 3,
    title: "Visualising Segment Analytics",
    tags: ["Oracle CX Unity", "Data Visualisation Dashboard"],
    image: "/Chosen works/Case study 3.jpg",
    cta: { type: "internal", href: "/password-gate?project=project-3" },
  },
  {
    id: 4,
    title: "Solving College Event Management",
    tags: ["IITG SWC Eventdeck", "Zero-to-One"],
    image: "/Chosen works/Case Study 4.png",
    cta: { type: "external", href: EXTERNAL_CASE_STUDY_LINKS.behance },
  },
];

export default function MobileChosenWorks() {
  const router = useRouter();

  const handleFrameClick = (cta: { type: string, href: string }) => {
    if (cta.type === "external") {
      window.open(cta.href, "_blank", "noreferrer noopener");
    } else {
      router.push(cta.href);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <h2 style={{
        color: "#39ff14",
        fontFamily: "var(--font-share-tech), 'Share Tech Mono', monospace",
        fontSize: "1.5rem",
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        paddingLeft: "0.5rem",
        marginBottom: "0.5rem",
        textShadow: "0 0 4px rgba(57,255,20,0.5)",
      }}>Chosen Works</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            onClick={() => handleFrameClick(project.cta)}
            style={{
              display: "flex",
              flexDirection: "column",
              borderRadius: "16px",
              overflow: "hidden",
              background: "rgba(0,0,0,0.4)",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
              cursor: "pointer",
            }}
          >
            {/* Image wrapper — must be relative + explicit height for Next.js fill */}
            <div style={{
              position: "relative",
              width: "100%",
              paddingTop: "56.25%", /* 16:9 aspect ratio */
              background: "#050505",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              overflow: "hidden",
            }}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw"
                style={{ objectFit: "cover" }}
              />
              <div style={{
                position: "absolute",
                inset: 0,
                background: "rgba(57,255,20,0.04)",
                mixBlendMode: "multiply",
                pointerEvents: "none",
              }} />
            </div>

            <div style={{ padding: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <h3 style={{
                color: "#ffffff",
                fontWeight: 700,
                fontSize: "1.05rem",
                lineHeight: 1.4,
                fontFamily: "var(--font-inter), system-ui, sans-serif",
              }}>{project.title}</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "4px" }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{
                    padding: "3px 8px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "4px",
                    fontSize: "10px",
                    color: "rgba(57,255,20,0.8)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-share-tech), monospace",
                    whiteSpace: "nowrap",
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
