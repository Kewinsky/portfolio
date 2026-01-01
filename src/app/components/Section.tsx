import React, { ReactNode } from "react";
import { Separator } from "@/components/ui/separator";

interface SectionProps {
  id: string;
  header: string;
  children: ReactNode;
}

const Section = ({ id, header, children }: SectionProps) => {
  return (
    <section id={id} className="py-16 md:py-24 lg:py-32 relative">
      {header && (
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-semibold">{header}</h2>
          <Separator />
        </div>
      )}
      <div>{children}</div>
    </section>
  );
};

export default Section;
