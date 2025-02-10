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
          title="ecommerce_app."
          description="A full-stack e-commerce platform for mechanical keyboard enthusiasts."
          image="/shop.png"
          link="https://github.com/Kewinsky/mechanix"
          tags={[
            "JavaScript",
            "React",
            "Sass",
            "Java",
            "Spring Boot",
            "Hibernate",
            "MySQL",
          ]}
        />
        <ProjectCard
          title="expense_tracker."
          description="A full-stack web application for tracking expenses, allowing users to perform CRUD operations and generate reports."
          image="/tracker.png"
          link="https://github.com/Kewinsky/expense-tracker"
          tags={[
            "JavaScript",
            "React",
            "Java",
            "Spring Boot",
            "Hibernate",
            "MySQL",
            "AWS",
          ]}
        />
        <ProjectCard
          title="react_sandbox."
          description="A React app designed for practicing and experimenting with various React concepts, technologies, and functionalities."
          image="/sandbox.png"
          link="https://github.com/Kewinsky/react-sandbox"
          tags={["JavaScript", "React", "Vite", "External APIs"]}
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
    <Card className="flex flex-col h-full overflow-hidden">
      <div className="relative aspect-video">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-4 flex-grow">
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
      <CardFooter className="p-4 pt-0 mt-auto">
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
