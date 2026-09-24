import React, { ReactNode } from "react";
import { Separator } from "@/components/ui/separator";

interface SectionProps {
  id: string;
  header: string;
  children: ReactNode;
  isProjectSection?: boolean;
}

const Section = ({
  id,
  header,
  children,
  isProjectSection = false,
}: SectionProps) => {
  return (
    <section id={id} className="py-16 md:py-24 lg:py-32 relative">
      {header && (
        <div className={isProjectSection ? undefined : "mb-8 md:mb-12"}>
          <h2 className="text-2xl font-semibold leading-none md:text-4xl">
            {header}
          </h2>
          <Separator className="-mt-1.5" />
        </div>
      )}
      <div>{children}</div>
    </section>
  );
};

export default Section;
