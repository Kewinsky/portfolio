"use client";

import Section from "./Section";
import ScrollReveal from "./ScrollReveal";

const technologies = [
  {
    category: "Frontend & Mobile",
    skills: [
      "React",
      "Next.js",
      "React Native",
      "Expo",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend & Data",
    skills: [
      "Node.js",
      "Java",
      "Spring Boot",
      "Supabase",
      "PostgreSQL",
      "MySQL",
      "Redis",
    ],
  },
  {
    category: "Cloud & Quality",
    skills: [
      "AWS",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Jest",
      "Sentry",
    ],
  },
  {
    category: "AI Engineering",
    skills: [
      "OpenAI API",
      "LLM Integrations",
      "AI Agents",
      "Tool Use",
      "Structured Outputs",
      "Evals",
      "Guardrails",
    ],
  },
  {
    category: "Agentic Workflows",
    skills: [
      "Skills",
      "MCP",
      "Context Engineering",
      "Prompt Engineering",
      "Scoped Agents",
      "Approval Gates",
    ],
  },
  {
    category: "AI Development Tools",
    skills: ["Cursor", "Codex", "GitHub Copilot", "Claude Code"],
  },
];

const StackSection = () => {
  return (
    <Section id="stack" header="stack & AI.">
      <div className="mb-10 max-w-3xl px-4 text-base leading-relaxed text-muted-foreground md:px-8 md:text-lg">
        I use AI as an engineering capability, not a shortcut. That means
        reliable workflows, scoped tool access, runtime validation,
        deterministic tests, evaluations, and human approval where it matters.
      </div>

      <div className="grid gap-8 px-4 md:grid-cols-2 md:gap-12 md:px-8 lg:grid-cols-3">
        {technologies.map((technology, index) => (
          <ScrollReveal
            key={technology.category}
            direction="up"
            delay={index * 0.07}
            distance={24}
          >
            <div className="space-y-4">
              <h3 className="text-lg font-semibold md:text-xl">
                {technology.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {technology.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded border border-border bg-muted px-3 py-1 text-xs md:text-sm"
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
