"use client";

import Section from "./Section";
import Link from "next/link";

const ProjectsSection = () => {
  return (
    <Section id="projects" header="projects.">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          title="Finwise"
          description="Enhanced expense tracking platform with AI-powered insights and robust financial reporting. Built as an improved version of Expense Tracker with modern tech stack and OpenAI integration."
          githubLink="https://github.com/Kewinsky/finwise"
          liveDemoLink="https://finwise-demo.vercel.app"
          tags={["Next.js", "TypeScript", "Supabase", "OpenAI"]}
          featured
        />
        <ProjectCard
          title="Expense Tracker"
          description="Full-stack expense management application with CRUD operations and reporting capabilities. Deployed on AWS with robust backend architecture."
          githubLink="https://github.com/Kewinsky/expense-tracker"
          tags={["React", "Spring Boot", "MySQL", "AWS"]}
          fullStack
        />
        <ProjectCard
          title="E-commerce App"
          description="Frontend e-commerce platform for mechanical keyboard enthusiasts. Clean, responsive design with modern React patterns."
          githubLink="https://github.com/Kewinsky/mechanix"
          tags={["React", "JavaScript", "Sass"]}
          frontend
        />
      </div>
    </Section>
  );
};

interface ProjectCardProps {
  title: string;
  description: string;
  githubLink: string;
  liveDemoLink?: string;
  tags: string[];
  featured?: boolean;
  fullStack?: boolean;
  frontend?: boolean;
}

const ProjectCard = ({
  title,
  description,
  githubLink,
  liveDemoLink,
  tags,
  featured,
  fullStack,
  frontend,
}: ProjectCardProps) => {
  return (
    <div className="block p-8 border rounded-lg bg-card hover:bg-accent/50 transition-colors h-full">
      <div className="flex flex-col h-full gap-4">
        <div className="flex items-center gap-4">
          <h3 className="text-2xl font-semibold">{title}</h3>
          {featured && (
            <span className="inline-block px-3 py-1 bg-primary/20 rounded text-xs font-semibold">
              Featured
            </span>
          )}
          {fullStack && (
            <span className="inline-block px-3 py-1 bg-primary/20 rounded text-xs font-semibold">
              Full-Stack
            </span>
          )}
          {frontend && (
            <span className="inline-block px-3 py-1 bg-primary/20 rounded text-xs font-semibold">
              Frontend
            </span>
          )}
        </div>
        <p className="text-muted-foreground leading-relaxed flex-grow">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 items-start">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-block px-3 py-1 bg-muted rounded text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto text-sm text-muted-foreground pt-4">
          {liveDemoLink && (
            <Link
              href={liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 underline hover:text-foreground"
            >
              Live Demo →
            </Link>
          )}
          <Link
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground"
          >
            GitHub →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
