"use client";
import React, { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { useInView } from "motion/react";
export default function DraggableImage({
  imageUrl,
  alt,
  width,
  height,
}: {
  imageUrl: StaticImageData;
  alt: string;
  width: number;
  height: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startY = useRef(0);
  const scrollY = useRef(0);
  const isInView = useInView(containerRef, { amount: "all" });

  const scrollBarStyles: React.CSSProperties = {
    scrollbarWidth: "thin", // Firefox
    scrollbarColor: "#CC00CC #151515", // Firefox
    WebkitOverflowScrolling: "touch",
  };

  const handleMouseDown = (event: React.MouseEvent | React.TouchEvent) => {
    if (!isInView) return;
    setIsDragging(true);
    startY.current =
      "touches" in event ? event.touches[0].clientY : event.clientY;
    scrollY.current = containerRef.current?.scrollTop || 0;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (!isInView) return;
    const handleMouseMove = (event: MouseEvent | TouchEvent) => {
      if (!isDragging || !containerRef.current) return;

      const currentY =
        "touches" in event ? event.touches[0].clientY : event.clientY;
      const deltaY = startY.current - currentY;

      containerRef.current.scrollTop = scrollY.current + deltaY;
    };
    if (!isDragging) return;

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleMouseMove, { passive: false });
    window.addEventListener("touchend", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleMouseMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, isInView]);

  return (
    <div
      ref={containerRef}
      style={{ ...scrollBarStyles }}
      className={`h-[50vh] max-h-[700px] max-w-[500px] cursor-grab select-none overflow-x-hidden rounded-md active:cursor-grabbing md:h-auto ${isInView ? "overflow-y-scroll" : "cursor-not-allowed overflow-y-hidden md:overflow-y-scroll"}`}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
    >
      <Image
        src={imageUrl}
        width={width}
        height={height}
        quality={100}
        alt={alt}
        priority
        placeholder="blur"
        className="pointer-events-none w-full select-none"
      />
    </div>
  );
}
