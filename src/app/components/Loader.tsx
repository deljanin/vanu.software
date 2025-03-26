"use client";
import { motion } from "motion/react";
import { useEffect } from "react";
export default function Loader() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1900);
  }, []);
  return (
    <motion.div className="fixed top-0 z-[50] flex h-screen w-full items-center justify-center bg-[#151515]">
      Hello World!
    </motion.div>
  );
}
