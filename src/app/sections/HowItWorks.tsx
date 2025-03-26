interface PhaseProps {
  number: string;
  heading: string;
  text: string;
}
const phases = [
  {
    heading: "Initial Discussion",
    text: "We start with a conversation to understand your needs, goals, and expectations. Based on this, we provide a detailed proposal outlining the project scope, timeline, and deliverables. Payment details and terms will be clearly communicated during this phase to ensure transparency and alignment.",
  },
  {
    heading: "Design",
    text: "Our team creates thoughtful UI/UX designs tailored to your brand and audience. We ensure the visual and functional aspects align with your vision, and you’ll have the opportunity to review and provide feedback at every step.",
  },
  {
    heading: "Development",
    text: "With the approved design, we start building your website. Our focus is on implementing features, ensuring seamless functionality, and creating a responsive experience that works beautifully across all devices.",
  },
  {
    heading: "Final Review",
    text: "We present the near-final product for your review. Your feedback is invaluable at this stage, as we refine and polish every detail to ensure the project meets your expectations and is ready for launch.",
  },
  {
    heading: "Deployment",
    text: "Your project goes live! We handle the deployment process with care and provide ongoing support to ensure everything runs smoothly. Our partnership continues as we help you grow and adapt in the digital space.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20">
      <h2 className="text-center font-tilla text-2xl leading-relaxed sm:text-3xl sm:leading-relaxed md:pb-10 md:text-4xl md:leading-normal xl:text-5xl xl:leading-snug 2xl:text-7xl">
        How it works
      </h2>
      <div className="relative flex min-h-[350vh] w-full px-3 py-10 md:px-32 md:py-20 xl:px-64 2xl:px-80">
        <div className="relative mb-32 mt-10 flex w-1/6 flex-col justify-between sm:my-24 md:w-1/5">
          <div className="absolute left-[calc(1rem-2px)] top-0 h-full w-[3px] rounded-full bg-[#252525] [mask-image:linear-gradient(to_bottom,transparent_0%,#000_3%,#000_97%,transparent_100%)]" />
          {/* <div className="absolute left-[calc(1rem-2px)] top-0 h-full w-[3px] rounded-full bg-[linear-gradient(to_bottom,#BDDFFFCC,#CC00CCCC,#BDDFFFCC,#CC00CCCC,#BDDFFFCC,#CC00CCCC,#BDDFFFCC,#CC00CCCC,#BDDFFFCC)]" /> */}
          <div className="absolute left-[calc(1rem-8px)] top-0 flex h-full flex-col items-center justify-between">
            <div className="size-4 rounded-full bg-[linear-gradient(to_right,#BDDFFF,#CC00CC)]"></div>
            <div className="size-4 rounded-full bg-[linear-gradient(to_right,#BDDFFF,#CC00CC)]"></div>
            <div className="size-4 rounded-full bg-[linear-gradient(to_right,#BDDFFF,#CC00CC)]"></div>
            <div className="size-4 rounded-full bg-[linear-gradient(to_right,#BDDFFF,#CC00CC)]"></div>
            <div className="size-4 rounded-full bg-[linear-gradient(to_right,#BDDFFF,#CC00CC)]"></div>
          </div>
          <div className="sticky top-1/2 size-8 rounded-full bg-[linear-gradient(to_right,#BDDFFF,#CC00CC)]">
            <div className="absolute h-full w-full rounded-full bg-[linear-gradient(to_right,#BDDFFF,#CC00CC)] blur-[10px]"></div>
          </div>
        </div>
        <div className="relative flex w-5/6 flex-col justify-between md:w-4/5">
          {phases.map((step, index) => (
            <Phase
              key={index}
              number={"0" + index}
              heading={step.heading}
              text={step.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Phase({ number, heading, text }: PhaseProps) {
  return (
    <div className="flex flex-col items-start justify-center lg:flex-row lg:gap-5">
      <span className="bg-[linear-gradient(to_right,#BDDFFF,#CC00CC)] bg-clip-text font-tilla text-2xl leading-relaxed text-transparent sm:text-5xl sm:leading-relaxed md:text-left md:text-6xl md:leading-normal xl:text-9xl xl:leading-[1.2]">
        {number}
      </span>
      <div className="">
        <h3 className="mb-5 pt-1.5 font-tilla text-xl leading-relaxed sm:text-3xl sm:leading-relaxed md:text-left md:text-4xl md:leading-normal xl:text-5xl xl:leading-snug">
          {heading}
        </h3>
        <p className="md:w-5/6 md:text-xl">{text}</p>
      </div>
    </div>
  );
}
