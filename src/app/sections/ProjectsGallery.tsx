"use client";

import DigitalAnimatedText from "../components/DigitalAnimatedText";
import HorizontalScroll from "./HorizontalScroll";

import Hero from "./Hero";

export default function ProjectsGallery() {
  return (
    <>
      <Hero />

      <HorizontalScroll />
      <DigitalAnimatedText text="This is a sample animated text in Next.js that is absolutely fucking awesome!" />
    </>
  );
}

// function SmoothScrollImage(params: { imageUrl: string }) {
//   const containerRef = useRef(null);
//   const scrollImageRef = useRef(null);
//   const lenisRef = useRef(null); // Use a ref to store the Lenis instance
//   const [isHovered, setIsHovered] = useState(false); // Track hover state

//   useEffect(() => {
//     // Initialize Lenis and store it in the ref
//     const lenis = new Lenis({
//       autoRaf: true,
//       wrapper: containerRef.current || undefined,
//       content: scrollImageRef.current || undefined,
//     });

//     lenisRef.current = lenis; // Store Lenis instance in the ref

//     return () => {
//       lenis.destroy();
//     };
//   }, []);

//   useEffect(() => {
//     const lenis = lenisRef.current; // Access the Lenis instance
//     setTimeout(() => {
//       if (isHovered && lenis) {
//         lenis.scrollTo(scrollImageRef.current.scrollHeight, {
//           duration: 4,
//           easing: easeInOutSine,
//         });
//       } else if (!isHovered && lenis) {
//         lenis.scrollTo(0, { duration: 4, easing: easeInOutSine });
//       }
//     }, 300);
//   }, [isHovered]); // Re-run effect on hover state change

//   function easeInOutSine(x: number): number {
//     return -(Math.cos(Math.PI * x) - 1) / 2;
//   }

//   const handleMouseEnter = () => {
//     setIsHovered(true); // Set to true on hover
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false); // Set to false when hover ends
//   };

//   return (
//     <div className="w-full h-full flex justify-center">
//       <div
//         ref={containerRef}
//         className="h-[800px] w-[600px] overflow-hidden" // Hide scrollbar with overflow-hidden
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}>
//         <Image
//           ref={scrollImageRef}
//           id="img"
//           src={params.imageUrl}
//           width={600}
//           height={1865}
//           quality={100}
//           alt="Scrollable Image"
//           className="w-full"
//         />
//       </div>
//     </div>
//   );
// }

// GRADIENT BLUR

// <div
//         className="w-full h-screen absolute pointer-events-none"
//         style={{
//           mask: 'linear-gradient(to top, black, black,  transparent)',
//           backdropFilter: 'blur(8px)',
//         }}></div>
