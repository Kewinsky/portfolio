import React, { ReactNode } from "react";

const Section = ({ children }: { children: ReactNode }) => {
  return (
    <section className="flex flex-col justify-center text-center mb-16">
      {children}
    </section>
  );
};

export default Section;
