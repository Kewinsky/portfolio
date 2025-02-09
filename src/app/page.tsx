import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import StackSection from "./components/StackSection";
import Dock from "./components/Dock";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <main className="container mx-auto px-4 md:px-20">
        <AboutSection />
        <ProjectsSection />
        <StackSection />
        <ContactSection />
      </main>
      <div className="sticky bottom-8 z-50 flex justify-center">
        <Dock />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
