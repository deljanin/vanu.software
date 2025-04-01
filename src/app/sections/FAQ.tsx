"use client";
import { motion } from "motion/react";
import React, { useState, useEffect, useRef } from "react";

const faq = [
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline depends on the complexity of the project. A basic website can take 2-4 weeks, while more complex projects may take 6-8 weeks or longer. We provide a timeline estimate after the initial discussion.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "Pricing varies based on the project scope, features, and design complexity. After our initial discussion, we provide a detailed quote tailored to your needs.",
  },
  {
    question: "Do I need to provide content and images for the website?",
    answer:
      "If you have existing content and images, we can use them. If needed, we can assist with content creation at an additional cost. Otherwise, we will use high-quality stock images.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Yes! All websites we build are fully responsive, ensuring a seamless experience across all devices, including smartphones and tablets.",
  },
  {
    question: "Can I update the website myself after it's launched?",
    answer:
      "Yes! If your website includes a CMS (Content Management System), we provide training so you can update content on your own. If you prefer, we also offer ongoing maintenance services.",
  },
  {
    question: "What if I need changes after the website is launched?",
    answer:
      "We provide a support period after launch for minor changes and fixes. If you need additional features or updates, we can discuss ongoing maintenance or one-time updates.",
  },
  {
    question: "Do you offer SEO services?",
    answer:
      "We implement basic on-page SEO like proper tags, speed optimization, and mobile responsiveness. For advanced SEO and ongoing optimization, we can recommend specialists.",
  },
  {
    question: "How does the payment process work?",
    answer:
      "We require an initial deposit to start the project. The second payment is made before the final deployment. Payment terms are outlined in our proposal.",
  },
  {
    question: "Will my website be secure?",
    answer:
      "Yes, we follow best security practices, including SSL certificates, secure hosting, and regular updates, to protect your website from threats.",
  },
  {
    question: "Do you provide hosting and domain services?",
    answer:
      "We can guide you in choosing the best hosting provider and domain name for your needs. We can handle setup and configuration for you.",
  },
];

