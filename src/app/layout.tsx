import type { Metadata } from "next";
import Link from "next/link";
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

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

const SideMenu = () => {
  return (
    <div className="fixed left-0 top-1/2 z-[1000] flex h-full -translate-y-1/2 transform flex-col items-center justify-center rounded-r-[30px] px-3 pb-9 pt-4 backdrop-blur-[7px]">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(transparent_1px,#151515_1px)] backdrop-blur-sm [background-size:4px_4px] [mask-image:linear-gradient(to_right,#000_0%,rgba(0,0,0,0.1)_100%)]"></div>
      <div className="flex h-[65vh] flex-col items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="">
          <Image src="/static/logo.svg" alt="logo" width={42} height={42} />
        </Link>

        {/* Menu Links */}

        <div className="flex flex-col items-center gap-[4.5rem]">
          <Link
            href="#about"
            className="-rotate-90 transform bg-[linear-gradient(to_right,#BDDFFF,#CC00CC)] bg-clip-text text-white transition-all hover:rotate-0 hover:text-transparent"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="-rotate-90 transform bg-[linear-gradient(to_right,#BDDFFF,#CC00CC)] bg-clip-text text-white transition-all hover:rotate-0 hover:text-transparent"
          >
            Contact
          </Link>
          <Link
            href="#services"
            className="-rotate-90 transform bg-[linear-gradient(to_right,#BDDFFF,#CC00CC)] bg-clip-text text-white transition-all hover:rotate-0 hover:text-transparent"
          >
            Services
          </Link>
          <Link
            href="#home"
            className="-rotate-90 transform bg-[linear-gradient(to_right,#BDDFFF,#CC00CC)] bg-clip-text text-white transition-all hover:rotate-0 hover:text-transparent"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
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
        </ReactLenis>
      </body>
    </html>
  );
}
