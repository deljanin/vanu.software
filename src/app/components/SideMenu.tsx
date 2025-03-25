"use client";
import { useLenis } from "lenis/react";
import Image from "next/image";
import Link from "next/link";

export default function SideMenu() {
  const lenis = useLenis();
  return (
    <div className="fixed left-0 top-1/2 z-[1000] flex h-full -translate-y-1/2 transform flex-col items-center justify-center rounded-r-[30px] px-3 pb-9 pt-4 backdrop-blur-[7px]">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(transparent_1px,#151515_1px)] backdrop-blur-sm [background-size:4px_4px] [mask-image:linear-gradient(to_right,#000_0%,rgba(0,0,0,0.1)_100%)]"></div>
      <div className="flex h-[65vh] flex-col items-center justify-between">
        {/* Logo Section */}
        <Link
          href="/"
          className=""
          onClick={() => {
            lenis?.scrollTo("#home", {
              duration: 3,
            });
          }}
        >
          <Image src="/static/logo.svg" alt="logo" width={42} height={42} />
        </Link>

        {/* Menu Links */}

        <div className="flex flex-col items-center gap-[4.5rem]">
          <Link
            href="#about"
            onClick={() => {
              lenis?.scrollTo("#about", {
                duration: 3,
              });
            }}
            className="-rotate-90 transform bg-[linear-gradient(to_right,#BDDFFF,#CC00CC)] bg-clip-text text-white transition-all hover:text-transparent"
          >
            About
          </Link>
          <Link
            href="/#contact"
            onClick={() => {
              lenis?.scrollTo("#contact", {
                duration: 3,
                offset: -60,
              });
            }}
            className="-rotate-90 transform bg-[linear-gradient(to_right,#BDDFFF,#CC00CC)] bg-clip-text text-white transition-all hover:text-transparent"
          >
            Contact
          </Link>
          <Link
            href="/#services"
            onClick={() => {
              lenis?.scrollTo("#services", {
                duration: 3,
              });
            }}
            className="-rotate-90 transform bg-[linear-gradient(to_right,#BDDFFF,#CC00CC)] bg-clip-text text-white transition-all hover:text-transparent"
          >
            Services
          </Link>
          <Link
            href="/"
            onClick={() => {
              lenis?.scrollTo("#home", {
                duration: 3,
              });
            }}
            className="-rotate-90 transform bg-[linear-gradient(to_right,#BDDFFF,#CC00CC)] bg-clip-text text-white transition-all hover:text-transparent"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
