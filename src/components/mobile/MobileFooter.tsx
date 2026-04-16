"use client";

const CONTACT_LINKS = [
  { label: "Email",    desc: "ayush.singh451@gmail.com",   href: "mailto:ayush.singh451@gmail.com" },
  { label: "Phone",    desc: "+91 7357442395",              href: "tel:+917357442395" },
  { label: "LinkedIn", desc: "Connect with me",             href: "https://www.linkedin.com/in/ayush-singh-5065881a1/" },
  { label: "Behance",  desc: "View college design work",       href: "https://www.behance.net/ayushsingh83" },
];

export default function MobileFooter({ px = "1.25rem" }: { px?: string }) {
  return (
    <footer style={{
      width: "100%",
      background: "#050505",
      paddingTop: "3rem",
      paddingBottom: "2rem",
      paddingLeft: px,
      paddingRight: px,
      borderTop: "1px solid rgba(57,255,20,0.15)",
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      position: "relative",
      zIndex: 10,
    }}>
      <div>
        <h2 style={{
          color: "#39ff14",
          fontFamily: "var(--font-share-tech), monospace",
          fontSize: "1.4rem",
          letterSpacing: "0.08em",
          marginBottom: "0.5rem",
          textShadow: "0 0 5px rgba(57,255,20,0.5)",
        }}>Thank you for visiting.</h2>
        <p style={{
          color: "rgba(57,255,20,0.6)",
          fontFamily: "var(--font-share-tech), monospace",
          fontSize: "0.75rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
        }}>Let's build something cool together.</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {CONTACT_LINKS.map(link => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2px",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
              padding: "0.875rem 0.5rem",
              textDecoration: "none",
              transition: "background 0.2s ease",
            }}
          >
            <span style={{
              color: "rgba(255,255,255,0.35)",
              fontSize: "0.65rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontFamily: "var(--font-share-tech), monospace",
            }}>{link.label}</span>
            <span style={{
              color: "#39ff14",
              fontFamily: "var(--font-share-tech), monospace",
              fontSize: "0.9rem",
              letterSpacing: "0.05em",
            }}>{link.desc}</span>
          </a>
        ))}
      </div>

      <div style={{
        textAlign: "center",
        paddingTop: "1.5rem",
        marginTop: "0.5rem",
        color: "rgba(57,255,20,0.3)",
        fontFamily: "var(--font-share-tech), monospace",
        fontSize: "0.65rem",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
      }}>
        Made with love for The Matrix, Antigravity and Panic!!!
      </div>
    </footer>
  );
}
