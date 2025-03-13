import type { Metadata } from "next";
// import Link from "next/link";
import localFont from "next/font/local";
import "./globals.css";
// import Image from "next/image";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

const suse = localFont({
  src: "./fonts/SUSEvariableFont.ttf",
  variable: "--font-suse",
  weight: "100 900",
});

const median = localFont({
  src: "./fonts/MEDIAN.woff2",
  variable: "--font-median",
});

export const metadata: Metadata = {
  title: "Vanu Software",
  description:
    "We create stunning portfolio websites and custom software tailored to your needs. From just an idea to a complete solution. We’ve got you covered.",
};

// const SideMenu = () => {
//   return (
//     <div className="fixed left-2 top-1/2 flex h-[65vh] -translate-y-1/2 transform flex-col items-center justify-between rounded-[30px] bg-white bg-opacity-10 px-1 pb-9 pt-4 backdrop-blur-sm">
//       {/* Logo Section */}
//       <div className="">
//         <Image
//           src="/static/logo.svg"
//           alt="logo"
//           width={42}
//           height={42}
//           className=""
//         />
//       </div>

//       {/* Menu Links */}

//       <div className="flex flex-col items-center gap-[4.5rem]">
//         <Link
//           href="#about"
//           className="-rotate-90 transform text-white transition-all hover:text-purple-500"
//         >
//           About
//         </Link>
//         <Link
//           href="#contact"
//           className="-rotate-90 transform text-white transition-all hover:text-purple-500"
//         >
//           Contact
//         </Link>
//         <Link
//           href="#services"
//           className="-rotate-90 transform text-white transition-all hover:text-purple-500"
//         >
//           Services
//         </Link>
//         <Link
//           href="#home"
//           className="-rotate-90 transform text-white transition-all hover:text-purple-500"
//         >
//           Home
//         </Link>
//       </div>
//     </div>
//   );
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${median.variable} ${suse.variable} font-suse antialiased`}
      >
        <ReactLenis root>
          {/* <SideMenu /> */}
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
