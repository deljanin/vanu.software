import type { Metadata } from 'next';
import Link from 'next/link';
import localFont from 'next/font/local';
import './globals.css';
import Image from 'next/image';
import { ReactLenis, useLenis } from 'lenis/react';
const ron = localFont({
  src: './fonts/RON.woff',
  variable: '--font-ron',
  style: 'normal',
});

const suse = localFont({
  src: './fonts/SUSEvariableFont.ttf',
  variable: '--font-suse',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Vanu Software',
  description:
    'We create stunning portfolio websites and custom software tailored to your needs. From just an idea to a complete solution. We’ve got you covered.',
};

const SideMenu = () => {
  return (
    <div className="fixed top-1/2 transform -translate-y-1/2 left-2 h-[65vh] flex flex-col items-center justify-between  rounded-[30px] pt-4 pb-9 px-1 bg-white bg-opacity-10 backdrop-blur-sm">
      {/* Logo Section */}
      <div className="">
        <Image
          src="/static/logo.svg"
          alt="logo"
          width={42}
          height={42}
          className=""
        />
      </div>

      {/* Menu Links */}

      <div className=" flex flex-col items-center gap-[4.5rem]">
        <Link
          href="#about"
          className="text-white transform -rotate-90 hover:text-purple-500 transition-all">
          About
        </Link>
        <Link
          href="#contact"
          className="text-white transform -rotate-90 hover:text-purple-500 transition-all">
          Contact
        </Link>
        <Link
          href="#services"
          className="text-white transform -rotate-90 hover:text-purple-500 transition-all">
          Services
        </Link>
        <Link
          href="#home"
          className="text-white transform -rotate-90 hover:text-purple-500 transition-all">
          Home
        </Link>
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
        className={`${ron.variable} ${suse.variable} antialiased font-suse`}>
        <ReactLenis root>
          {/* <SideMenu /> */}
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
