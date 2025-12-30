"use client";

import Section from "./Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">
            Let&apos;s discuss opportunities
          </h1>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-muted-foreground mb-6">
              Get in touch
            </h2>
            <Button
              onClick={() => setIsModalOpen(true)}
              size="lg"
              className="text-lg"
            >
              Get In Touch →
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div>
              <h5 className="text-sm font-semibold mb-4 uppercase tracking-wide">
                Social
              </h5>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://www.linkedin.com/in/kewin-taoanh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:underline"
                  >
                    LinkedIn →
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/Kewinsky"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:underline"
                  >
                    GitHub →
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-sm font-semibold mb-4 uppercase tracking-wide">
                Location
              </h5>
              <ul className="space-y-2">
                <li className="text-sm">Gdańsk, Poland</li>
                <li className="text-sm">Open to remote positions</li>
              </ul>
            </div>
            <div>
              <h5 className="text-sm font-semibold mb-4 uppercase tracking-wide">
                Email
              </h5>
              <ul className="space-y-2">
                <li className="text-sm">kewin.taoanh@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsModalOpen(false);
              setMessage("");
              reset();
            }
          }}
        >
          <div
            className="relative bg-background border rounded-lg p-8 max-w-md w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => {
                setIsModalOpen(false);
                setMessage("");
                reset();
              }}
              className="absolute top-4 right-4 p-2 hover:bg-accent rounded"
              aria-label="Close modal"
            >
              <svg
                className="w-6 h-6"
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
            <h1 className="text-3xl font-bold mb-4">Say Hello!</h1>
            <p className="mb-6 text-muted-foreground">
              I&apos;m open to full-time positions and contract opportunities.
              Let&apos;s discuss how I can contribute to your team.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <Input
                placeholder="Name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-sm text-destructive">
                  {errors.name.message}
                </p>
              )}
              <Input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-sm text-destructive">
                  {errors.email.message}
                </p>
              )}
              <Input
                placeholder="Message"
                {...register("message", { required: "Message is required" })}
              />
              {errors.message && (
                <p className="text-sm text-destructive">
                  {errors.message.message}
                </p>
              )}
              <Button type="submit" className="w-full" disabled={pending}>
                {pending ? "Please wait..." : "Send Email"}
              </Button>
              {message && (
                <p
                  className={`text-sm text-center ${
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
