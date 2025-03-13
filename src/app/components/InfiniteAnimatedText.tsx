import React, { useEffect, useRef, useState } from "react";

export default function InfiniteAnimatedText({ texts }: { texts: string[] }) {
  // currentIndex is the index of the current text
  const [currentIndex, setCurrentIndex] = useState(0);
  // phase controls the animation of the *active* pair
  // 'before' → animate in; 'visible' → fully shown; 'leaving' → animate out current & force next visible
  const [phase, setPhase] = useState<"before" | "visible" | "leaving">(
    "before",
  );

  // Fixed timing values
  const baseAnimationDuration = 500; // used for per-letter transitions in AnimatedText
  const visibleDuration = 2000; // how long the current text stays fully visible

  // Calculate total animation duration based on the current text’s length
  // (each character adds 50ms, plus the base duration)
  const currentText = texts[currentIndex];
  const totalAnimationDuration =
    currentText.length * 50 + baseAnimationDuration;

  // We'll use a ref to hold the current timeout ID
  const timeoutRef = useRef<number | null>(null);

  // Cycle through the phases:
  // - When in 'before': after totalAnimationDuration, transition to 'visible'
  // - When in 'visible': after visibleDuration, transition to 'leaving'
  // - When in 'leaving': after totalAnimationDuration, update currentIndex (by +1) and *set phase to 'visible'*
  //   so that the new current text (which was the next text) does not animate its entrance again.
  useEffect(() => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    const delay =
      phase === "visible" ? visibleDuration : totalAnimationDuration;

    timeoutRef.current = window.setTimeout(() => {
      if (phase === "before") {
        setPhase("visible");
      } else if (phase === "visible") {
        setPhase("leaving");
      } else if (phase === "leaving") {
        // When leaving, update currentIndex by 1.
        // The next text is already forced to 'visible' during leaving,
        // so when it becomes current, we set phase to 'visible' (avoiding a reanimation).
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setPhase("visible");
      }
    }, delay);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [phase, currentIndex, totalAnimationDuration, texts.length]);

  return (
    <div className="relative w-max">
      {texts.map((text, index) => {
        let animatedState: "before" | "visible" | "leaving" | "hidden" =
          "hidden";
        if (index === currentIndex) {
          // This is the current text; it uses the cycle phase.
          animatedState = phase;
        } else if (index === (currentIndex + 1) % texts.length) {
          // This is the next text.
          // When the current text is leaving, force the next text to be visible.
          animatedState = phase === "leaving" ? "visible" : "before";
        }
        return (
          <AnimatedText
            key={index}
            text={text}
            state={animatedState}
            animationDuration={baseAnimationDuration}
          />
        );
      })}
    </div>
  );
}
function AnimatedText({
  text,
  state,
  animationDuration,
}: {
  text: string;
  state: "before" | "visible" | "leaving" | "hidden";
  animationDuration: number;
}) {
  if (state === "hidden") return null;

  const letterDelay = animationDuration / text.length;
  return (
    <p
      className="absolute left-0 top-0 w-max"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
    >
      {text.split("").map((char, charIndex) => {
        const displayChar = char === " " ? "\u00A0" : char;
        const styles =
          state === "before"
            ? {
                transform: "translate(0, 115px)",
                opacity: 0,
                transition: `all ${animationDuration}ms ease ${
                  charIndex * letterDelay
                }ms`,
              }
            : state === "visible"
              ? {
                  transform: "translate(0, 0)",
                  opacity: 1,
                  transition: `all ${animationDuration}ms ease ${
                    charIndex * letterDelay
                  }ms`,
                }
              : {
                  // 'leaving'
                  transform: "translate(0, -115px)",
                  opacity: 0,
                  transition: `all ${animationDuration}ms ease ${
                    charIndex * letterDelay
                  }ms`,
                };

        return (
          <span key={charIndex} className="inline-block" style={styles}>
            {displayChar}
          </span>
        );
      })}
    </p>
  );
}
