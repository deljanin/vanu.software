"use client";
import { useEffect, useRef, useState } from "react";
import DigitalAnimatedText from "./components/DigitalAnimatedText";
import Hero from "./sections/Hero";
import HowItWorks from "./sections/HowItWorks";
import Pricing from "./sections/Pricing";
import FAQ from "./sections/FAQ";
import HorizontalScroll from "./sections/HorizontalScroll";
import Contact from "./sections/Contact";
import Loader from "./components/Loader";
import { AnimatePresence } from "motion/react";

export default function Home() {
  const maskRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const mask = maskRef.current;
    if (mask) {
      // Set initial mask position to the center of the screen
      const initialX = window.innerWidth / 2;
      const initialY = window.innerHeight / 2;
      mask.style.maskImage = `radial-gradient(circle 150px at ${initialX}px ${initialY}px, rgba(255,255,255,1) 0%, rgba(255,255,255,0.25) 100%)`;
    }

    const updateMousePosition = (e: MouseEvent) => {
      if (mask) {
        mask.style.maskImage = `radial-gradient(circle 150px at ${e.clientX}px ${e.clientY}px, rgba(255,255,255,1) 0%, rgba(255,255,255,0.25) 100%)`;
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 2800);
  });

  return (
    <>
      <AnimatePresence mode="wait">{isLoading && <Loader />}</AnimatePresence>
      <div
        ref={maskRef}
        className={`pointer-events-none fixed left-0 top-0 -z-50 h-full w-full bg-[radial-gradient(#CC00CCA5_1px,transparent_1px)] [background-size:16px_16px]`}
        style={{
          maskImage:
            "radial-gradient(circle 150px at 50vw 50vh, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.25) 100%)",
        }}
      ></div>
      <div className="relative w-full">
        <Hero />
        <DigitalAnimatedText text="They say a picture is worth a thousand words… so what is a dynamic website worth? Think of it as your digital handshake—a first impression that lasts. We make sure it’s not just good, but unforgettable. Take a look below and see what we mean." />

        {/* Other Background Elements */}
        <div className="absolute left-0 top-0 -z-40 h-full w-full bg-[radial-gradient(circle_250px_at_100%_0,#CC00CC,transparent),radial-gradient(circle_250px_at_-15%_100vh,#CC00CC,transparent),radial-gradient(circle_150px_at_110%_90%,#CC00CC,transparent)] md:bg-[radial-gradient(circle_500px_at_100%_0,#CC00CC,transparent),radial-gradient(circle_500px_at_-15%_100vh,#CC00CC,transparent),radial-gradient(circle_300px_at_100%_80%,#CC00CC,transparent)]"></div>
      </div>
      <HorizontalScroll />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <Contact />
    </>
  );
}
// text-xl leading-relaxed sm:text-3xl sm:leading-relaxed md:text-left md:text-4xl md:leading-normal xl:text-5xl xl:leading-snug
