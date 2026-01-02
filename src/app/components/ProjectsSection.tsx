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
            description="AI-powered SaaS financial management platform with transaction tracking, multi-account support, and real-time analytics dashboard. Complete subscription system with Stripe integration and AI assistant."
            githubLink="https://github.com/Kewinsky/finwise-nextjs"
            liveDemoLink="https://finwise-nextjs.vercel.app"
            tags={["Next.js 15", "TypeScript", "Supabase", "Stripe", "OpenAI"]}
            showBottomSeparator={true}
            showRightSeparator={true}
          />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.2} distance={30}>
          <ProjectCard
            title="Alertino"
            description="SaaS platform automating apartment hunting in the Polish real estate market with real-time monitoring and instant notifications. Multi-source web scraping system with advanced filtering and dashboard analytics."
            githubLink="https://github.com/AlertinoApp/alertino"
            liveDemoLink="https://alertino.vercel.app"
            tags={[
              "Next.js 15",
              "TypeScript",
              "Supabase",
              "Stripe",
              "TailwindCSS",
            ]}
            showBottomSeparator={true}
            showRightSeparator={true}
          />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.3} distance={30}>
          <ProjectCard
            title="Spendee"
            description="Full-stack personal finance application with JWT authentication and role-based access control. Interactive dashboard with Chart.js visualizations for spending analytics and category breakdowns."
            githubLink="https://github.com/Kewinsky/expense-tracker"
            tags={["Java 19", "Spring Boot", "React", "MySQL", "AWS"]}
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
  showBottomSeparator?: boolean;
  showRightSeparator?: boolean;
}

const ProjectCard = ({
  title,
  description,
  githubLink,
  liveDemoLink,
  tags,
  showBottomSeparator,
  showRightSeparator,
}: ProjectCardProps) => {
  const getTitleClassName = () => {
    const baseClasses = "text-xl md:text-2xl font-semibold";
    if (title === "Finwise") {
      return `${baseClasses} bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`;
    }
    if (title === "Alertino") {
      return `${baseClasses} bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent`;
    }
    return baseClasses;
  };

  return (
    <div className="flex flex-col gap-4 p-6 md:p-8 h-full relative">
      <div className="flex flex-col gap-4 flex-grow">
        <h3 className={getTitleClassName()}>{title}</h3>
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
            <Link
              href={liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Live Demo →
            </Link>
          )}
          <Link
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
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
