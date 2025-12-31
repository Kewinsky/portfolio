import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import StackSection from "./components/StackSection";
import ExperienceSection from "./components/ExperienceSection";
import LookingForSection from "./components/LookingForSection";
import VerticalLines from "./components/VerticalLines";
import SectionWrapper from "./components/SectionWrapper";
import React from "react";

const sections: React.ComponentType[] = [
  AboutSection,
  ExperienceSection,
  ProjectsSection,
  StackSection,
  LookingForSection,
  ContactSection,
];

const Home = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Navbar />
      <VerticalLines />

      <div className="container mx-auto px-4 md:px-20 relative">
        <div className="relative z-10">
          <SectionWrapper>
            <Hero />
          </SectionWrapper>

          <main className="relative">
            {sections.map((Section, index) => (
              <SectionWrapper key={index}>
                <Section />
              </SectionWrapper>
            ))}
          </main>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
