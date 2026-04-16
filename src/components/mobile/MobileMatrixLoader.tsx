"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileMatrixLoader({ onComplete }: { onComplete: () => void }) {
  const [loaderState, setLoaderState] = useState<"init" | "loading" | "ready" | "fading" | "done">("init");
  const [dots, setDots] = useState("");

  useEffect(() => {
    if (loaderState !== "loading") return;
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);
    return () => clearInterval(interval);
  }, [loaderState]);

  useEffect(() => {
    let isMounted = true;
    let loadFired = false;

    const finishLoading = () => {
      if (!isMounted || loadFired) return;
      loadFired = true;
      
      clearTimeout(textDelay);
      setLoaderState("ready");
      setTimeout(() => {
        if (!isMounted) return;
        setLoaderState("fading");
        setTimeout(() => {
          if (!isMounted) return;
          setLoaderState("done");
          onComplete();
        }, 1000);
      }, 1500);
    };

    const textDelay = setTimeout(() => {
      if (isMounted) setLoaderState("loading");
    }, 100);

    if (document.readyState === "complete") {
      // Show loader for at least 1.5s even if assets are loaded
      setTimeout(finishLoading, 1500);
    } else {
      window.addEventListener("load", finishLoading);
    }

    const fallbackTimer = setTimeout(finishLoading, 8000);

    return () => {
      isMounted = false;
      window.removeEventListener("load", finishLoading);
      clearTimeout(fallbackTimer);
      clearTimeout(textDelay);
    };
  }, [onComplete]);

  if (loaderState === "done") return null;

  return (
    <motion.div
      animate={{ opacity: loaderState === "fading" ? 0 : 1 }}
      transition={{ duration: 1.0, ease: "easeOut" }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        backgroundColor: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
      }}
    >
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <iframe
          style={{ width: "100%", height: "100%", objectFit: "cover", border: "none" }}
          src="https://rezmason.github.io/matrix/?skipIntro=false&numColumns=60&bloomSize=0.6&bloomStrength=0.8"
          title="Matrix Rain Background"
          tabIndex={-1}
        />
      </div>

      <div style={{
        position: "relative",
        zIndex: 10,
        color: "#39ff14",
        fontFamily: "var(--font-share-tech), 'Share Tech Mono', monospace",
        fontSize: "1.4rem",
        textShadow: "0 0 8px rgba(57,255,20,0.8)",
        padding: "0 1rem",
        textAlign: "center",
      }}>
        <AnimatePresence mode="wait">
          {loaderState === "loading" && (
            <motion.div
              key="loading-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
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
            >
              Taking you in
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
