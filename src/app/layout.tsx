import localFont from "next/font/local";
import "./globals.css";
import { ReactLenis } from "lenis/react";
import SideMenu from "./components/SideMenu";
import { Metadata } from "next";
import Footer from "./components/Footer";

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
  title: "Vanu Software",
  description:
    "We create stunning portfolio websites and custom software tailored to your needs. From just an idea to a complete solution. We’ve got you covered.",
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
        <ReactLenis root>
          <SideMenu />
          {children}
          <Footer />
        </ReactLenis>
      </body>
    </html>
  );
}
