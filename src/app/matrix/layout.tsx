"use client";

import { useEffect } from "react";
import { Share_Tech_Mono, Inter } from "next/font/google";
import "../globals.css";

const matrixFont = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-share-tech",
});

const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function MatrixLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    html.style.overflow = "hidden";
    html.style.height = "100vh";
    html.style.width = "100vw";
    body.style.overflow = "hidden";
    body.style.height = "100vh";
    body.style.width = "100vw";
    body.style.backgroundColor = "#000000";
    body.style.color = "#39ff14";
    return () => {
      html.style.overflow = "";
      html.style.height = "";
      html.style.width = "";
      body.style.overflow = "";
      body.style.height = "";
      body.style.width = "";
      body.style.backgroundColor = "";
      body.style.color = "";
    };
  }, []);

  return (
    <div
      className={`${matrixFont.className} ${matrixFont.variable} ${interFont.variable}`}
    >
      {children}
    </div>
  );
}
