"use client";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import DraggableImage from "../components/DraggableImage";
import CTA from "../components/CTA";
import { useLenis } from "lenis/react";
import Snap from "lenis/snap";

const cards = [
  {
    src: "/images/ProjectsGallery/FitBarHomePage.jpg",
    width: 1920,
    height: 5000,
    url: "https://yume-vanu.vercel.app",
    alt: "yume-visuals-website",
    title: "Yume Visuals",
    description: <>High-end website</>,
  },
  {
    src: "/images/ProjectsGallery/ApexSMMA.jpg",
    width: 1920,
    height: 8640,
    url: "",
    alt: "apex-smma-website",
    title: "Apex SMMA",
    description: "description",
  },
  {
    src: "/images/ProjectsGallery/TopAutoGlass.jpg",
    width: 1493,
    height: 7221,
    url: "https://topautoglass.vercel.app",
    alt: "top-auto-glass-website",
    title: "Top Auto Glass Houston",
    description: "description",
  },
  {
    src: "/images/ProjectsGallery/EzPatch.jpg",
    width: 1920,
    height: 5000,
    url: "",
    alt: "ez-patch-website-design",
    title: "Ez Patch",
    description: "",
  },
  {
    src: "/images/ProjectsGallery/ArtPro.jpg",
    width: 1440,
    height: 4329,
    url: "",
    alt: "art-pro-website-design",
    title: "Art Pro",
    description: "",
  },
  {
    src: "/images/ProjectsGallery/FitBarHomePage.jpg",
    width: 1440,
    height: 4476,
    url: "",
    alt: "fit-bar-website-design",
    title: "FitBar",
    description: "",
  },
];
export default function HorizontalScroll() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: container });
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-500vw"]);
  const [isContainerActive, setIsContainerActive] = useState(false);
  const lenis = useLenis();

  // Track when we're scrolling within the container
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    setIsContainerActive(progress > 0 && progress < 1);
  });

  useEffect(() => {
    if (lenis && container.current) {
      const containerOffset = container.current.offsetTop;
      // Calculate snap positions based on container height (600vh)
      const snapPositionsPx = [0, 100, 200, 300, 400, 500].map(
        (vh) => containerOffset + (vh * window.innerHeight) / 100,
      );

      const snap = new Snap(lenis, {});

      // Add/remove snaps based on container activity
      if (isContainerActive) {
        snapPositionsPx.forEach((position) => snap.add(position));
      } else {
        snap.destroy();
      }

      return () => snap.destroy();
    }
  }, [lenis, isContainerActive]);

  return (
    <section ref={container} className="relative h-[600vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex">
          {cards.map((card, i) => (
            <div
              key={i}
              className="flex h-screen w-screen flex-col items-center justify-center"
            >
              <DraggableImage
                imageUrl={card.src}
                width={card.width}
                height={card.height}
                className="max-h-[700px] max-w-[500px]"
              />
              <h3 className="my-2 font-median text-2xl">{card.title}</h3>
              <p className="my-2">{card.description}</p>

              <a href={card.url} target="_blank" className="my-2 inline-block">
                <CTA text="View project" type="button" />
              </a>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// const Images = [
//     { src: '/images/1.jpg' },
//     { src: '/images/2.jpg' },
//     { src: '/images/3.jpg' },
//     { src: '/images/4.jpg' },
//     { src: '/images/5.jpg' },
//     { src: '/images/6.png' },
//   ];
// <div className="flex gap-4">
//           <style>
//             {`
//                   .custom-list {
//                     transform-style: preserve-3d;
//                     transform: perspective(1000px);
//                   }
//                   .custom-list .item {
//                     filter: brightness(0.2);
//                   }
//                   .custom-list .item:hover {
//                     transform: translateZ(120px);
//                     filter: brightness(1);
//                   }
//                   .custom-list .item:hover + *{
//                     filter: brightness(0.6);
//                     transform: translateZ(70px) rotateY(20deg);
//                   }
//                     .custom-list .item:hover + * + *{
//                     filter: brightness(0.4);
//                     transform: translateZ(35px) rotateY(10deg);
//                   }
//                     .custom-list .item:hover + * + * + *{
//                     filter: brightness(0.2);
//                     transform: translateZ(15px) rotateY(5deg);
//                   }
//                   .custom-list .item:has(+ *:hover){
//                     filter: brightness(0.6);
//                     transform: translateZ(70px) rotateY(-20deg);
//                   }
//                     .custom-list .item:has(+ * + *:hover){
//                     filter: brightness(0.4);
//                     transform: translateZ(35px) rotateY(-10deg);
//                   }
//                     .custom-list .item:has(+ * + * + *:hover){
//                     filter: brightness(0.2);
//                     transform: translateZ(15px) rotateY(-5deg);
//                   }
//                 `}
//           </style>
//           <div className="min-h-screen flex items-center justify-center pl-60">
//             <div className="flex items-center justify-evenly gap-10 custom-list">
//               {Images.map((image) => (
//                 <div
//                   key={image.src}
//                   className="item relative h-[600px] w-[400px] transition-all duration-500">
//                   <Image
//                     src={image.src}
//                     alt="image"
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
