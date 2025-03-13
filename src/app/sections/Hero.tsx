"use client";
// import { useEffect, useRef } from "react";
// import InfiniteAnimatedText from "../components/InfiniteAnimatedText";
import CTA from "../components/CTA";
export default function Hero() {
  // const textArr = [
  //   "DIGITAL EXPRESSION",
  //   "WEBSITE",
  //   "ONLINE IMAGE",
  //   "COOL TEXT",
  // ];
  // const heroRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const updateMousePosition = (ev: MouseEvent) => {
  //     if (!heroRef.current) return;
  //     const { clientX, clientY } = ev;
  //     heroRef.current.style.setProperty("--x", `${clientX}px`);
  //     heroRef.current.style.setProperty("--y", `${clientY}px`);
  //   };

  //   window.addEventListener("mousemove", updateMousePosition);

  //   return () => {
  //     window.removeEventListener("mousemove", updateMousePosition);
  //   };
  // }, []);
  return (
    // <div
    //   ref={heroRef}
    //   style={{
    //     backgroundImage: `radial-gradient(
    //     circle 1000px at var(--x) var(--y),
    //     #CC00CC30 0%,
    //     transparent 100%
    //   )`,
    //   }}
    //   className="relative min-h-screen w-full"
    // >
    //   <div className="absolute h-full w-full backdrop-blur-3xl"></div>
    // </div>

    <div className="relative min-h-[200vh] w-full">
      <div className="sticky top-0 flex min-h-screen w-full flex-col items-center justify-center font-median text-5xl font-medium text-white">
        <CTA text="View project" type="button" />
        {/* <span className="flex gap-5">
          Some cool text than this cool text:
          <InfiniteAnimatedText texts={textArr} />
        </span> */}
      </div>

      <div
        className="min-h-screen w-full backdrop-blur-2xl"
        // style={{
        //   mask: "linear-gradient(to top, black, black,  transparent)",
        //   backdropFilter: "blur(25px)",
        // }}
      ></div>
    </div>
  );
}
