"use client";

import { motion, useReducedMotion } from "motion/react";
import ScrollReveal from "./ScrollReveal";

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center py-20 md:py-32"
    >
      <div className="w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-12 px-4 md:px-8">
          <div className="flex-1 w-full md:w-auto">
            <div className="space-y-4 text-center md:text-left">
              <motion.h1
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.8,
                  ease: [0.21, 1.11, 0.81, 0.99],
                }}
                className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-tight"
              >
                Kevin
                <br />
              </motion.h1>
              <motion.h1
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.8,
                  delay: shouldReduceMotion ? 0 : 0.2,
                  ease: [0.21, 1.11, 0.81, 0.99],
                }}
                className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-tight"
              >
                Tao Anh
              </motion.h1>
              <motion.div
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.6,
                  delay: shouldReduceMotion ? 0 : 0.4,
                  ease: [0.21, 1.11, 0.81, 0.99],
                }}
                className="flex items-center justify-center md:justify-start gap-4 mt-6 md:mt-8"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm md:text-base text-muted-foreground">
                    Available for opportunities
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
          <ScrollReveal
            direction="left"
            delay={0.6}
            duration={0.7}
            className="flex flex-col gap-2 text-center md:text-right"
          >
            <div className="text-sm md:text-base text-muted-foreground">
              Based In Gdańsk, Poland
            </div>
            <div className="text-sm md:text-base font-medium">
              Software Engineer
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
