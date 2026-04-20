import type { Metadata } from "next";
import { Share_Tech_Mono, Inter } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Ayush - UX Designer",
  description: "A compilation of Ayush's work",
  icons: {
    icon: "/Website Icon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${matrixFont.className} ${matrixFont.variable} ${interFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
