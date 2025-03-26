"use client";
// import { useEffect, useRef } from "react";
import InfiniteAnimatedText from "../components/InfiniteAnimatedText";
import CTA from "../components/CTA";
import Link from "next/link";
export default function Hero() {
  const words1 = [
    "portfolio websites",
    "business websites",
    "custom solutions",
    "digital experiences",
    "corporate websites",
    "enterprise tools",
  ];

  return (
    <section id="home" className="min-h-screen w-full overflow-x-hidden">
      <div className="relative flex min-h-screen w-full flex-col justify-center px-5 md:px-24 xl:px-52">
        <h1 className="font-tilla text-xl leading-relaxed text-white sm:text-3xl sm:leading-relaxed md:text-4xl md:leading-normal 2xl:text-7xl 2xl:leading-[1.7]">
          From ideas to reality,
          <span className="flex flex-col pb-10 sm:pb-14 md:pb-14 xl:pb-20 2xl:flex-row 2xl:gap-5 2xl:pb-0">
            we create <InfiniteAnimatedText texts={words1} />
          </span>
          that make an impact.
        </h1>
        <p className="mt-4 sm:text-xl xl:w-1/3">
          From sleek product pages to custom business solutions, we create
          software that works—so you can focus on what matters. Need a site that
          stands out? Let’s create it.
        </p>
        <Link href="#contact" className="mt-4 md:mt-7">
          <CTA text="Contact us" type="button" />
        </Link>
      </div>
    </section>
  );
}
