"use client";

import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  const initialOffset = shouldReduceMotion ? 0 : 24;

  return (
    <section
      id="hero"
      className="flex min-h-[calc(100vh-4rem)] items-center py-20 md:py-28"
    >
      <div className="w-full px-4 md:px-8">
        <motion.p
          initial={{ opacity: 0, y: initialOffset }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
          className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground md:text-sm"
        >
          Full-Stack Software Engineer · AI Engineer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: initialOffset }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.65,
            delay: shouldReduceMotion ? 0 : 0.1,
          }}
          className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl md:text-8xl lg:text-9xl"
        >
          Kewin Tao Anh
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: initialOffset }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.6,
            delay: shouldReduceMotion ? 0 : 0.2,
          }}
          className="mt-8 grid gap-8 md:mt-12 md:grid-cols-[minmax(0,1fr)_auto] md:items-end"
        >
          <div className="max-w-2xl">
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              I build production-ready web, mobile, and AI-powered products,
              from thoughtful interfaces to secure backend systems and reliable
              agent workflows.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="#projects"
                className="inline-flex min-h-11 items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                View selected work
                <ArrowDownRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Get in touch
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="space-y-3 text-sm text-muted-foreground md:text-right">
            <div className="flex items-center gap-2 md:justify-end">
              <span className="size-2 rounded-full bg-emerald-500 motion-safe:animate-pulse" />
              Available for opportunities
            </div>
            <div className="flex items-center gap-2 md:justify-end">
              <MapPin className="size-4" aria-hidden="true" />
              Gdańsk, Poland · Remote
            </div>
            <p>4+ years of commercial experience</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
