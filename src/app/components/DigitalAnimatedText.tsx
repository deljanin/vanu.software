import * as motion from "motion/react-client";
export default function DigitalAnimatedText({ text }: { text: string }) {
  const animations = [
    { delay: 1.0 },
    { delay: 0.4 },
    { delay: 1.2 },
    { delay: 0.6 },
    { delay: 0.3 },
    { delay: 0.7 },
    { delay: 0.9 },
    { delay: 0.5 },
    { delay: 1.1 },
    { delay: 0.8 },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-mono text-white">
      <p className="font-median w-1/2 break-words text-center text-5xl leading-snug">
        {text.split(" ").map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block whitespace-nowrap px-3">
            {word.split("").map((char, charIndex) => {
              const i = wordIndex * 100 + charIndex; // Unique index for animation
              const animation = animations[i % animations.length];
              return (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    transition: {
                      duration: 0.5,
                      delay: animation.delay,
                    },
                  }}
                  viewport={{ amount: 1 }}
                  style={
                    {
                      // opacity: visible ? 1 : 0,
                      // filter: visible ? 'blur(0px)' : 'blur(2px)',
                      // transform: visible
                      //   ? 'translate(0, 0) '
                      //   : 'translate(2px, 5px) ',
                      // transition: `all 0.5s ease ${animation.delay}`,
                    }
                  }
                >
                  {char}
                </motion.span>
              );
            })}
          </span>
        ))}
      </p>
    </div>
  );
}

// import { useEffect, useState } from 'react';

// export default function DigitalAnimatedText({ text }: { text: string }) {
//   const [visible, setVisible] = useState(false);
//   const animations = [
//     { delay: '1.0s' },
//     { delay: '0.4s' },
//     { delay: '1.2s' },
//     { delay: '0.6s' },
//     { delay: '0.3s' },
//     { delay: '0.7s' },
//     { delay: '0.9s' },
//     { delay: '0.5s' },
//     { delay: '1.1s' },
//     { delay: '0.8s' },
//   ];

//   useEffect(() => {
//     setTimeout(() => setVisible(true), 200);
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen text-white font-mono">
//       <p className="leading-snug text-center text-5xl w-1/2 break-words font-medium">
//         {text.split(' ').map((word, wordIndex) => (
//           <span key={wordIndex} className="inline-block whitespace-nowrap px-3">
//             {word.split('').map((char, charIndex) => {
//               const i = wordIndex * 100 + charIndex; // Unique index for animation
//               const animation = animations[i % animations.length];
//               return (
//                 <span
//                   key={i}
//                   className="inline-block"
//                   style={{
//                     opacity: visible ? 1 : 0,
//                     // transform: visible
//                     //   ? 'translate(0, 0) '
//                     //   : 'translate(2px, 5px) ',
//                     transition: `all 0.5s ease ${animation.delay}`,
//                   }}>
//                   {char}
//                 </span>
//               );
//             })}
//           </span>
//         ))}
//       </p>
//     </div>
//   );
// }
