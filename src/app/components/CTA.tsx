import { motion, useTime, useTransform } from "motion/react";
/* eslint-disable  @typescript-eslint/no-explicit-any */ interface CTAProps {
  text: string;
  type: "button" | "submit" | "reset";
  className?: string;
  [key: string]: any;
}

function CTA({ text, type, className, ...rest }: CTAProps) {
  const time = useTime();

  const rotateTransform = useTransform(time, [0, 2500], [0, 360], {
    clamp: false,
  });

  const rotatingBg = useTransform(rotateTransform, (rotation) => {
    return `conic-gradient(from ${rotation}deg, #BDDFFF,#CC00CC,#BDDFFF,#CC00CC,#BDDFFF)`;
  });
  return (
    <div
      className={`group relative inline-block items-center justify-center transition-all duration-200 hover:scale-105 ${className}`}
    >
      <button
        type={type}
        className={`relative z-10 rounded-2xl bg-[#CC00CC] px-4 py-2 font-medium transition-all delay-100 duration-200 group-hover:bg-[#0d0d0d] sm:text-lg`}
        {...rest}
      >
        <span className="text-white group-hover:font-bold">{text}</span>
        {/* animate-gradient bg-[linear-gradient(to_right,#BDDFFF,#CC00CC,#BDDFFF,#CC00CC,#BDDFFF,#CC00CC,#BDDFFF)] bg-[length:300%_300%] bg-clip-text
group-hover:text-transparent */}
      </button>
      <motion.div
        className="absolute inset-0 rounded-2xl transition-all duration-200 group-hover:-inset-[3px]"
        style={{
          background: rotatingBg,
        }}
      />
    </div>
  );
}

export default CTA;
