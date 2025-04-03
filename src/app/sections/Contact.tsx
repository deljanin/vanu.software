"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { motion, useTime, useTransform } from "motion/react";
import CTA from "../components/CTA";
import { useState } from "react";
import * as yup from "yup";
import MagneticComponent from "../components/MagneticComponent";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="px-5 py-20">
      <div className="relative flex flex-col justify-center gap-5 md:flex-row lg:gap-10">
        <div className="">
          <h2 className="mb-10 font-tilla text-xl leading-relaxed sm:text-3xl sm:leading-relaxed md:text-left md:text-4xl md:leading-normal xl:text-5xl xl:leading-normal">
            Tell us about your project <br />
            <span className="bg-[linear-gradient(to_right,#BDDFFF,#CC00CC)] bg-clip-text text-transparent">
              {"We'll handle the rest"}
            </span>
          </h2>
          <div className="relative lg:text-xl">
            <p className="">
              Describe your project idea. The more details the better.{" "}
              <br className="hidden md:block" /> Here is what happens next:
            </p>
            <ol className="list-inside list-decimal">
              <li>We reply within 12 business hours.</li>
              <li>Together we discuss your project on a quick call.</li>
              <li>Finally, you get a collaboration offer from Vanu.</li>
            </ol>
            <div className="mt-5 lg:mt-20">
              <p className="mb-2">Contact us directly:</p>
              <div className="flex items-center gap-5">
                <MagneticComponent>
                  <a href="mailto:contact@vanu.software" target="_blank">
                    <svg
                      className="w-8 cursor-pointer fill-white transition-all duration-200 hover:fill-[url(#linear-gradient-email)] hover:transition-all hover:duration-200 md:w-12"
                      viewBox="0 0 17 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.01 10.5V1.5C17.01 0.67 16.34 0 15.51 0H1.5C0.67 0 0 0.67 0 1.5V10.5C0 11.33 0.67 12 1.5 12H15.51C16.34 12 17.01 11.33 17.01 10.5ZM15.7 1.39C16.03 1.72 15.85 2.06 15.67 2.23L11.61 5.95L15.51 10.01C15.63 10.15 15.71 10.37 15.57 10.52C15.44 10.68 15.14 10.67 15.01 10.57L10.64 6.84L8.5 8.79L6.37 6.84L2 10.57C1.87 10.67 1.57 10.68 1.44 10.52C1.3 10.37 1.38 10.15 1.5 10.01L5.4 5.95L1.34 2.23C1.16 2.06 0.98 1.72 1.31 1.39C1.64 1.06 1.98 1.22 2.26 1.46L8.5 6.5L14.75 1.46C15.03 1.22 15.37 1.06 15.7 1.39Z" />
                      <defs>
                        <linearGradient
                          id="linear-gradient-email"
                          x1="0"
                          y1="0"
                          x2="12"
                          y2="17"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#BDDFFF" />
                          <stop offset="1" stopColor="#CC00CC" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </a>
                </MagneticComponent>
                <MagneticComponent>
                  <a href="http://instagram.com/vanu_software" target="_blank">
                    <svg
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-7 cursor-pointer fill-white transition-all duration-200 hover:fill-[url(#linear-gradient-email)] hover:transition-all hover:duration-200 md:w-10"
                    >
                      <path d="M6.46699 0H14.867C18.067 0 20.667 2.6 20.667 5.8V14.2C20.667 15.7383 20.0559 17.2135 18.9682 18.3012C17.8805 19.3889 16.4052 20 14.867 20H6.46699C3.26699 20 0.666992 17.4 0.666992 14.2V5.8C0.666992 4.26174 1.27806 2.78649 2.36577 1.69878C3.45348 0.61107 4.92874 0 6.46699 0ZM6.26699 2C5.31221 2 4.39654 2.37928 3.72141 3.05442C3.04628 3.72955 2.66699 4.64522 2.66699 5.6V14.4C2.66699 16.39 4.27699 18 6.26699 18H15.067C16.0218 18 16.9374 17.6207 17.6126 16.9456C18.2877 16.2705 18.667 15.3548 18.667 14.4V5.6C18.667 3.61 17.057 2 15.067 2H6.26699ZM15.917 3.5C16.2485 3.5 16.5665 3.6317 16.8009 3.86612C17.0353 4.10054 17.167 4.41848 17.167 4.75C17.167 5.08152 17.0353 5.39946 16.8009 5.63388C16.5665 5.8683 16.2485 6 15.917 6C15.5855 6 15.2675 5.8683 15.0331 5.63388C14.7987 5.39946 14.667 5.08152 14.667 4.75C14.667 4.41848 14.7987 4.10054 15.0331 3.86612C15.2675 3.6317 15.5855 3.5 15.917 3.5ZM10.667 5C11.9931 5 13.2648 5.52678 14.2025 6.46447C15.1402 7.40215 15.667 8.67392 15.667 10C15.667 11.3261 15.1402 12.5979 14.2025 13.5355C13.2648 14.4732 11.9931 15 10.667 15C9.34091 15 8.06914 14.4732 7.13146 13.5355C6.19378 12.5979 5.66699 11.3261 5.66699 10C5.66699 8.67392 6.19378 7.40215 7.13146 6.46447C8.06914 5.52678 9.34091 5 10.667 5ZM10.667 7C9.87134 7 9.10828 7.31607 8.54567 7.87868C7.98306 8.44129 7.66699 9.20435 7.66699 10C7.66699 10.7956 7.98306 11.5587 8.54567 12.1213C9.10828 12.6839 9.87134 13 10.667 13C11.4626 13 12.2257 12.6839 12.7883 12.1213C13.3509 11.5587 13.667 10.7956 13.667 10C13.667 9.20435 13.3509 8.44129 12.7883 7.87868C12.2257 7.31607 11.4626 7 10.667 7Z" />
                    </svg>
                  </a>
                </MagneticComponent>
              </div>
            </div>
          </div>
        </div>
        <svg
          className="absolute bottom-2 left-[33%] hidden xl:block 2xl:bottom-14 2xl:left-[36%]"
          width="348"
          height="140"
          viewBox="0 0 348 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.10888 1.88759C2.10888 1.88759 63.0844 123.125 136.002 136.232C204.683 148.577 301.139 68.0818 301.139 68.0818M301.139 68.0818L292.955 105.05L342.551 41.7008L264.145 59.8928L301.139 68.0818Z"
            stroke="url(#paint0_linear_213_159)"
            strokeWidth="4"
          />
          <defs>
            <linearGradient
              id="paint0_linear_213_159"
              x1="9.61035"
              y1="-32"
              x2="334.617"
              y2="46.6104"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#BDDFFF" />
              <stop offset="1" stopColor="#CC00CC" />
            </linearGradient>
          </defs>
        </svg>
        <ContactForm />
      </div>
    </section>
  );
}

