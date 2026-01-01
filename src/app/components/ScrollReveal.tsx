"use client";

import { motion, useInView, MotionProps, useReducedMotion } from "motion/react";
import { useRef, ReactNode } from "react";

interface ScrollRevealProps extends Omit<MotionProps, "initial" | "animate"> {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
  distance?: number;
}

const ScrollReveal = ({
  children,
  className,
  delay = 0,
  duration = 0.6,
  direction = "up",
  distance = 30,
  ...motionProps
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  const getInitial = () => {
    if (shouldReduceMotion) {
      return { opacity: 0 };
    }
    switch (direction) {
      case "up":
        return { opacity: 0, y: distance };
      case "down":
        return { opacity: 0, y: -distance };
      case "left":
        return { opacity: 0, x: distance };
      case "right":
        return { opacity: 0, x: -distance };
      case "fade":
        return { opacity: 0 };
      default:
        return { opacity: 0, y: distance };
    }
  };

  const getAnimate = () => {
    if (shouldReduceMotion) {
      return { opacity: 1 };
    }
    switch (direction) {
      case "up":
      case "down":
        return { opacity: 1, y: 0 };
      case "left":
      case "right":
        return { opacity: 1, x: 0 };
      case "fade":
        return { opacity: 1 };
      default:
        return { opacity: 1, y: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={isInView ? getAnimate() : getInitial()}
      transition={{
        duration: shouldReduceMotion ? 0 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.21, 1.11, 0.81, 0.99],
      }}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;

