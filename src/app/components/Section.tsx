import React, { ReactNode } from "react";

interface SectionProps {
  id: string;
  header: string;
  children: ReactNode;
}

const Section = ({ id, header, children }: SectionProps) => {
  return (
    <section id={id} className="min-h-screen py-12 md:py-24 lg:py-32">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
        {header}
      </h2>
      {children}
    </section>
  );
};

export default Section;
