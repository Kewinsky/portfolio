"use client";

import Section from "./Section";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import ScrollReveal from "./ScrollReveal";

const ProjectsSection = () => {
  return (
    <Section id="projects" header="projects.">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <ScrollReveal direction="up" delay={0.1} distance={30}>
          <ProjectCard
            title="Finwise"
            description="Enhanced expense tracking platform with AI-powered insights and robust financial reporting. Built as an improved version of Expense Tracker with modern tech stack and OpenAI integration."
            githubLink="https://github.com/Kewinsky/finwise"
            liveDemoLink="https://finwise-demo.vercel.app"
            tags={["Next.js", "TypeScript", "Supabase", "OpenAI"]}
            featured
            showBottomSeparator={true}
            showRightSeparator={true}
          />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.2} distance={30}>
          <ProjectCard
            title="Expense Tracker"
            description="Full-stack expense management application with CRUD operations and reporting capabilities. Deployed on AWS with robust backend architecture."
            githubLink="https://github.com/Kewinsky/expense-tracker"
            tags={["React", "Spring Boot", "MySQL", "AWS"]}
            fullStack
            showBottomSeparator={true}
            showRightSeparator={true}
          />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.3} distance={30}>
          <ProjectCard
            title="E-commerce App"
            description="Frontend e-commerce platform for mechanical keyboard enthusiasts. Clean, responsive design with modern React patterns."
            githubLink="https://github.com/Kewinsky/mechanix"
            tags={["React", "JavaScript", "Sass"]}
            frontend
            showBottomSeparator={false}
            showRightSeparator={false}
          />
        </ScrollReveal>
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
  showBottomSeparator?: boolean;
  showRightSeparator?: boolean;
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
  showBottomSeparator,
  showRightSeparator,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-col gap-4 p-6 md:p-8 h-full relative">
      <div className="flex flex-col gap-4 flex-grow">
        <div className="flex flex-row items-center gap-2">
          <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
          <div className="flex gap-2 flex-wrap">
            {featured && (
              <span className="inline-block px-2 py-1 bg-muted rounded text-xs font-medium border border-border">
                Featured
              </span>
            )}
            {fullStack && (
              <span className="inline-block px-2 py-1 bg-muted rounded text-xs font-medium border border-border">
                Full-Stack
              </span>
            )}
            {frontend && (
              <span className="inline-block px-2 py-1 bg-muted rounded text-xs font-medium border border-border">
                Frontend
              </span>
            )}
          </div>
        </div>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed flex-grow">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-block px-3 py-1 text-xs bg-muted rounded border border-border"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4 text-sm text-muted-foreground pt-4 mt-auto">
          {liveDemoLink && (
            <Link href={liveDemoLink} target="_blank" rel="noopener noreferrer">
              Live Demo →
            </Link>
          )}
          <Link href={githubLink} target="_blank" rel="noopener noreferrer">
            GitHub →
          </Link>
        </div>
      </div>
      {showBottomSeparator && (
        <Separator className="lg:hidden absolute bottom-0 left-0 right-0" />
      )}
      {showRightSeparator && (
        <Separator
          orientation="vertical"
          className="hidden lg:block absolute right-0 top-0 bottom-0"
        />
      )}
    </div>
  );
};

export default ProjectsSection;
