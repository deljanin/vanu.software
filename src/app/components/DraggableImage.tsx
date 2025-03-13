import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
export default function DraggableImage({
  imageUrl,
  width,
  height,
  className,
}: {
  imageUrl: string;
  width: number;
  height: number;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startY = useRef(0);
  const scrollY = useRef(0);

  const handleMouseDown = (event: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    startY.current =
      "touches" in event ? event.touches[0].clientY : event.clientY;
    scrollY.current = containerRef.current?.scrollTop || 0;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
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
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className={`cursor-grab select-none overflow-hidden overscroll-contain active:cursor-grabbing ${className}`}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
    >
      <Image
        src={imageUrl}
        width={width}
        height={height}
        quality={100}
        alt="Draggable Image"
        className="pointer-events-none w-full select-none"
      />
    </div>
  );
}