function ContactForm() {
  const time = useTime();
  const [disabled, setDisabled] = useState(false);
  const [formStatus, setFormStatus] = useState<"none" | "success" | "error">(
    "none",
  );

  const yupSchema = yup.object().shape({
    name: yup
      .string()
      .max(40, "Name must be 40 characters or less")
      .required("Name is required"),
    email: yup
      .string()
      .required("Email is required")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please enter a valid email address",
      ),
  });

  const onSubmit = async (
    values: { name: string; email: string; message?: string },
    actions: { resetForm: () => void },
  ) => {
    setDisabled(true);

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setFormStatus("success");
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.log(error);
      setFormStatus("error");
    } finally {
      setDisabled(false);
      actions.resetForm();
    }
  };
  const rotateTransform = useTransform(time, [0, 2500], [0, 360], {
    clamp: false,
  });

  const rotatingBg = useTransform(rotateTransform, (rotation) => {
    return `conic-gradient(from ${rotation}deg, #BDDFFF,#CC00CC,#BDDFFF)`;
  });

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="group relative min-h-[500px] w-full rounded-3xl bg-[#151515] px-8 py-6 sm:max-w-[600px]">
          <Formik
            initialValues={{
              name: "",
              email: "",
              message: "",
            }}
            validationSchema={yupSchema}
            onSubmit={onSubmit}
          >
            <Form className="flex w-full flex-col gap-1">
              <Field type="text" name="extra" className="hidden" />
              <div className="flex flex-col gap-5 md:flex-row md:justify-between">
                <motion.div
                  // initial={{ opacity: 0, y: 50 }}
                  id="nameInput"
                  className="mb-3"
                >
                  <label htmlFor="name" className="mb-1 inline-block">
                    Name
                  </label>
                  <Field
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Peter"
                    className="w-full rounded-2xl bg-[#202020] px-4 py-2 text-white placeholder-[#505050] caret-white outline-none transition-all duration-300 hover:scale-[1.025]"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="mt-1 pl-4 text-red-700"
                  />
                </motion.div>
                <motion.div
                  // initial={{ opacity: 0, y: 50 }}
                  id="emailInput"
                  className="mb-3"
                >
                  <label htmlFor="email" className="mb-1 inline-block">
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    placeholder="contact@vanu.software"
                    className="w-full rounded-2xl bg-[#202020] px-4 py-2 text-white placeholder-[#505050] caret-white outline-none transition-all duration-300 hover:scale-[1.025]"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="mt-1 pl-4 text-red-700"
                  />
                </motion.div>
              </div>
              <motion.div
                // initial={{ opacity: 0, y: 50 }}
                id="messageInput"
                className="mb-3"
              >
                <label htmlFor="message" className="mb-1 inline-block">
                  Message
                </label>
                <Field
                  component="textarea"
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="We need you to create a jaw-dropping website that has..."
                  className="w-full rounded-2xl bg-[#202020] px-4 py-2 text-white placeholder-[#505050] caret-white outline-none transition-all duration-300 hover:scale-[1.025]"
                />
              </motion.div>
              <motion.div
                // initial={{ opacity: 0, y: 50 }}
                id="submit"
              >
                <CTA text="Send message" type="submit" disabled={disabled} />
              </motion.div>
            </Form>
          </Formik>
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
        <h3 className="mt-5 text-center md:text-left">
          <span className="opacity-50">
            By submitting this form you agree to our{" "}
          </span>
          <Link
            href="/privacy-policy"
            className="bg-gradient-to-r from-[#CC00CC] to-[#BDDFFF] bg-clip-text underline opacity-50 transition-all duration-300 hover:font-bold hover:text-transparent hover:opacity-100"
          >
            privacy policy
          </Link>
          .
        </h3>
      </div>
      {(formStatus === "success" || formStatus === "error") && (
        <Modal formStatus={formStatus} setFormStatus={setFormStatus} />
      )}
    </>
  );
}

