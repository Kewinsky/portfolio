"use client";

import React, { ReactNode } from "react";
import ScrollReveal from "./ScrollReveal";

interface SectionWrapperProps {
  children: ReactNode;
  showSeparator?: boolean;
  delay?: number;
}

const SectionWrapper = ({
  children,
  showSeparator = true,
  delay = 0,
}: SectionWrapperProps) => {
  return (
    <ScrollReveal
      direction="up"
      distance={40}
      delay={delay}
      duration={0.7}
      className="relative"
    >
      {children}
      {showSeparator && (
        <>
          <div className="absolute left-1/2 bottom-0 w-screen h-px bg-border -translate-x-1/2" />
          {/* Cross markers at intersection with vertical lines - desktop only */}
          <div className="hidden md:block absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 z-20 pointer-events-none">
            <div className="relative w-5 h-5">
              {/* Horizontal line */}
              <div className="absolute top-1/2 left-0 w-5 h-0.5 bg-white -translate-y-1/2"></div>
              {/* Vertical line */}
              <div className="absolute left-1/2 top-0 w-0.5 h-5 bg-white -translate-x-1/2"></div>
            </div>
          </div>
          <div className="hidden md:block absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 z-20 pointer-events-none">
            <div className="relative w-5 h-5">
              {/* Horizontal line */}
              <div className="absolute top-1/2 left-0 w-5 h-0.5 bg-white -translate-y-1/2"></div>
              {/* Vertical line */}
              <div className="absolute left-1/2 top-0 w-0.5 h-5 bg-white -translate-x-1/2"></div>
            </div>
          </div>
        </>
      )}
    </ScrollReveal>
  );
};

export default SectionWrapper;
