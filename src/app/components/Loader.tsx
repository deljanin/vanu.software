"use client";
import { motion, useAnimate } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const words = [
  "Hello",
  "Здраво",
  "Guten tag",
  "Bonjour",
  "やあ",
  "Ciao",
  "안녕",
  "Привет",
  "Olà",
  "你好",
];

export default function Loader() {
  const [index, setIndex] = useState(0);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    // This "li" selector will only select children
    // of the element that receives `scope`.
    animate(
      "#underline",
      {
        scaleX: 1,
      },
      {
        duration: 2,
      },
    );
    animate(
      "#underline",
      {
        opacity: 0,
      },
      {
        duration: 0.2,
        delay: 2,
      },
    );
  });

  useEffect(() => {
    if (index === words.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === 0 ? 1000 : 150,
    );
  }, [index]);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 2500);
  }, []);

  return (
    <>
      <motion.div
        ref={scope}
        initial={{
          clipPath: "circle(100%)",
        }}
        exit={{
          clipPath: "circle(0)",
          transition: { duration: 0.5, ease: "easeOut" },
        }}
        className="fixed inset-0 z-50 h-screen w-full bg-[#0d0d0d]"
      >
        <div className="relative z-20 flex h-full w-full flex-col items-center justify-center gap-6 bg-[radial-gradient(transparent_1px,#0d0d0d_1px)] backdrop-blur-2xl [background-size:4px_4px]">
          {/* <motion.div
            initial={{ scaleX: 0, height: "1px" }}
            // , transformOrigin: 0
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            // exit={{ height: "100vh" }}
            className="absolute top-0 w-full bg-gradient-to-r from-[#BDDFFF] via-[#CC00CC] to-[#BDDFFF]"
          /> */}
          {/* <motion.div
          // animate={{
          //   scale: [1, 1.5, 1], // Rotating through different speeds
          // }}
          // transition={{
          //   duration: 3, // Total animation duration
          //   repeat: Infinity, // Infinite loop
          //   ease: ["easeInOut", "linear", "easeInOut"], // Smooth speed changes
          //   times: [0, 0.3, 0.6], // Controls timing of speed changes
          // }}
          className="relative"
        >
          <Image src="/static/logo.svg" alt="logo" width={64} height={64} />
          <Image
            src="/static/logo.svg"
            alt="logo"
            width={64}
            height={64}
            className="absolute inset-0 blur-[15px]"
          />
        </motion.div> */}
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: { duration: 0.3, delay: 0.2, ease: "easeInOut" },
            }}
            exit={{
              scale: 0,
              transform: "rotate(720deg)",
              transition: { duration: 0.6, ease: "easeInOut" },
            }}
            className="relative pt-5 text-4xl"
          >
            {/* {words.map((word) => (
            <span className="pr-5">{word}</span>
          ))} */}

            {words[index]}
          </motion.p>
          <motion.div
            id="underline"
            initial={{ scaleX: 0, height: "2px", opacity: 0.4 }}
            exit={{ opacity: 0 }}
            // exit={{ height: "100vh" }}
            className="w-40 bg-white"
          />
          {/* <motion.span
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: { duration: 1, delay: 0.3 },
            }}
            className="relative text-lg"
          >
            Loading experience
            <motion.div
              initial={{ scaleX: 0, height: "2px", transformOrigin: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2.8, ease: "easeInOut" }}
              // exit={{ height: "100vh" }}
              className="absolute bottom-0 w-full bg-white opacity-40"
            />
          </motion.span> */}
        </div>
        <div className="absolute left-1/2 top-1/2 z-10 size-3/4 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            initial={{ opacity: 0.3 }}
            exit={{
              opacity: 1,
              transition: { ease: "easeIn" },
            }}
          >
            <Image
              src="/static/logo.svg"
              alt="logo"
              fill
              className="absolute h-full w-full"
            />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
