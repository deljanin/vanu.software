"use client";
import { useEffect, useRef } from "react";
import DigitalAnimatedText from "./components/DigitalAnimatedText";
import Hero from "./sections/Hero";
import HowItWorks from "./sections/HowItWorks";
import Pricing from "./sections/Pricing";
import FAQ from "./sections/FAQ";
import HorizontalScroll from "./sections/HorizontalScroll";

export default function Home() {
  const maskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (maskRef.current) {
        maskRef.current.style.maskImage = `radial-gradient(circle 150px at ${e.clientX}px ${e.clientY}px, rgba(255,255,255,1) 0%, rgba(255,255,255,0.25) 100%)`;
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <>
      <div
        ref={maskRef}
        className="pointer-events-none fixed left-0 top-0 -z-50 h-full w-full bg-[radial-gradient(#CC00CCA5_1px,transparent_1px)] [background-size:16px_16px]"
      ></div>
      <div className="relative w-full">
        <Hero />
        <DigitalAnimatedText text="They say a picture is worth a thousand words… so what is a dynamic website worth? Think of it as your digital handshake—a first impression that lasts. We make sure it’s not just good, but unforgettable. Take a look below and see what we mean." />
        {/* Optimized background */}

        {/* Other Background Elements */}
        <div className="absolute left-0 top-0 -z-40 h-full w-full bg-[radial-gradient(circle_500px_at_100%_0,#CC00CC,transparent),radial-gradient(circle_500px_at_-15%_100vh,#CC00CC,transparent),radial-gradient(circle_300px_at_100%_80%,#CC00CC,transparent)]"></div>
      </div>
      <HorizontalScroll />
      <HowItWorks />
      <Pricing />
      <FAQ />
    </>
  );
}

// GRADIENT BLUR

// <div
//         className="w-full h-screen absolute pointer-events-none"
//         style={{
//           mask: 'linear-gradient(to top, black, black,  transparent)',
//           backdropFilter: 'blur(8px)',
//         }}></div>
