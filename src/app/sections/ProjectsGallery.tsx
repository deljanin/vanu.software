'use client';
import React, { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import Image from 'next/image';

export default function ProjectsGallery() {
  return (
    <>
      <SmoothScrollImage imageUrl="/images/ProjectsGallery/FitBarHomePage.jpg" />
    </>
  );
}

function SmoothScrollImage(params: { imageUrl: string }) {
  const containerRef = useRef(null);
  const scrollImageRef = useRef(null);
  const lenisRef = useRef(null); // Use a ref to store the Lenis instance
  const [isHovered, setIsHovered] = useState(false); // Track hover state

  useEffect(() => {
    // Initialize Lenis and store it in the ref
    const lenis = new Lenis({
      autoRaf: true,
      wrapper: containerRef.current || undefined,
      content: scrollImageRef.current || undefined,
    });

    lenisRef.current = lenis; // Store Lenis instance in the ref

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const lenis = lenisRef.current; // Access the Lenis instance
    if (isHovered && lenis) {
      lenis.scrollTo(scrollImageRef.current.scrollHeight, { duration: 5 });
    } else if (!isHovered && lenis) {
      lenis.scrollTo(0, { duration: 2 });
    }
  }, [isHovered]); // Re-run effect on hover state change

  const handleMouseEnter = () => {
    setIsHovered(true); // Set to true on hover
  };

  const handleMouseLeave = () => {
    setIsHovered(false); // Set to false when hover ends
  };

  return (
    <div className="w-full h-full flex justify-center">
      <div
        ref={containerRef}
        className="h-[800px] w-[600px] overflow-hidden" // Hide scrollbar with overflow-hidden
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <Image
          ref={scrollImageRef}
          id="img"
          src={params.imageUrl}
          width={600}
          height={1865}
          alt="Scrollable Image"
          className="w-full"
        />
      </div>
    </div>
  );
}
