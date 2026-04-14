"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
      "/About me/Speaker 2.jpg"
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
  }
];

function MarqueeCard({ item }: { item: MarqueeItemData }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!item.assets || item.assets.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % item.assets!.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [item.assets]);

  const content = (
    <div style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden", borderRadius: "inherit" }}>
      {item.type === "image-cycle" && item.assets && (
        <>
          {item.assets.map((src, idx) => (
            <img 
              key={src}
              src={src} 
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
          src={item.videoSrc}
          autoPlay
          muted
          loop
          playsInline
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      )}
      {item.type === "youtube" && item.youtubeId && (
        <div style={{ width: "100%", height: "100%", background: "#000", pointerEvents: "none", overflow: "hidden", position: "relative" }}>
          <iframe 
            src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${item.youtubeId}&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1`} 
            frameBorder="0" 
            allow="autoplay; encrypted-media" 
            style={{ width: "150%", height: "150%", position: "absolute", top: "-25%", left: "-25%", pointerEvents: "none" }}
          />
        </div>
      )}
      {(item.type === "video" || item.type === "youtube") && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          transition={{ duration: 0.3 }}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
            padding: "30px 10px 15px 10px",
            color: "var(--matrix-green)",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "0.85rem",
            pointerEvents: "none",
            zIndex: 10,
            letterSpacing: "0.05em"
          }}
        >
          CLICK TO EXPLORE
        </motion.div>
      )}
    </div>
  );

  if (item.link) {
    return (
      <a 
        href={item.link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="marquee-frame glass-panel" 
        style={{ display: "block", textDecoration: "none", padding: 0, cursor: "pointer", overflow: "hidden" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {content}
      </a>
    );
  }

  return (
    <div className="marquee-frame glass-panel" style={{ padding: 0, overflow: "hidden", cursor: "default" }}>
      {content}
    </div>
  );
}

export default function AboutMeSection({ isActive }: { isActive: boolean }) {
  const revealEase = [0.25, 1, 0.5, 1] as const;
  const textEase = [0.16, 1, 0.3, 1] as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, ease: revealEase }
    }
  };

  const textVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { delay: 0.3, duration: 0.8, ease: textEase } 
    }
  };

  return (
    <section className="about-me-section">
      <motion.div 
        className="about-me-container"
        variants={containerVariants}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
      >
        <motion.div className="about-me-text-wrapper" variants={textVariants}>
          <h2 className="about-me-title">Beyond the Pixels</h2>
          <p className="about-me-body">
            When I am not designing, I spend my time <strong style={{ color: "var(--matrix-green)", fontWeight: 700 }}>living</strong> and <strong style={{ color: "var(--matrix-green)", fontWeight: 700 }}>consuming</strong>. I love cinema, music, and all forms of storytelling. I admire how minute details shape a larger idea. Connecting with new people gives me a fresh perspective of the world through their lenses. Ultimately, good design comes from understanding people. I also like creating. Who does not? Here are a few snippets from my life.
          </p>
        </motion.div>

        {/* The Infinite Marquee */}
        <motion.div 
          className="marquee-container"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.8, duration: 1 } }
          }}
        >
          {/* We duplicate the track to create a seamless infinite loop */}
          <div className="marquee-track">
            <div className="marquee-content">
              {MARQUEE_ITEMS.map((item, index) => (
                <MarqueeCard key={`item-a-${index}`} item={item} />
              ))}
            </div>
            {/* Duplicated content for seamless loop */}
            <div className="marquee-content" aria-hidden="true">
              {MARQUEE_ITEMS.map((item, index) => (
                <MarqueeCard key={`item-b-${index}`} item={item} />
              ))}
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
