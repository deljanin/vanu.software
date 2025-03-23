import { motion, useTime, useTransform } from "motion/react";
import Link from "next/link";
import CTA from "../components/CTA";

interface Card {
  service: string;
  price: string;
  perfectFor: string;
  points: string[];
}

const services = [
  {
    service: "Starter Website",
    price: "From 620€",
    perfectFor:
      "Individuals, freelancers, or small businesses needing a simple online presence.",
    points: [
      "A clean, modern, and mobile-friendly website (up to 3 pages)",
      "Basic on-page SEO setup to help you rank on search engines",
      "Contact form and social media integration",
      "Fast loading times and hosting setup",
      "3 rounds of revisions to ensure you’re happy with the design",
    ],
  },
  {
    service: "Business Website",
    price: "From 1100€",
    perfectFor:
      "Small to medium-sized businesses looking to grow their online presence.",
    points: [
      "Everything in the Starter Website tier",
      "A fully customized, multi-page website (up to 6 pages)",
      "Tailored design to match your brand identity",
      "Blog setup, service pages, and lead capture forms",
      "Integration with analytics tools to track performance",
      "5 rounds of revisions to perfect your site",
    ],
  },
  {
    service: "Premium Custom Website",
    price: "From 2600€",
    perfectFor:
      "Established businesses or those needing a high-performance, feature-rich website.",
    points: [
      "Everything in the Business Website tier",
      "A fully custom-designed website with advanced features",
      "Interactive elements like animations, sliders, and custom graphics",
      "API integrations for third-party tools (e.g., CRMs, booking systems)",
      "Advanced performance optimization for lightning-fast loading speeds",
      "E-commerce functionality with payment gateway setup (if needed)",
    ],
  },
  {
    service: "Enterprise Software Solutions",
    price: "Contact us",
    perfectFor:
      "Large businesses or enterprises needing custom software to solve complex problems.",
    points: [
      "Everything in the Premium Custom Website tier (if applicable)",
      "Tailored software solutions built to your exact specifications",
      "Scalable architecture to handle growth of your business",
      "Custom dashboards, CRM systems, or automation tools",
      "Advanced database design and backend development",
      "Long-term support, maintenance, and updates",
      "Regular progress updates",
    ],
  },
];

export default function Pricing() {
  return (
    <div className="flex w-full flex-col items-center justify-center py-20">
      <h2 className="font-tilla mb-20 text-7xl leading-tight">Services</h2>
      <div className="mb-11 flex flex-wrap gap-11">
        {services.map((service, key) => (
          <Card
            key={key}
            service={service.service}
            price={service.price}
            points={service.points}
            perfectFor={service.perfectFor}
          />
        ))}
      </div>
      {/* <h3 className="text-white opacity-60">
        Note: Every tier includes the features of the previous one, except for
        page count and revision rounds.
      </h3> */}
    </div>
  );
}

function Card({ service, price, points, perfectFor }: Card) {
  const time = useTime();

  const rotateTransform = useTransform(time, [0, 2500], [0, 360], {
    clamp: false,
  });

  const rotatingBg = useTransform(rotateTransform, (rotation) => {
    return `conic-gradient(from ${rotation}deg, #BDDFFF,#CC00CC,#BDDFFF)`;
  });
  return (
    <div className="flex flex-col gap-5">
      <div className="group relative flex min-h-[570px] w-[365px] flex-col justify-between rounded-3xl bg-[#151515] px-8 py-6 transition-all duration-200">
        <div>
          <span className="mb-1 inline-block text-lg">{service}</span>
          <h3 className="font-tilla mb-4 bg-[linear-gradient(to_right,#BDDFFF,#CC00CC)] bg-clip-text text-2xl leading-tight text-transparent">
            {price}
          </h3>
          <div className="mb-1 h-[2px] w-full rounded-full bg-[#252525]"></div>
          <ul className="mb-5 flex flex-col gap-2 py-2 pl-5">
            {points.map((point, index) => (
              <li key={index} className="list-disc">
                {point}
              </li>
            ))}
          </ul>
        </div>
        <Link href="/#contact" className="w-max">
          <CTA text="Contact us" type="button" />
        </Link>
        <motion.div
          className="absolute inset-1 -z-10 rounded-3xl transition-all duration-200 group-hover:-inset-[1.5px]"
          style={{
            background: rotatingBg,
          }}
        />
        <motion.div
          className="absolute inset-1 -z-20 rounded-3xl opacity-0 blur-[15px] transition-all duration-200 group-hover:opacity-100"
          style={{
            background: rotatingBg,
          }}
        />
      </div>
      <h4 className="text-md w-[365px] px-8">
        <span className="font-bold">Perfect for:</span> <br />
        {perfectFor}
      </h4>
    </div>
  );
}
