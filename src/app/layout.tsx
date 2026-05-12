import type { Metadata } from "next";
import { Instrument_Serif, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./minimal/minimal.css";

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--serif",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--mono",
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
    <html lang="en" className={`${instrumentSerif.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
