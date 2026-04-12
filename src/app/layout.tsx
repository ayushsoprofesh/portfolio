import type { Metadata } from "next";
import { Share_Tech_Mono, Inter, DotGothic16 } from "next/font/google";
import "./globals.css";

const matrixFont = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-share-tech",
});

const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const dotGothic = DotGothic16({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dot-gothic",
});

export const metadata: Metadata = {
  title: "Ayush - UX Designer",
  description: "The Matrix Theme Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${matrixFont.className} ${matrixFont.variable} ${interFont.variable} ${dotGothic.variable}`}>
      <body>{children}</body>
    </html>
  );
}
