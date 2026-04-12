"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MatrixLoaderProps {
  onComplete: () => void;
}

type LoaderState = "loading" | "ready" | "zooming" | "blackout" | "done";

export default function MatrixLoader({ onComplete }: MatrixLoaderProps) {
  const [loaderState, setLoaderState] = useState<LoaderState>("loading");
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
    // 1. Wait for assets to "load" (simulated min time + actual window load if possible)
    let isMounted = true;

    const startSequence = () => {
      if (!isMounted) return;

      // Minimum loading time so users see the cool animation
      setTimeout(() => {
        if (!isMounted) return;
        setLoaderState("ready");

        // Transition times
        setTimeout(() => {
          if (!isMounted) return;
          setLoaderState("zooming");

          // Blackout starts a few moments after zooming
          setTimeout(() => {
            if (!isMounted) return;
            setLoaderState("blackout");

            setTimeout(() => {
              if (!isMounted) return;
              setLoaderState("done");
              onComplete();
            }, 800); // Wait for blackout to cover entirely
          }, 300); // 300ms after zoom starts
        }, 1500); // Wait in "ready" state
      }, 3000); // Minimum loading time
    };

    // If document is already complete, just start the sequence.
    // Otherwise wait for window load.
    if (document.readyState === "complete") {
      startSequence();
    } else {
      window.addEventListener("load", startSequence);
      // Fallback in case load event already fired or takes too long
      const fallbackTimer = setTimeout(startSequence, 5000);
      return () => {
        isMounted = false;
        window.removeEventListener("load", startSequence);
        clearTimeout(fallbackTimer);
      };
    }

    return () => {
      isMounted = false;
    };
  }, [onComplete]);

  if (loaderState === "done") return null;

  return (
    <div className="matrix-loader">
      {/* Background Iframe */}
      <motion.div
        className="matrix-loader-iframe-container"
        animate={{
          scale: loaderState === "zooming" || loaderState === "blackout" || loaderState === "done" ? 10 : 1,
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

      {/* Text Overlay */}
      <div className="loader-text-container">
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
      </div>

      {/* Radial Blackout/Blur Overlay */}
      <motion.div
        className="loader-blackout-radial"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: loaderState === "blackout" || loaderState === "done" ? 25 : 0,
          opacity: loaderState === "blackout" || loaderState === "done" ? 1 : 0 
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
