import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Section from "./Section";
import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";

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
          title="Expense Tracker App"
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

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

const ProjectCard = ({
  title,
  description,
  image,
  link,
  tags,
}: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-video">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link
          href={link}
          target="_blank"
          className="inline-flex items-center gap-2 text-sm hover:underline"
        >
          <Github className="h-4 w-4" />
          View on GitHub
        </Link>
      </CardFooter>
    </Card>
  );
};
export default ProjectsSection;
