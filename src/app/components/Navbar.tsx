"use client";
import { useLenis } from "lenis/react";
import Image from "next/image";
import Link from "next/link";
// import { useState } from "react";
// import { MotionConfig, motion } from "motion/react";

const menuLinks = [
  { text: "Home", link: "/", scrollTo: "#home" },
  { text: "Services", link: "/#services", scrollTo: "#services" },
  { text: "Contact", link: "/#contact", scrollTo: "#contact" },
];

export default function Navbar() {
  const lenis = useLenis();
  // const [menuToggle, setMenuToggle] = useState(false);

  return (
    <div className="fixed left-0 top-0 z-40 flex h-[80px] w-full items-center justify-center backdrop-blur-[7px] md:top-4 md:w-[50vw] md:translate-x-1/2 md:rounded-3xl">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(transparent_1px,#151515_1px)] backdrop-blur-sm [background-size:4px_4px] md:w-[50vw] md:rounded-3xl"></div>
      <div className="flex w-full justify-between px-4 md:w-[50vw] md:px-6">
        {/* Logo Section */}
        <Link
          href="/"
          className="relative"
          onClick={() => {
            lenis?.scrollTo("#home", {
              duration: 3,
            });
          }}
        >
          <Image src="/static/logo.svg" alt="logo" width={40} height={40} />
          <Image
            src="/static/logo.svg"
            alt="logo"
            width={40}
            height={40}
            className="absolute inset-0 opacity-0 blur-[15px] duration-500 ease-in-out hover:opacity-100"
          />
        </Link>

        {/* Menu Links */}
        <div className="flex items-center gap-4 font-medium sm:gap-8 md:text-lg lg:gap-16">
          {menuLinks.map((link, i) => (
            <Link
              key={i}
              href={link.link}
              onClick={() => {
                lenis?.scrollTo(link.scrollTo, {
                  duration: 3,
                });
              }}
              className="animate-gradient bg-[linear-gradient(to_right,#BDDFFF,#CC00CC,#BDDFFF,#CC00CC,#BDDFFF,#CC00CC,#BDDFFF)] bg-[length:300%_300%] bg-clip-text transition-all duration-200 hover:text-transparent"
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// function AnimatedHamburgerButton({
//   menuToggle,
//   setMenuToggle,
// }: {
//   menuToggle: boolean;
//   setMenuToggle: React.Dispatch<React.SetStateAction<boolean>>;
// }) {
//   return (
//     <MotionConfig
//       transition={{
//         duration: 0.2,
//         ease: "easeInOut",
//       }}
//     >
//       <motion.button
//         initial={false}
//         animate={menuToggle ? "open" : "closed"}
//         onClick={() => setMenuToggle((pv) => !pv)}
//         className="relative h-20 w-20 rounded-full"
//       >
//         <motion.span
//           variants={VARIANTS.top}
//           className="absolute h-1 w-10 bg-white"
//           style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
//         />

//         <motion.span
//           variants={VARIANTS.middle}
//           className="absolute h-1 w-10 bg-white"
//           style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
//         />

//         <motion.span
//           variants={VARIANTS.bottom}
//           className="absolute h-1 w-10 bg-white"
//           style={{
//             x: "-75%",

//             y: "50%",

//             bottom: "35%",

//             left: "50%",
//           }}
//         />
//       </motion.button>
//     </MotionConfig>
//   );
// }

// const VARIANTS = {
//   top: {
//     open: {
//       rotate: ["0deg", "0deg", "45deg"],

//       top: ["35%", "50%", "50%"],
//     },

//     closed: {
//       rotate: ["45deg", "0deg", "0deg"],

//       top: ["50%", "50%", "35%"],
//     },
//   },

//   middle: {
//     open: {
//       rotate: ["0deg", "0deg", "-45deg"],
//     },

//     closed: {
//       rotate: ["-45deg", "0deg", "0deg"],
//     },
//   },

//   bottom: {
//     open: {
//       rotate: ["0deg", "0deg", "45deg"],

//       bottom: ["35%", "50%", "50%"],

//       left: "calc(50% + 10px)",
//     },

//     closed: {
//       rotate: ["45deg", "0deg", "0deg"],

//       bottom: ["50%", "50%", "35%"],

//       left: "calc(50% + 10px)",
//     },
//   },
// };
