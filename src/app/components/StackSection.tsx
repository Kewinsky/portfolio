"use client";

import Section from "./Section";
import ScrollReveal from "./ScrollReveal";

const technologies = [
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "TailwindCSS",
      "Blazor",
      "C#",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express",
      "Spring Boot",
      "Hibernate",
      "PostgreSQL",
      "MySQL",
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: ["Docker", "Kubernetes", "AWS", "Azure DevOps", "CI/CD", "Git"],
  },
  {
    category: "Tools",
    skills: ["Jira", "Postman", "Jest", "JUnit", "Mockito", "GitHub", "GitLab"],
  },
];

const StackSection = () => {
  return (
    <Section id="stack" header="stack.">
      <div className="grid gap-8 md:gap-12 md:grid-cols-2 lg:grid-cols-4 px-4 md:px-8">
        {technologies.map((tech, index) => (
          <ScrollReveal
            key={tech.category}
            direction="up"
            delay={index * 0.1}
            distance={30}
          >
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-semibold">
                {tech.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {tech.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block px-3 py-1 text-xs md:text-sm bg-muted rounded border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
};

export default StackSection;
