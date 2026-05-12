"use client";

import { useState, useEffect } from "react";
import DesktopHome from "@/components/DesktopHome";
import MobileHome from "@/components/MobileHome";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mql = window.matchMedia("(max-width: 1024px)");
    setIsMobile(mql.matches);
    
    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };
    
    mql.addEventListener("change", handleMediaChange);
    return () => mql.removeEventListener("change", handleMediaChange);
  }, []);

  // Prevent hydration mismatch layout shift by rendering a dark slate
  if (!mounted) {
    return <div style={{ width: "100vw", height: "100vh", backgroundColor: "#050505" }} />;
  }

  return isMobile ? <MobileHome /> : <DesktopHome />;
}
