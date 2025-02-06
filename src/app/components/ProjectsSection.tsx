import Image from "next/image";
import SectionHeader from "./SectionHeader";
import Section from "./Section";

const projects = [
  {
    title: "Project 1",
    src: "https://placehold.co/300x200?text=Project+1",
  },
  {
    title: "Project 2",
    src: "https://placehold.co/300x200?text=Project+2",
  },
  {
    title: "Project 3",
    src: "https://placehold.co/300x200?text=Project+3",
  },
  {
    title: "Project 4",
    src: "https://placehold.co/300x200?text=Project+4",
  },
  {
    title: "Project 5",
    src: "https://placehold.co/300x200?text=Project+5",
  },
  {
    title: "Project 6",
    src: "https://placehold.co/300x200?text=Project+6",
  },
  {
    title: "Project 7",
    src: "https://placehold.co/300x200?text=Project+7",
  },
  {
    title: "Project 8",
    src: "https://placehold.co/300x200?text=Project+8",
  },
  {
    title: "Project 9",
    src: "https://placehold.co/300x200?text=Project+9",
  },
];

const ProjectsSection = () => {
  return (
    <Section>
      <SectionHeader header="projects." />
      <div className="grid grid-cols-3 gap-4">
        {projects.length &&
          projects.map((p) => <Project key={p.title} project={p} />)}
      </div>
    </Section>
  );
};

interface ProjectProps {
  project: {
    title: string;
    src: string;
  };
}

const Project = ({ project }: ProjectProps) => {
  return (
    <div className="flex justify-center">
      <Image alt={project.title} src={project.src} width={300} height={200} />
      <h2>{project.title}</h2>
    </div>
  );
};

export default ProjectsSection;
