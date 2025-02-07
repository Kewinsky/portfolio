import ProjectCard from "./project-card";
import Section from "./Section";

const ProjectsSection = () => {
  return (
    <Section id="projects" header="projects.">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          title="E-commerce Platform"
          description="A full-stack e-commerce platform built with Next.js, Prisma, and Stripe integration."
          image="/placeholder.svg?height=400&width=600"
          link="https://github.com"
          tags={["Next.js", "Prisma", "Stripe"]}
        />
        <ProjectCard
          title="Task Management App"
          description="A real-time task management application with team collaboration features."
          image="/placeholder.svg?height=400&width=600"
          link="https://github.com"
          tags={["React", "Node.js", "Socket.io"]}
        />
        <ProjectCard
          title="AI Chat Interface"
          description="An AI-powered chat interface with natural language processing capabilities."
          image="/placeholder.svg?height=400&width=600"
          link="https://github.com"
          tags={["OpenAI", "Next.js", "TailwindCSS"]}
        />
      </div>
    </Section>
  );
};

export default ProjectsSection;
