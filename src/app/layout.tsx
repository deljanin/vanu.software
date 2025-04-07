import localFont from "next/font/local";
import "./globals.css";
import { ReactLenis } from "lenis/react";
import { Metadata } from "next";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";

const suse = localFont({
  src: "./fonts/SUSEvariableFont.ttf",
  variable: "--font-suse",
  weight: "100 900",
});

const tilla = localFont({
  src: "./fonts/Tilla.woff2",
  variable: "--font-tilla",
});

export const metadata: Metadata = {
  title: "Vanu Software | Custom Web Development & Design",
  description:
    "Get a professional, high-quality website tailored to your business needs. At Vanu Software, we build fast, visually stunning, and conversion-focused websites that help you stand out and grow online.",
  keywords: `web design, web development, custom websites, software solutions, website redesign, UI/UX design, web applications, website development, frontend development, modern web design, interactive websites, React development, digital solutions, professional web services,  Vanu Software`,
  alternates: {
    canonical: "https://vanu.software/",
  },
  openGraph: {
    type: "website",
    url: "https://vanu.software/",
    title: "Vanu Software | Web Development & Design",
    description:
      "Get a professional, high-quality website tailored to your business needs. At Vanu Software, we build fast, visually stunning, and conversion-focused websites that help you stand out and grow online.",
    images: [
      {
        url: "https://vanu.software/icon.svg",
        width: 1200,
        height: 630,
        alt: "Vanu Software | Web Development & Design",
      },
    ],
    siteName: "Vanu Software",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vanu Software | Web Development & Design",
    description:
      "Need a website? We build high-quality, conversion-focused websites that help businesses grow online.",
    images: ["https://vanu.software/icon.svg"],
  },
  other: {
    "google-site-verification": "eHBz5t8ZQ543afAYc0zlfstqVPsyOY72vwfVsoK5nRA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${tilla.variable} ${suse.variable} font-suse antialiased`}
      >
        <SpeedInsights />
        <ReactLenis root>
          <Navbar />
          {/* <SideMenu /> */}
          {children}
          <Footer />
        </ReactLenis>
      </body>
    </html>
  );
}
