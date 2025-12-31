"use client";

import Section from "./Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactSection = () => {
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    setPending(true);
    try {
      const response = await axios.post("/api/submitContactForm", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setMessage(
        response.data.message || "Thank you! Your submission has been received!"
      );
      reset();
      setTimeout(() => {
        setIsModalOpen(false);
        setMessage("");
      }, 2000);
    } catch {
      setMessage("Oops! Something went wrong while submitting the form.");
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
                    className="text-sm sm:text-base hover:text-foreground transition-colors break-words"
                  >
                    LinkedIn →
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/Kewinsky"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base hover:text-foreground transition-colors break-words"
                  >
                    GitHub →
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
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/50 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsModalOpen(false);
              setMessage("");
              reset();
            }
          }}
        >
          <div
            className="relative bg-background border rounded-lg p-4 sm:p-6 md:p-8 max-w-md w-full max-h-[90vh] sm:max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => {
                setIsModalOpen(false);
                setMessage("");
                reset();
              }}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 hover:bg-accent rounded transition-colors"
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
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 pr-8 sm:pr-10">
              Say Hello!
            </h1>
            <p className="mb-4 sm:mb-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
              I&apos;m open to full-time positions and contract opportunities.
              Let&apos;s discuss how I can contribute to your team.
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-3 sm:space-y-4"
            >
              <Input
                placeholder="Name"
                className="text-sm sm:text-base"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-xs sm:text-sm text-destructive">
                  {errors.name.message}
                </p>
              )}
              <Input
                type="email"
                placeholder="Email"
                className="text-sm sm:text-base"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-xs sm:text-sm text-destructive">
                  {errors.email.message}
                </p>
              )}
              <Textarea
                placeholder="Message"
                rows={4}
                className="text-sm sm:text-base resize-none"
                {...register("message", { required: "Message is required" })}
              />
              {errors.message && (
                <p className="text-xs sm:text-sm text-destructive">
                  {errors.message.message}
                </p>
              )}
              <Button
                type="submit"
                className="w-full text-sm sm:text-base"
                disabled={pending}
              >
                {pending ? "Please wait..." : "Send Email"}
              </Button>
              {message && (
                <p
                  className={`text-xs sm:text-sm text-center ${
                    message.includes("Thank you")
                      ? "text-green-600"
                      : "text-destructive"
                  }`}
                >
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactSection;
