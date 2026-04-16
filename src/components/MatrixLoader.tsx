"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MatrixLoaderProps {
  onComplete: () => void;
}

type LoaderState = "init" | "loading" | "ready" | "zooming" | "blackout" | "done";

export default function MatrixLoader({ onComplete }: MatrixLoaderProps) {
  const [loaderState, setLoaderState] = useState<LoaderState>("init");
  const [dots, setDots] = useState("");

  // Blinking dots logic
  useEffect(() => {
    if (loaderState !== "loading") return;

    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev.length >= 3) return "";
        return prev + ".";
      });
    }, 500);

    return () => clearInterval(interval);
  }, [loaderState]);

  // Main flow logic
  useEffect(() => {
    let isMounted = true;
    let loadFired = false;

    const finishLoading = () => {
      if (!isMounted || loadFired) return;
      loadFired = true;
      
      clearTimeout(textDelay);
      setLoaderState("ready");

      // Transition sequence
      setTimeout(() => {
        if (!isMounted) return;
        setLoaderState("zooming");

        setTimeout(() => {
          if (!isMounted) return;
          setLoaderState("blackout");

          setTimeout(() => {
            if (!isMounted) return;
            setLoaderState("done");
            onComplete();
          }, 900); // Wait for blackout to cover entirely (matches transition duration)
        }, 300);
      }, 1500); 
    };

    // Small delay before showing "Loading..." text
    const textDelay = setTimeout(() => {
      if (isMounted) setLoaderState("loading");
    }, 100); // Reduced from 500 to show text sooner

    // Check if已经 loaded
    if (document.readyState === "complete") {
      // Even if already loaded, show the loader for at least 1.5s to give it a feel
      setTimeout(finishLoading, 1500);
    } else {
      window.addEventListener("load", finishLoading);
    }
    
    // Fallback in case load event takes too long
    const fallbackTimer = setTimeout(finishLoading, 10000);

    return () => {
      isMounted = false;
      window.removeEventListener("load", finishLoading);
      clearTimeout(fallbackTimer);
      clearTimeout(textDelay);
    };
  }, [onComplete]);

  if (loaderState === "done") return null;

  return (
    <div className="matrix-loader">
      {/* LAYER 1: Solid black background */}
      <div className="matrix-loader-bg" />

      {/* LAYER 2: Text (sandwiched between rain and black bg) */}
      <motion.div
        className="loader-text-container"
        animate={{
          scale: loaderState === "zooming" || loaderState === "blackout" ? 6 : 1,
          opacity: loaderState === "blackout" ? 0 : 1
        }}
        transition={{
          scale: { duration: 1.5, ease: "easeIn" },   // Slower than iframe's 1.2s → parallax lag
          opacity: { duration: 0.4, ease: "easeOut" }
        }}
      >
        <AnimatePresence mode="wait">
          {loaderState === "loading" && (
            <motion.div
              key="loading-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="loader-text"
            >
              Loading{dots}
            </motion.div>
          )}

          {loaderState === "ready" && (
            <motion.div
              key="ready-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="loader-text"
            >
              Taking you in
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* LAYER 3: Matrix rain iframe (on top, transparent bg) */}
      <motion.div
        className="matrix-loader-iframe-container"
        animate={{
          scale: loaderState === "zooming" || loaderState === "blackout" ? 10 : 1,
          opacity: loaderState === "blackout" ? 0 : 1
        }}
        transition={{
          scale: { duration: 1.2, ease: "easeIn" },
          opacity: { duration: 0.6, ease: "easeOut" }
        }}
      >
        <iframe
          className="matrix-loader-iframe"
          src="https://rezmason.github.io/matrix/?skipIntro=false&numColumns=110&bloomSize=0.6&bloomStrength=0.85"
          title="Matrix Rain Background"
          tabIndex={-1}
        />
      </motion.div>

      {/* Radial Blackout/Blur Overlay */}
      <motion.div
        className="loader-blackout-radial"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: loaderState === "blackout" ? 25 : 0,
          opacity: loaderState === "blackout" ? 1 : 0 
        }}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "10vw",
          height: "10vw",
          marginLeft: "-5vw",
          marginTop: "-5vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0) 100%)",
          boxShadow: "0 0 40px 20px rgba(0,0,0,0.5)",
          pointerEvents: "none",
          zIndex: 20
        }}
      />
    </div>
  );
}
