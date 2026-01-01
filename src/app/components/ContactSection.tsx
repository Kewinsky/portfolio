"use client";

import Section from "./Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import React from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

type IconProps = React.HTMLAttributes<SVGElement>;

const LinkedInIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4"
    {...props}
  >
    <title>LinkedIn</title>
    <path
      fill="currentColor"
      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
    />
  </svg>
);

const GitHubIcon = (props: IconProps) => (
  <svg viewBox="0 0 438.549 438.549" className="w-4 h-4" {...props}>
    <path
      fill="currentColor"
      d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
    />
  </svg>
);

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactSection = () => {
  const [pending, setPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const closeModal = () => {
    setIsModalOpen(false);
    setIsSuccess(false);
    setError("");
    reset();
  };

  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    setPending(true);
    setError("");
    try {
      await axios.post("/api/submitContactForm", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setIsSuccess(true);
      reset();
    } catch {
      setError("Oops! Something went wrong while submitting the form.");
      setIsSuccess(false);
    } finally {
      setPending(false);
    }
  };

  return (
    <>
      <Section id="contact" header="">
        <div className="max-w-4xl px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="mb-8 sm:mb-12 md:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 sm:mb-4 md:mb-6">
              Let&apos;s discuss opportunities
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 md:mb-10 leading-relaxed">
              I&apos;m open to full-time positions and contract opportunities.
            </p>
            <Button
              onClick={() => setIsModalOpen(true)}
              size="lg"
              className="text-sm sm:text-base md:text-lg w-full sm:w-auto"
            >
              Get In Touch →
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 pt-6 sm:pt-8 md:pt-10 border-t">
            <div>
              <h5 className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4 uppercase tracking-wide text-muted-foreground">
                Social
              </h5>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link
                    href="https://www.linkedin.com/in/kewin-taoanh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors break-words"
                  >
                    <LinkedInIcon />
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/Kewinsky"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors break-words"
                  >
                    <GitHubIcon />
                    GitHub
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4 uppercase tracking-wide text-muted-foreground">
                Location
              </h5>
              <ul className="space-y-2 sm:space-y-3">
                <li className="text-sm sm:text-base text-muted-foreground">
                  Gdańsk, Poland
                </li>
                <li className="text-sm sm:text-base text-muted-foreground">
                  Open to remote positions
                </li>
              </ul>
            </div>
            <div className="sm:col-span-2 md:col-span-1">
              <h5 className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4 uppercase tracking-wide text-muted-foreground">
                Email
              </h5>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a
                    href="mailto:kewin.taoanh@gmail.com"
                    className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors break-all sm:break-words"
                  >
                    kewin.taoanh@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/50 backdrop-blur-sm"
            onClick={(e) => {
              if (e.target === e.currentTarget && !pending && !isSuccess) {
                closeModal();
              }
            }}
          >
            <motion.div
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, scale: 0.95, y: 20 }
              }
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, scale: 0.95, y: 20 }
              }
              transition={{
                duration: shouldReduceMotion ? 0 : 0.3,
                ease: [0.21, 1.11, 0.81, 0.99],
              }}
              className="relative bg-background border rounded-lg p-4 sm:p-6 md:p-8 max-w-md w-full max-h-[90vh] sm:max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {!isSuccess && (
                <button
                  onClick={closeModal}
                  disabled={pending}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 hover:bg-accent rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Close modal"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}

              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="text-center py-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                        delay: 0.2,
                      }}
                      className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/10 flex items-center justify-center"
                    >
                      <svg
                        className="w-8 h-8 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <motion.path
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.4,
                            ease: "easeOut",
                          }}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </motion.div>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                      Thank you!
                    </h2>
                    <p className="text-sm sm:text-base text-muted-foreground mb-6">
                      Your message has been sent successfully. I&apos;ll get
                      back to you soon!
                    </p>
                    <Button onClick={closeModal} className="w-full">
                      Close
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 pr-8 sm:pr-10">
                      Say Hello!
                    </h1>
                    <p className="mb-4 sm:mb-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
                      I&apos;m open to full-time positions and contract
                      opportunities. Let&apos;s discuss how I can contribute to
                      your team.
                    </p>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-3 sm:space-y-4"
                    >
                      <Input
                        placeholder="Name"
                        className="text-sm sm:text-base"
                        disabled={pending}
                        {...register("name", { required: "Name is required" })}
                      />
                      {errors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-xs sm:text-sm text-destructive"
                        >
                          {errors.name.message}
                        </motion.p>
                      )}
                      <Input
                        type="email"
                        placeholder="Email"
                        className="text-sm sm:text-base"
                        disabled={pending}
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value:
                              /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                            message: "Invalid email address",
                          },
                        })}
                      />
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-xs sm:text-sm text-destructive"
                        >
                          {errors.email.message}
                        </motion.p>
                      )}
                      <Textarea
                        placeholder="Message"
                        rows={4}
                        className="text-sm sm:text-base resize-none"
                        disabled={pending}
                        {...register("message", {
                          required: "Message is required",
                        })}
                      />
                      {errors.message && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-xs sm:text-sm text-destructive"
                        >
                          {errors.message.message}
                        </motion.p>
                      )}
                      {error && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-xs sm:text-sm text-center text-destructive"
                        >
                          {error}
                        </motion.p>
                      )}
                      <Button
                        type="submit"
                        className="w-full text-sm sm:text-base"
                        disabled={pending}
                      >
                        {pending ? (
                          <span className="flex items-center justify-center gap-2">
                            <motion.svg
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                              className="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              />
                            </motion.svg>
                            Sending...
                          </span>
                        ) : (
                          "Send Email"
                        )}
                      </Button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactSection;
