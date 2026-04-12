"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { DotGothic16 } from "next/font/google";

const dotGothic = DotGothic16({ weight: "400", subsets: ["latin"] });

export default function FooterSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePrintTrigger = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleVideoEnd = () => {
    window.open("resume.pdf", "_blank");
  };

  return (
    <footer 
      className={`footer-section ${dotGothic.className}`}
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: -5,
        backgroundColor: "#000",
        color: "#39ff14",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden"
      }}
    >
      {/* Top Left Contact */}
      <AnimatePresence>
        {!isPlaying && (
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100, transition: { duration: 0.8, ease: "easeIn" } }}
            style={{
              position: "absolute",
              top: "2rem",
              left: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              fontSize: "1.2rem",
              letterSpacing: "0.05em",
              zIndex: 10
            }}
          >
            <a href="#" style={{ color: "#39ff14", textDecoration: "none" }}>LinkedIn</a>
            <a href="#" style={{ color: "#39ff14", textDecoration: "none" }}>Behance</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Right Contact */}
      <AnimatePresence>
        {!isPlaying && (
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100, transition: { duration: 0.8, ease: "easeIn" } }}
            style={{
              position: "absolute",
              top: "2rem",
              right: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              fontSize: "1.2rem",
              letterSpacing: "0.05em",
              textAlign: "right",
              zIndex: 10
            }}
          >
            <a href="mailto:ayush.singh451@gmail.com" style={{ color: "#39ff14", textDecoration: "none" }}>ayush.singh451@gmail.com</a>
            <a href="tel:+917357442395" style={{ color: "#39ff14", textDecoration: "none" }}>+91 7357442395</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Center Media Container */}
      <div 
        style={{
          position: "absolute",
          width: "100%",
          maxWidth: "1",
          height: "auto",
          aspectRatio: "16 / 9",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {!isPlaying ? (
          <>
            <Image 
              src="/footer.jpg"
              alt="Terminal CV Output"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
            {/* The Invisible Hotspot */}
            {/* Positioned on the right side. Adjust these percentages to perfectly match the physical "PRINT CV" button in the artwork */}
            <button
              onClick={handlePrintTrigger}
              style={{
                position: "absolute",
                top: "70%",   // Estimate: bottom third
                right: "10%", // Estimate: right margin
                width: "15%",
                height: "15%",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                zIndex: 20
              }}
              aria-label="Print CV"
            />
          </>
        ) : (
          <video 
            ref={videoRef}
            src="/footer.webm"
            onEnded={handleVideoEnd}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain"
            }}
            playsInline
            muted={false} // Adjust based on whether video requires audio
          />
        )}
      </div>

      {/* Bottom Center Bar */}
      <div 
        style={{
          position: "absolute",
          bottom: "1rem",
          width: "100%",
          textAlign: "center",
          fontSize: "1.1rem",
          letterSpacing: "0.05em",
          zIndex: 10
        }}
      >
        Made with love for The Matrix, Antigravity and Panic!!!
      </div>
    </footer>
  );
}
