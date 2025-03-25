"use client";
import { motion } from "motion/react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="relative flex w-full flex-col items-center px-5 py-20 md:px-32">
      <div
        className="pointer-events-none absolute top-0 -z-10 h-full w-full"
        style={{
          mask: "linear-gradient(to top, black, transparent)",
          backdropFilter: "blur(8px)",
        }}
      ></div>
      <motion.div
        initial={{ y: "30%" }}
        whileInView={{
          y: "0",
        }}
        transition={{ ease: "backOut" }}
        viewport={{ amount: 0.5 }}
        className="relative w-full"
      >
        <svg
          className="w-full"
          viewBox="0 0 1481 391"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M388.25 -2.6226e-05L204.55 385H184.2L0.5 -2.6226e-05H86.85L194.1 228.25L301.35 -2.6226e-05H388.25ZM735.76 385H648.86L541.61 143L434.36 385H348.01L531.71 -2.6226e-05H552.06L735.76 385ZM1085.89 -2.6226e-05V385H1012.19L770.195 -2.6226e-05H857.095L1012.19 248.05V-2.6226e-05H1085.89ZM778.995 129.8L853.245 240.35V385H778.995V129.8ZM1480.88 -2.6226e-05V245.3C1480.88 267.667 1476.29 287.833 1467.13 305.8C1457.96 323.767 1445.68 338.983 1430.28 351.45C1415.24 363.917 1398.19 373.633 1379.13 380.6C1360.06 387.2 1340.63 390.5 1320.83 390.5C1301.03 390.5 1281.59 387.2 1262.53 380.6C1243.46 373.633 1226.59 363.917 1211.93 351.45C1197.26 338.983 1185.34 323.767 1176.18 305.8C1167.38 287.833 1162.98 267.667 1162.98 245.3V-2.6226e-05H1237.23V236.5C1237.23 246.767 1239.06 256.85 1242.73 266.75C1246.76 276.65 1252.44 285.633 1259.78 293.7C1267.11 301.4 1276.28 307.633 1287.28 312.4C1298.28 317.167 1310.93 319.55 1325.23 319.55C1339.53 319.55 1351.81 317.167 1362.08 312.4C1372.34 307.633 1380.78 301.4 1387.38 293.7C1393.98 286 1398.93 277.2 1402.23 267.3C1405.53 257.033 1407.18 246.767 1407.18 236.5V-2.6226e-05H1480.88Z"
            fill="url(#paint0_linear_2252_30)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2252_30"
              x1="-5"
              y1="-212"
              x2="1488.37"
              y2="-189.397"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#BDDFFF" />
              <stop offset="1" stopColor="#CC00CC" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          className="absolute top-0 -z-20 w-full blur-[15px]"
          viewBox="0 0 1481 391"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M388.25 -2.6226e-05L204.55 385H184.2L0.5 -2.6226e-05H86.85L194.1 228.25L301.35 -2.6226e-05H388.25ZM735.76 385H648.86L541.61 143L434.36 385H348.01L531.71 -2.6226e-05H552.06L735.76 385ZM1085.89 -2.6226e-05V385H1012.19L770.195 -2.6226e-05H857.095L1012.19 248.05V-2.6226e-05H1085.89ZM778.995 129.8L853.245 240.35V385H778.995V129.8ZM1480.88 -2.6226e-05V245.3C1480.88 267.667 1476.29 287.833 1467.13 305.8C1457.96 323.767 1445.68 338.983 1430.28 351.45C1415.24 363.917 1398.19 373.633 1379.13 380.6C1360.06 387.2 1340.63 390.5 1320.83 390.5C1301.03 390.5 1281.59 387.2 1262.53 380.6C1243.46 373.633 1226.59 363.917 1211.93 351.45C1197.26 338.983 1185.34 323.767 1176.18 305.8C1167.38 287.833 1162.98 267.667 1162.98 245.3V-2.6226e-05H1237.23V236.5C1237.23 246.767 1239.06 256.85 1242.73 266.75C1246.76 276.65 1252.44 285.633 1259.78 293.7C1267.11 301.4 1276.28 307.633 1287.28 312.4C1298.28 317.167 1310.93 319.55 1325.23 319.55C1339.53 319.55 1351.81 317.167 1362.08 312.4C1372.34 307.633 1380.78 301.4 1387.38 293.7C1393.98 286 1398.93 277.2 1402.23 267.3C1405.53 257.033 1407.18 246.767 1407.18 236.5V-2.6226e-05H1480.88Z"
            fill="url(#paint0_linear_2252_30)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2252_30"
              x1="-5"
              y1="-212"
              x2="1488.37"
              y2="-189.397"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#BDDFFF" />
              <stop offset="1" stopColor="#CC00CC" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute -bottom-10 h-[3px] w-full bg-[#252525]"></div>
      </motion.div>
      <div className="flex w-full justify-between pt-32 text-lg">
        <div className="">
          <h3 className="bold mb-3 font-tilla text-2xl">Services</h3>
          <ul>
            <li className="bg-gradient-to-r from-[#CC00CC] to-[#BDDFFF] bg-clip-text transition-all duration-300 hover:text-transparent">
              <Link href="/#services">Starter Website</Link>
            </li>
            <li className="bg-gradient-to-r from-[#CC00CC] to-[#BDDFFF] bg-clip-text transition-all duration-300 hover:text-transparent">
              <Link href="/#services">Business Website</Link>
            </li>
            <li className="bg-gradient-to-r from-[#CC00CC] to-[#BDDFFF] bg-clip-text transition-all duration-300 hover:text-transparent">
              <Link href="/#services">Premium Website</Link>
            </li>
            <li className="bg-gradient-to-r from-[#CC00CC] to-[#BDDFFF] bg-clip-text transition-all duration-300 hover:text-transparent">
              <Link href="/#services">Enterprise Solutions</Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className="bold mb-3 font-tilla text-2xl">Socials</h3>
          <ul>
            <li>
              <a
                target="_blank"
                href="https://instagram.com"
                className="group flex items-center gap-3 bg-gradient-to-r from-[#CC00CC] to-[#BDDFFF] bg-clip-text text-white transition-all duration-300 hover:text-transparent"
              >
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-white transition-all duration-300 group-hover:fill-[#CC00CC]"
                >
                  <path d="M6.46699 0H14.867C18.067 0 20.667 2.6 20.667 5.8V14.2C20.667 15.7383 20.0559 17.2135 18.9682 18.3012C17.8805 19.3889 16.4052 20 14.867 20H6.46699C3.26699 20 0.666992 17.4 0.666992 14.2V5.8C0.666992 4.26174 1.27806 2.78649 2.36577 1.69878C3.45348 0.61107 4.92874 0 6.46699 0ZM6.26699 2C5.31221 2 4.39654 2.37928 3.72141 3.05442C3.04628 3.72955 2.66699 4.64522 2.66699 5.6V14.4C2.66699 16.39 4.27699 18 6.26699 18H15.067C16.0218 18 16.9374 17.6207 17.6126 16.9456C18.2877 16.2705 18.667 15.3548 18.667 14.4V5.6C18.667 3.61 17.057 2 15.067 2H6.26699ZM15.917 3.5C16.2485 3.5 16.5665 3.6317 16.8009 3.86612C17.0353 4.10054 17.167 4.41848 17.167 4.75C17.167 5.08152 17.0353 5.39946 16.8009 5.63388C16.5665 5.8683 16.2485 6 15.917 6C15.5855 6 15.2675 5.8683 15.0331 5.63388C14.7987 5.39946 14.667 5.08152 14.667 4.75C14.667 4.41848 14.7987 4.10054 15.0331 3.86612C15.2675 3.6317 15.5855 3.5 15.917 3.5ZM10.667 5C11.9931 5 13.2648 5.52678 14.2025 6.46447C15.1402 7.40215 15.667 8.67392 15.667 10C15.667 11.3261 15.1402 12.5979 14.2025 13.5355C13.2648 14.4732 11.9931 15 10.667 15C9.34091 15 8.06914 14.4732 7.13146 13.5355C6.19378 12.5979 5.66699 11.3261 5.66699 10C5.66699 8.67392 6.19378 7.40215 7.13146 6.46447C8.06914 5.52678 9.34091 5 10.667 5ZM10.667 7C9.87134 7 9.10828 7.31607 8.54567 7.87868C7.98306 8.44129 7.66699 9.20435 7.66699 10C7.66699 10.7956 7.98306 11.5587 8.54567 12.1213C9.10828 12.6839 9.87134 13 10.667 13C11.4626 13 12.2257 12.6839 12.7883 12.1213C13.3509 11.5587 13.667 10.7956 13.667 10C13.667 9.20435 13.3509 8.44129 12.7883 7.87868C12.2257 7.31607 11.4626 7 10.667 7Z" />
                </svg>
                Instagram
              </a>
            </li>

            <li className="">
              <a
                target="_blank"
                href="https://facebook.com"
                className="group flex items-center gap-3 bg-gradient-to-r from-[#CC00CC] to-[#BDDFFF] bg-clip-text text-white transition-all duration-300 hover:text-transparent"
              >
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-white transition-all duration-300 group-hover:fill-[#CC00CC]"
                >
                  <path
                    d="M20.667 10.0249C20.667 4.5049 16.187 0.0249023 10.667 0.0249023C5.14699 0.0249023 0.666992 4.5049 0.666992 10.0249C0.666992 14.8649 4.10699 18.8949 8.66699 19.8249V13.0249H6.66699V10.0249H8.66699V7.5249C8.66699 5.5949 10.237 4.0249 12.167 4.0249H14.667V7.0249H12.667C12.117 7.0249 11.667 7.4749 11.667 8.0249V10.0249H14.667V13.0249H11.667V19.9749C16.717 19.4749 20.667 15.2149 20.667 10.0249Z"
                    // fill="currentColor"
                  />
                </svg>
                Facebook
              </a>
            </li>

            {/* <li>LinkedIn</li> */}
          </ul>
        </div>
        <div className="">
          <h3 className="bold mb-3 font-tilla text-2xl">Contact</h3>
          <ul>
            <li>
              <a
                className="group flex items-center gap-3 bg-gradient-to-r from-[#CC00CC] to-[#BDDFFF] bg-clip-text transition-all duration-300 hover:text-transparent"
                href="mailto:contact@vanu.software"
              >
                <svg
                  className="cursor-pointer fill-white transition-all duration-200 group-hover:fill-[#CC00CC]"
                  viewBox="0 0 17 12"
                  width={23}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.01 10.5V1.5C17.01 0.67 16.34 0 15.51 0H1.5C0.67 0 0 0.67 0 1.5V10.5C0 11.33 0.67 12 1.5 12H15.51C16.34 12 17.01 11.33 17.01 10.5ZM15.7 1.39C16.03 1.72 15.85 2.06 15.67 2.23L11.61 5.95L15.51 10.01C15.63 10.15 15.71 10.37 15.57 10.52C15.44 10.68 15.14 10.67 15.01 10.57L10.64 6.84L8.5 8.79L6.37 6.84L2 10.57C1.87 10.67 1.57 10.68 1.44 10.52C1.3 10.37 1.38 10.15 1.5 10.01L5.4 5.95L1.34 2.23C1.16 2.06 0.98 1.72 1.31 1.39C1.64 1.06 1.98 1.22 2.26 1.46L8.5 6.5L14.75 1.46C15.03 1.22 15.37 1.06 15.7 1.39Z" />
                </svg>
                contact@vanu.software
              </a>
            </li>
            <li></li>
          </ul>
        </div>
        <div className="">
          <h3 className="bold mb-3 font-tilla text-2xl">Other</h3>
          <ul>
            <li className="bg-gradient-to-r from-[#CC00CC] to-[#BDDFFF] bg-clip-text transition-all duration-300 hover:text-transparent">
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              ©2024 Vanu Software
              <br />
              All Rights Reserved
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
