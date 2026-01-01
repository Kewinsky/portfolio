import dynamic from "next/dynamic";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import VerticalLines from "./components/VerticalLines";
import SectionWrapper from "./components/SectionWrapper";
import React, { Suspense } from "react";

// Lazy load sections for better performance
const AboutSection = dynamic(() => import("./components/AboutSection"), {
  loading: () => <div className="min-h-[400px]" />,
});
const ExperienceSection = dynamic(
  () => import("./components/ExperienceSection"),
  {
    loading: () => <div className="min-h-[400px]" />,
  }
);
const ProjectsSection = dynamic(() => import("./components/ProjectsSection"), {
  loading: () => <div className="min-h-[400px]" />,
});
const StackSection = dynamic(() => import("./components/StackSection"), {
  loading: () => <div className="min-h-[400px]" />,
});
const LookingForSection = dynamic(
  () => import("./components/LookingForSection"),
  {
    loading: () => <div className="min-h-[400px]" />,
  }
);
const ContactSection = dynamic(() => import("./components/ContactSection"), {
  loading: () => <div className="min-h-[400px]" />,
});

const sections: Array<{
  Component: React.ComponentType;
  delay: number;
}> = [
  { Component: AboutSection, delay: 0.1 },
  { Component: ExperienceSection, delay: 0.15 },
  { Component: ProjectsSection, delay: 0.2 },
  { Component: StackSection, delay: 0.1 },
  { Component: LookingForSection, delay: 0.15 },
  { Component: ContactSection, delay: 0.1 },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Navbar />
      <VerticalLines />

      <div className="container mx-auto px-4 md:px-20 relative">
        <div className="relative z-10">
          <SectionWrapper showSeparator={false}>
            <Hero />
          </SectionWrapper>

          <main className="relative">
            {sections.map(({ Component, delay }, index) => (
              <SectionWrapper key={index} delay={delay}>
                <Suspense fallback={<div className="min-h-[400px]" />}>
                  <Component />
                </Suspense>
              </SectionWrapper>
            ))}
          </main>

          <SectionWrapper showSeparator={false} delay={0.1}>
            <Footer />
          </SectionWrapper>
        </div>
      </div>
    </div>
  );
};

export default Home;
