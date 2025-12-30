import Section from "./Section";
import { Card } from "@/components/ui/card";

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
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {technologies.map((tech) => (
          <Card key={tech.category} className="p-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">{tech.category}</h3>
              <div className="flex flex-wrap gap-2">
                {tech.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block px-3 py-1.5 bg-muted rounded-md text-sm border border-border cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default StackSection;
