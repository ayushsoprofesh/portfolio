"use client";

import { useState, useEffect } from "react";

type MarqueeItemData = {
  id: string;
  type: "image-cycle" | "video" | "youtube";
  assets?: string[];
  videoSrc?: string;
  youtubeId?: string;
  link?: string;
};

const MARQUEE_ITEMS: MarqueeItemData[] = [
  { id: "me", type: "image-cycle", assets: ["/About me/Me 01.jpg", "/About me/Me 02.jpg", "/About me/Me 03.jpg", "/About me/Me 04.jpg"] },
  { id: "speaker", type: "image-cycle", assets: ["/About me/Speaker 1.jpg", "/About me/Speaker 2.jpg", "/About me/Speaker%3.jpg", "/About me/Speaker%4.jpg"] },
  { id: "typo", type: "image-cycle", assets: ["/About me/Typo.jpg", "/About me/Typo 2.jpg"] },
  { id: "alcher-props", type: "image-cycle", assets: ["/About me/alcher props 01.jpg", "/About me/alcher props 02.jpg"] },
  { id: "graffiti", type: "image-cycle", assets: ["/About me/Graffiti.jpg"] },
  { id: "motionfolio", type: "video", videoSrc: "/About me/Motionfolio.mp4", link: "https://www.behance.net/gallery/150139689/MOTION-FOLIO" },
  { id: "youtube-preview", type: "youtube", youtubeId: "byhtsRBr2VY", link: "https://www.youtube.com/watch?v=byhtsRBr2VY" },
  { id: "life", type: "image-cycle", assets: ["/About me/life01.jpg", "/About me/life02.jpg", "/About me/life03.jpg", "/About me/life04.jpg", "/About me/life05.jpg", "/About me/life06.jpg"] },
];

function MobileMarqueeCard({ item }: { item: MarqueeItemData }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!item.assets || item.assets.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % item.assets!.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [item.assets]);

  const content = (
    <div style={{
      width: "180px",
      height: "140px",
      position: "relative",
      overflow: "hidden",
      borderRadius: "12px",
      background: "rgba(255,255,255,0.04)",
      flexShrink: 0,
      border: "1px solid rgba(255,255,255,0.08)",
    }}>
      {item.type === "image-cycle" && item.assets && (
        <>
          {item.assets.map((src, idx) => (
            <img
              key={src}
              src={encodeURI(src)}
              alt="About me asset"
              style={{
                width: "100%", height: "100%",
                objectFit: "cover",
                display: "block",
                position: "absolute", top: 0, left: 0,
                opacity: idx === currentIndex ? 1 : 0,
                transition: "opacity 0.8s ease-in-out",
              }}
            />
          ))}
        </>
      )}
      {item.type === "video" && item.videoSrc && (
        <video src={encodeURI(item.videoSrc)} autoPlay muted loop playsInline
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      )}
      {item.type === "youtube" && item.youtubeId && (
        <div style={{ width: "100%", height: "100%", background: "#000", position: "relative", overflow: "hidden", pointerEvents: "none" }}>
          <iframe
            src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${item.youtubeId}&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            style={{ width: "150%", height: "150%", position: "absolute", top: "-25%", left: "-25%", pointerEvents: "none" }}
          />
        </div>
      )}
    </div>
  );

  if (item.link) {
    return (
      <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ display: "block", textDecoration: "none", flexShrink: 0 }}>
        {content}
      </a>
    );
  }
  return <div style={{ flexShrink: 0 }}>{content}</div>;
}

export default function MobileAboutMe({ px = "1.25rem" }: { px?: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <div style={{ padding: `0 ${px}` }}>
        <div style={{
          padding: "1.5rem",
          borderRadius: "24px",
          background: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
        }}>
          <h2 style={{
            color: "#39ff14",
            fontFamily: "var(--font-share-tech), monospace",
            fontSize: "1.5rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "1rem",
            textShadow: "0 0 4px rgba(57,255,20,0.5)",
          }}>Beyond the Pixels</h2>
          <p style={{
            color: "#d1d5db",
            fontSize: "0.9rem",
            lineHeight: 1.7,
            fontFamily: "var(--font-inter), system-ui, sans-serif",
          }}>
            When I am not designing, I spend my time{" "}
            <strong style={{ color: "#39ff14" }}>living</strong> and{" "}
            <strong style={{ color: "#39ff14" }}>consuming</strong>. I love cinema, music, and all forms of storytelling. I admire how minute details shape a larger idea. Connecting with new people gives me a fresh perspective of the world through their lenses. Ultimately, good design comes from understanding people. I also like creating. Who does not? Here are a few snippets from my life.
          </p>
        </div>
      </div>

      <div className="marquee-container" style={{ height: "160px", width: "100%" }}>
        <div className="marquee-track" style={{ animationDuration: "25s" }}>
          <div className="marquee-content" style={{ gap: "16px", paddingRight: "16px" }}>
            {MARQUEE_ITEMS.map((item, index) => (
              <MobileMarqueeCard key={`item-a-${index}`} item={item} />
            ))}
          </div>
          <div className="marquee-content" aria-hidden="true" style={{ gap: "16px", paddingRight: "16px" }}>
            {MARQUEE_ITEMS.map((item, index) => (
              <MobileMarqueeCard key={`item-b-${index}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

