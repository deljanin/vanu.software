"use client";
// import { useEffect, useRef } from "react";
import InfiniteAnimatedText from "../components/InfiniteAnimatedText";
import CTA from "../components/CTA";
import Link from "next/link";
export default function Hero() {
  const words1 = [
    "product websites",
    "business websites",
    "custom solutions",
    "digital experiences",
    "corporate websites",
    "enterprise tools",
  ];

  return (
    <div className="min-h-screen w-full">
      <div className="relative flex min-h-screen w-full flex-col justify-center px-5 md:px-32 xl:px-52">
        <h1 className="font-tilla text-7xl leading-[1.7] text-white">
          From ideas to reality,
          <span className="flex gap-5">
            we create <InfiniteAnimatedText texts={words1} />
          </span>
          that make an impact.
        </h1>
        <p className="mt-2 text-lg sm:text-xl md:mt-4 xl:w-1/3">
          From sleek product pages to custom business solutions, we create
          software that works—so you can focus on what matters. Need a site that
          stands out? Let’s create it.
        </p>
        <Link href="#contact" className="mt-2 md:mt-7">
          <CTA text="Contact us" type="button" />
        </Link>
      </div>
    </div>
  );
}
