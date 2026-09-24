"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import Section from "./Section";
import ScrollReveal from "./ScrollReveal";

interface ProjectLink {
  label: string;
  href: string;
}

interface Project {
  title: string;
  description: string;
  titleClassName: string;
  tags: string[];
  links: ProjectLink[];
}

const projects: Project[] = [
  {
    title: "Vericar",
    description:
      "A production mobile app for vehicle history, ownership costs, reminders, public reports, and AI-generated marketplace listings.",
    titleClassName: "from-amber-500 to-orange-700",
    tags: ["React Native", "Expo", "Supabase", "OpenAI", "RevenueCat"],
    links: [
      { label: "Website", href: "https://www.vericar.pl" },
      {
        label: "App Store",
        href: "https://apps.apple.com/app/vericar/id6768652437",
      },
    ],
  },
  {
    title: "Finwise",
    description:
      "A finance platform focused on clear insights, intuitive money management, and an AI-assisted product experience.",
    titleClassName: "from-blue-600 to-violet-600",
    tags: ["Next.js", "TypeScript", "Supabase", "Stripe", "OpenAI"],
    links: [
      {
        label: "Visit Finwise",
        href: "https://finwise-nextjs.vercel.app/",
      },
    ],
  },
  {
    title: "Alertino",
    description:
      "A real estate alerting platform with multi-source monitoring, advanced filters, and instant notifications.",
    titleClassName: "from-emerald-600 to-cyan-600",
    tags: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Automation",
      "Tailwind CSS",
    ],
    links: [
      {
        label: "Visit Alertino",
        href: "https://alertino.vercel.app/",
      },
    ],
  },
];

const additionalProjects: Project[] = [
  {
    title: "Spendee",
    description:
      "A full-stack personal finance app with secure authentication, role-based access, and interactive spending analytics.",
    titleClassName: "from-sky-600 to-indigo-600",
    tags: ["Java", "Spring Boot", "React", "MySQL", "AWS"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Kewinsky/expense-tracker",
      },
    ],
  },
];

const ProjectsSection = () => {
  const [showMoreProjects, setShowMoreProjects] = useState(false);

  return (
    <Section id="projects" header="selected work." isProjectSection>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ScrollReveal
            key={project.title}
            direction="up"
            delay={index * 0.1}
            distance={24}
          >
            <ProjectCard
              project={project}
              showBottomSeparator
              showRightSeparator={index < projects.length - 1}
            />
          </ScrollReveal>
        ))}
      </div>

      {showMoreProjects ? (
        <div
          id="projects-extra"
          className="grid grid-cols-1 border-t border-border lg:grid-cols-3"
        >
          {additionalProjects.map((project) => (
            <ScrollReveal
              key={project.title}
              direction="up"
              delay={0.1}
              distance={24}
            >
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      ) : null}

      <div className="flex justify-center border-t border-border pt-8 md:pt-10">
        <button
          type="button"
          onClick={() => setShowMoreProjects((isVisible) => !isVisible)}
          className="min-h-11 px-4 text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:text-base"
          aria-controls="projects-extra"
          aria-expanded={showMoreProjects}
        >
          {showMoreProjects ? "Show less" : "View more"}
        </button>
      </div>
    </Section>
  );
};

interface ProjectCardProps {
  project: Project;
  showBottomSeparator?: boolean;
  showRightSeparator?: boolean;
}

const ProjectCard = ({
  project,
  showBottomSeparator,
  showRightSeparator,
}: ProjectCardProps) => {
  return (
    <article className="relative flex h-full min-h-[330px] flex-col gap-5 p-6 md:p-8">
      <h3
        className={`bg-gradient-to-r ${project.titleClassName} bg-clip-text text-xl font-semibold text-transparent md:text-2xl`}
      >
        {project.title}
      </h3>

      <p className="flex-grow text-sm leading-relaxed text-muted-foreground md:text-base">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded border border-border bg-muted px-3 py-1 text-xs"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-x-5 gap-y-2 pt-2 text-sm font-medium">
        {project.links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-1.5 py-2 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {link.label}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        ))}
      </div>

      {showBottomSeparator ? (
        <Separator className="absolute bottom-0 left-0 right-0 lg:hidden" />
      ) : null}
      {showRightSeparator ? (
        <Separator
          orientation="vertical"
          className="absolute bottom-0 right-0 top-0 hidden lg:block"
        />
      ) : null}
    </article>
  );
};

export default ProjectsSection;
