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
  {
    id: "me",
    type: "image-cycle",
    assets: [
      "/About me/Me 01.jpg",
      "/About me/Me 02.jpg",
      "/About me/Me 03.jpg",
      "/About me/Me 04.jpg"
    ]
  },
  {
    id: "speaker",
    type: "image-cycle",
    assets: [
      "/About me/Speaker 1.jpg",
      "/About me/Speaker 2.jpg",
      "/About me/Speaker%3.jpg",
      "/About me/Speaker%4.jpg"
    ]
  },
  {
    id: "typo",
    type: "image-cycle",
    assets: [
      "/About me/Typo.jpg",
      "/About me/Typo 2.jpg"
    ]
  },
  {
    id: "alcher-props",
    type: "image-cycle",
    assets: [
      "/About me/alcher props 01.jpg",
      "/About me/alcher props 02.jpg"
    ]
  },
  {
    id: "graffiti",
    type: "image-cycle",
    assets: [
      "/About me/Graffiti.jpg"
    ]
  },
  {
    id: "motionfolio",
    type: "video",
    videoSrc: "/About me/Motionfolio.mp4",
    link: "https://www.behance.net/gallery/150139689/MOTION-FOLIO"
  },
  {
    id: "youtube-preview",
    type: "youtube",
    youtubeId: "byhtsRBr2VY",
    link: "https://www.youtube.com/watch?v=byhtsRBr2VY"
  },
  {
    id: "life",
    type: "image-cycle",
    assets: [
      "/About me/life01.jpg",
      "/About me/life02.jpg",
      "/About me/life03.jpg",
      "/About me/life04.jpg",
      "/About me/life05.jpg",
      "/About me/life06.jpg"
    ]
  }
];

function MarqueeCard({ item }: { item: MarqueeItemData }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!item.assets || item.assets.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % item.assets!.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [item.assets]);

  const content = (
    <div style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden", borderRadius: "18px" }}>
      {item.type === "image-cycle" && item.assets && (
        <>
          {item.assets.map((src, idx) => (
            <img
              key={src}
              src={encodeURI(src)}
              alt="About me asset"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                position: "absolute",
                top: 0,
                left: 0,
                opacity: idx === currentIndex ? 1 : 0,
                transition: "opacity 0.8s ease-in-out"
              }}
            />
          ))}
        </>
      )}
      {item.type === "video" && item.videoSrc && (
        <video
          src={encodeURI(item.videoSrc)}
          autoPlay
          muted
          loop
          playsInline
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", borderRadius: "18px" }}
        />
      )}
      {item.type === "youtube" && item.youtubeId && (
        <div style={{ width: "100%", height: "100%", background: "#000", pointerEvents: "none", overflow: "hidden", position: "relative", borderRadius: "18px" }}>
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

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div
        className="panel what-else-card"
        style={{
          width: "450px",
          height: "300px",
          flexShrink: 0,
          padding: 0,
          overflow: "hidden",
          margin: 0,
          borderRadius: "18px",
          boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.08), 0px 2px 6px rgba(0, 0, 0, 0.04)",
          cursor: item.link ? "pointer" : "default"
        }}
        onClick={() => item.link && window.open(item.link, "_blank")}
      >
        {content}
      </div>
      {item.link && (
        <div style={{
          fontFamily: 'var(--label-font)', 
          fontSize: '11px', 
          letterSpacing: '0.14em', 
          textTransform: 'uppercase', 
          color: 'var(--ink-faint)', 
          textAlign: 'center',
          pointerEvents: 'none'
        }}>
          Click to view ↗
        </div>
      )}
    </div>
  );
}

export default function WhatElse() {
  return (
    <section className="min-experience-section" style={{ position: 'relative', zIndex: 1 }}>
      <h2 className="sec-h">What else?</h2>
      
      <p style={{ 
        fontFamily: 'var(--display-font)',
        fontStyle: 'italic',
        fontWeight: 400,
        color: 'var(--ink-soft)', 
        fontSize: '28px', 
        lineHeight: 1.4, 
        letterSpacing: '-0.01em',
        marginTop: '24px',
        maxWidth: '800px',
        marginBottom: '64px'
      }}>
        When I am not designing, I spend my time <strong style={{ color: "var(--ink)", fontWeight: 400 }}>living</strong> and <strong style={{ color: "var(--ink)", fontWeight: 400 }}>consuming</strong>. I love cinema, music, and all forms of storytelling. I admire how minute details shape a larger idea. Connecting with new people gives me a fresh perspective of the world through their lenses. Ultimately, good design comes from understanding people. I also like creating. Who does not?
        <span style={{ display: 'block', marginTop: '24px', fontFamily: 'var(--body-font)', fontStyle: 'normal', fontSize: '18px' }}>
          Here are a few snippets from my life.
        </span>
      </p>

      <div style={{ position: 'relative', width: '100%', marginTop: '48px' }}>
        
        {/* Left Edge Opacity Gradient Overlay */}
        <div className="what-else-edge" style={{
          position: 'absolute',
          right: '100%',
          width: 'calc(50vw - 50%)',
          top: -100, bottom: -100,
          background: 'linear-gradient(to right, var(--paper) 0%, var(--paper) 50%, transparent 100%)',
          zIndex: 10,
          pointerEvents: 'none'
        }} />

        {/* Right Edge Opacity Gradient Overlay */}
        <div className="what-else-edge" style={{
          position: 'absolute',
          left: '100%',
          width: 'calc(50vw - 50%)',
          top: -100, bottom: -100,
          background: 'linear-gradient(to left, var(--paper) 0%, var(--paper) 50%, transparent 100%)',
          zIndex: 10,
          pointerEvents: 'none'
        }} />

        {/* CSS Marquee Animation */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes scrollMarquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .what-else-marquee {
            display: flex;
            width: max-content;
            animation: scrollMarquee 45s linear infinite;
            gap: 24px;
            padding-right: 24px;
          }
          .what-else-marquee:hover {
            animation-play-state: paused;
          }
        `}} />

        {/* Let the container overflow horizontally but hide scrollbar */}
        <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          <div className="what-else-marquee">
            {/* First set */}
            {MARQUEE_ITEMS.map((item, index) => (
              <MarqueeCard key={`item-a-${index}`} item={item} />
            ))}
            {/* Duplicated set for seamless loop */}
            {MARQUEE_ITEMS.map((item, index) => (
              <MarqueeCard key={`item-b-${index}`} item={item} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