const throttle = <T extends (...args: never[]) => void>(
  func: T,
  limit: number,
): ((...args: Parameters<T>) => void) => {
  let inThrottle = false;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

export default function FAQ() {
  const [index, setIndex] = useState(-1);
  return (
    <section className="flex w-full items-center justify-center px-5 py-20 md:px-32">
      <div className="relative w-full rounded-3xl py-20">
        <Background />
        <div className="flex w-full flex-col items-center justify-center">
          <h2 className="mb-12 font-tilla text-xl leading-relaxed sm:text-3xl sm:leading-relaxed md:text-left md:text-4xl md:leading-normal xl:text-5xl xl:leading-snug 2xl:text-7xl">
            FAQ
          </h2>
          <div className="flex flex-col justify-center gap-7 px-5 xl:w-1/2">
            {faq.map((pair, i) => (
              <div
                className="relative select-none text-lg md:text-xl"
                key={i}
                onMouseDown={() => {
                  if (index === i) {
                    setIndex(-1);
                  } else {
                    setIndex(i);
                  }
                }}
              >
                <motion.div
                  viewport={{ amount: "all", once: true }}
                  whileInView={{ width: "100%" }}
                  className={`absolute bottom-0 h-[2px] transition-all duration-500 ${index === i ? "bg-gradient-to-r from-[#CC00CC] to-[#BDDFFF]" : "bg-[#ffffff88]"} `}
                ></motion.div>
                <div className="w-full cursor-pointer">
                  <div className="flex items-center justify-between gap-3 pb-2">
                    <span>{pair.question}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={20}
                      viewBox="0 0 24 49"
                      fill="#fff"
                      className={`transition-all ${index === i ? "rotate-90" : "rotate-180"} `}
                    >
                      <path d="M.63 3.804l18.444 19.13c.404.416.631.98.631 1.567s-.227 1.15-.631 1.568L.634 45.199a2.27 2.27 0 00-.63 1.574c0 .588.227 1.154.63 1.574.198.206.434.37.695.483a2.083 2.083 0 002.342-.483L22.11 29.22a6.81 6.81 0 001.89-4.72 6.81 6.81 0 00-1.89-4.72L3.67.656A2.119 2.119 0 002.977.17 2.083 2.083 0 00.63.656 2.27 2.27 0 000 2.23c0 .588.227 1.154.63 1.574z" />
                    </svg>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${index === i ? "mt-2 max-h-[350px] pb-2 md:max-h-[100px]" : "max-h-0"} `}
                  >
                    <div className="">{pair.answer}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Background() {
  const circleSize = "80%"; // Assuming --circle-size is 80%
  const blending = "hard-light"; // Assuming --blending is hard-light

  const interBubbleRef = useRef<HTMLDivElement>(null);
  const targetPosition = useRef({ x: 0, y: 0 });
  const currentPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const interBubble = interBubbleRef.current;

    const handleMouseMove = (event: MouseEvent) => {
      // Update target position directly
      targetPosition.current.x = event.clientX;
      targetPosition.current.y = event.clientY;
    };

    // Throttle the mousemove event to reduce updates
    const throttledMouseMove = throttle(handleMouseMove, 16); // ~60 FPS
    window.addEventListener("mousemove", throttledMouseMove);

    const move = () => {
      if (interBubble) {
        // Smoothly interpolate the position
        currentPosition.current.x +=
          (targetPosition.current.x - currentPosition.current.x) / 20;
        currentPosition.current.y +=
          (targetPosition.current.y - currentPosition.current.y) / 20;

        // Directly update the transform property for better performance
        interBubble.style.transform = `translate(${currentPosition.current.x}px, ${currentPosition.current.y}px)`;
      }

      requestAnimationFrame(move);
    };

    move();

    return () => {
      window.removeEventListener("mousemove", throttledMouseMove);
    };
  }, []);
  return (
    <>
      <style>
        {`
          @keyframes moveInCircle {
            0% { transform: rotate(0deg); }
            50% { transform: rotate(180deg); }
            100% { transform: rotate(360deg); }
          }

          @keyframes moveVertical {
            0% { transform: translateY(-50%); }
            50% { transform: translateY(50%); }
            100% { transform: translateY(-50%); }
          }

          @keyframes moveHorizontal {
          0% {transform: translateX(-50%) translateY(-10%);}
          50% {transform: translateX(50%) translateY(10%);}
          100% {transform: translateX(-50%) translateY(-10%);}
          }

          `}
      </style>

      <div className="absolute top-0 -z-10 h-full w-full overflow-hidden rounded-3xl bg-[linear-gradient(40deg,#CC00CC,rgb(0,17,82))] opacity-80 shadow-xl 2xl:bg-[linear-gradient(40deg,rgb(108,0,162),rgb(0,17,82))]">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div
          className="absolute left-0 top-0 hidden h-full w-full 2xl:block"
          style={{ filter: "url(#goo) blur(40px)" }}
        >
          <div
            style={{
              position: "absolute",
              background:
                "radial-gradient(circle at center, rgba(18, 113, 255, 0.7) 0, rgba(0, 0, 0, 0) 50%)",
              mixBlendMode: blending,
              width: circleSize,
              height: circleSize,
              top: "calc(50% - 80% / 2)",
              left: "calc(50% - 80% / 2)",
              transformOrigin: "center center",
              animation: "moveVertical 30s ease infinite",
              opacity: 1,
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              background:
                "radial-gradient(circle at center, rgba(221, 74, 255, 0.7) 0, rgba(0, 0, 0, 0) 50%)",
              mixBlendMode: blending,
              width: circleSize,
              height: circleSize,
              top: "calc(50% - 80% / 2)",
              left: "calc(50% - 80% / 2)",
              transformOrigin: "calc(50% - 400px)",
              animation: "moveInCircle 20s reverse infinite",
              opacity: 1,
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              background:
                "radial-gradient(circle at center, rgba(100, 220, 255, 0.6) 0, rgba(0, 0, 0, 0) 50%)",
              mixBlendMode: blending,
              width: circleSize,
              height: circleSize,
              top: "calc(50% - 80% / 2 + 200px)",
              left: "calc(50% - 80% / 2 - 500px)",
              transformOrigin: "calc(50% + 400px)",
              animation: "moveInCircle 40s linear infinite",
              opacity: 1,
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              background:
                "radial-gradient(circle at center, rgba(200, 50, 50, 0.9) 0, rgba(0, 0, 0, 0) 50%)",
              mixBlendMode: blending,
              width: "160%",
              height: "160%",
              top: "calc(50% - 80% / 2)",
              left: "calc(50% - 80% / 2)",
              transformOrigin: "calc(50% - 200px)",
              animation: "moveHorizontal 40s ease infinite",
              opacity: 0.7,
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              background:
                "radial-gradient(circle at center, rgba(180, 180, 50, 0.8) 0, rgba(0, 0, 0, 0) 50%)",
              mixBlendMode: blending,
              width: circleSize,
              height: circleSize,
              top: "calc(50% - 80%)",
              left: "calc(50% - 80%)",
              transformOrigin: "calc(50% - 800px) calc(50% + 200px)",
              animation: "moveInCircle 20s ease infinite",
              opacity: 1,
            }}
          ></div>
          <div
            ref={interBubbleRef}
            style={{
              position: "absolute",
              background:
                "radial-gradient(circle at center, #CC00CC, rgba(0, 0, 0, 0) 50%)",
              mixBlendMode: "hard-light",
              width: "50%",
              height: "50%",
              top: "-27%",
              left: "-30%",
              opacity: 0.7,
              willChange: "transform", // Optimize for transform animations
            }}
          ></div>
        </div>
      </div>
    </>
  );
}
