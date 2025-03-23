"use client";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
  // useSpring,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import DraggableImage from "../components/DraggableImage";
import CTA from "../components/CTA";
import { useLenis } from "lenis/react";
import Snap from "lenis/snap";
import YumeImage from "../../../public/images/ProjectsGallery/YumeVisuals.jpg";
import ApexSMMA from "../../../public/images/ProjectsGallery/ApexSMMA.jpg";
import TopAutoGlass from "../../../public/images/ProjectsGallery/TopAutoGlass.jpg";
import EzPatch from "../../../public/images/ProjectsGallery/EzPatch.jpg";
import ArtPro from "../../../public/images/ProjectsGallery/ArtPro.jpg";
import FitBar from "../../../public/images/ProjectsGallery/FitBar.jpg";

const cards = [
  {
    src: YumeImage,
    width: 1920,
    height: 10850,
    url: "https://yume-vanu.vercel.app",
    alt: "yume-visuals-website",
    title: "Yume Visuals",
    description: (
      <>
        A bilingual portfolio website for a creative visual agency, featuring
        videography, photography, and drone filming services with smooth UI
        interactions.
      </>
    ),
    ctaText: "Visit Yume",
  },
  {
    src: ApexSMMA,
    width: 1920,
    height: 8640,
    url: "https://apex-smma.com",
    alt: "apex-smma-website",
    title: "Apex SMMA",
    description:
      "A bilingual website for a social media marketing agency, designed with a sleek and modern aesthetic to effectively present services and engage potential clients.",
    ctaText: "Visit Apex SMMA",
  },
  {
    src: TopAutoGlass,
    width: 1493,
    height: 7221,
    url: "https://topautoglass.vercel.app",
    alt: "top-auto-glass-website",
    title: "Top Auto Glass Houston",
    description:
      "An easy-to-use multi-page website for a company that specializes in auto glass repair and replacement, window tinting, vehicle wraps, paint protection film, and ceramic coating. Designed to help customers quickly find services and request a quote.",
    ctaText: "Visit Top Auto Glass",
  },
  {
    src: EzPatch,
    width: 1920,
    height: 5000,
    url: "",
    alt: "ez-patch-website-design",
    title: "Ez Patch",
    description:
      "A professional website design for a drywall repair company. Currently integrating lead management and CRM automation for streamlined client bookings.",
    ctaText: "See Design",
  },
  {
    src: ArtPro,
    width: 1440,
    height: 4329,
    url: "",
    alt: "art-pro-website-design",
    title: "ArtPro",
    description:
      "A refined website design for an interior design agency, showcasing their work with a clean and elegant layout. Built to highlight their services and inspire potential clients.",
    ctaText: "See Design",
  },
  {
    src: FitBar,
    width: 1440,
    height: 4476,
    url: "",
    alt: "fit-bar-website-design",
    title: "FitBar",
    description:
      "A multi-page website for a healthy food restaurant featuring a digital menu, meal packages for daily or weekly scheduling, and a dedicated menu page for all meals and beverages. It also includes a contact page with restaurant locations, hours, and an easy way for customers to order online through partners like Wolt.",
    ctaText: "See Design",
  },
];
export default function HorizontalScroll() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: container });
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-500vw"]);
  // const scaleX = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001,
  // });
  const [isContainerActive, setIsContainerActive] = useState(false);
  const [isSnappy] = useState(false);
  const lenis = useLenis();

  // Track when we're scrolling within the container
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    setIsContainerActive(progress > 0 && progress < 1);
  });

  useEffect(() => {
    if (lenis && container.current && isSnappy) {
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
  }, [lenis, isContainerActive, isSnappy]);

  return (
    <section ref={container} className="relative h-[600vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex">
          {cards.map((card, i) => (
            <div
              key={i}
              className="flex h-screen w-screen flex-col items-center px-5 md:flex-row-reverse md:px-32 xl:px-64 2xl:px-80"
            >
              <DraggableImage
                imageUrl={card.src}
                width={card.width}
                height={card.height}
                alt={card.alt}
              />
              <div className="flex w-2/3 flex-col items-center md:items-start">
                <h3 className="font-tilla my-2 text-5xl leading-snug">
                  {card.title}
                </h3>
                <p className="my-2 md:my-3 md:w-2/3 md:text-lg">
                  {card.description}
                </p>

                <a
                  href={card.url}
                  target="_blank"
                  className="my-2 inline-block md:my-6"
                >
                  <CTA text={card.ctaText} type="button" />
                </a>
              </div>
            </div>
          ))}
        </motion.div>
        {/* <motion.div
          style={{ scaleX, originX: 0 }}
          className="absolute bottom-10 left-0 h-1 w-full -translate-x-[100%] bg-[#CC00CC]"
        ></motion.div> */}
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