function Modal({
  formStatus,
  setFormStatus,
}: {
  formStatus: "none" | "success" | "error";
  setFormStatus: (status: "none" | "success" | "error") => void;
}) {
  // const formStatus = "success";
  return (
    <div className="fixed left-0 top-0 z-[100] flex h-screen w-screen items-center justify-center bg-[radial-gradient(transparent_1px,#151515_1px)] px-5 backdrop-blur-sm [background-size:4px_4px]">
      <div className="relative flex flex-col items-center justify-center gap-5 rounded-3xl bg-[#151515] p-14 text-center">
        <h2 className="font-tilla text-3xl">
          {formStatus === "success" ? "Message sent" : "Oops"}
        </h2>
        {formStatus === "success" ? (
          <p>
            We will contact you withing 12 business hours. <br />
            Have a great day!
          </p>
        ) : (
          <p>
            Something went wrong. Please contact us directly <br /> by sending
            an email to{" "}
            <a
              className="bg-gradient-to-r from-[#CC00CC] to-[#BDDFFF] bg-clip-text text-transparent transition-all duration-300 hover:font-bold"
              href="mailto:contact@vanu.software"
            >
              contact@vanu.software
            </a>
            .
          </p>
        )}
        <div
          className=""
          onMouseDown={() => {
            setFormStatus("none");
          }}
        >
          <CTA text="Okay" type="button" />
        </div>
        <div
          className="absolute right-3 top-3 cursor-pointer transition-all duration-200 hover:scale-105"
          onMouseDown={() => {
            setFormStatus("none");
          }}
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 9 9"
            fill="red"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5.31193 4.2513L8.28068 1.28255C8.42157 1.1419 8.50083 0.951045 8.501 0.751964C8.50118 0.552882 8.42226 0.361885 8.28161 0.220989C8.14097 0.0800923 7.95011 0.000838857 7.75103 0.000663042C7.55194 0.000487227 7.36095 0.0794034 7.22005 0.220051L4.2513 3.1888L1.28255 0.220051C1.14165 0.0791548 0.950558 0 0.751301 0C0.552044 0 0.360947 0.0791548 0.220051 0.220051C0.0791548 0.360947 0 0.552044 0 0.751301C0 0.950558 0.0791548 1.14165 0.220051 1.28255L3.1888 4.2513L0.220051 7.22005C0.0791548 7.36095 0 7.55204 0 7.7513C0 7.95056 0.0791548 8.14165 0.220051 8.28255C0.360947 8.42345 0.552044 8.5026 0.751301 8.5026C0.950558 8.5026 1.14165 8.42345 1.28255 8.28255L4.2513 5.3138L7.22005 8.28255C7.36095 8.42345 7.55204 8.5026 7.7513 8.5026C7.95056 8.5026 8.14165 8.42345 8.28255 8.28255C8.42345 8.14165 8.5026 7.95056 8.5026 7.7513C8.5026 7.55204 8.42345 7.36095 8.28255 7.22005L5.31193 4.2513Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
