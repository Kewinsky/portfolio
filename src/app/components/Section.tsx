import React, { ReactNode } from "react";

interface SectionProps {
  id: string;
  header: string;
  children: ReactNode;
}

const Section = ({ id, header, children }: SectionProps) => {
  return (
    <section id={id} className="py-12 md:py-24 lg:py-32">
      <h2 className="text-3xl md:text-5xl font-semibold mb-12">
        {header}
      </h2>
      {children}
    </section>
  );
};

export default Section;
