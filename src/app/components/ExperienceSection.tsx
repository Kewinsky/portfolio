"use client";

import Section from "./Section";
import ScrollReveal from "./ScrollReveal";

const ExperienceSection = () => {
  const experiences = [
    {
      date: "Mar 2025 - Present",
      position: "Software Engineer",
      company: "Our Future Health (Healthcare)",
      description:
        "Developing a Next.js application for patients and doctors to track laboratory sample collection. Working on a contract basis to build scalable healthcare solutions with modern web technologies.",
      tasks: [
        "Next.js",
        "React",
        "TypeScript",
        "Docker",
        "Kubernetes",
        "Azure DevOps",
      ],
    },
    {
      date: "Jan 2024 - Feb 2025",
      position: "Software Engineer",
      company: "Gov.uk (Public Sector)",
      description:
        "Developed the Adult Social Care system for gov.uk, enabling reimbursement of upskilling training for UK citizens. Built a comprehensive platform with focus on accessibility and government compliance standards.",
      tasks: [
        "Node.js",
        "Express.js",
        "TypeScript",
        "GovUK Framework",
        "PostgreSQL",
        "Docker",
        "AWS",
      ],
    },
    {
      date: "Oct 2022 - Dec 2023",
      position: "Software Engineer",
      company: "Global Screening Services (Fintech)",
      description:
        "Worked on a team responsible for one of the microservices in a financial screening platform. The system consisted of 6 microservices for comprehensive client and transaction screenings on a global scale.",
      tasks: [
        "Java 19",
        "Spring Boot",
        "Apache Kafka",
        "PostgreSQL",
        "AWS",
        "Microservices",
      ],
    },
    {
      date: "Apr 2022 - Sept 2022",
      position: "Junior .NET Developer",
      company: "Nsure (Insurance)",
      description:
        "Developed a full-stack web application for a digital insurance agency. Built a platform that enables users to compare quotes and buy home and auto insurance online in minutes, competing with 60+ top-rated insurers.",
      tasks: ["C# .NET", "Blazor", "Xamarin", "MySQL", "Azure DevOps"],
    },
  ];

  return (
    <Section id="experience" header="experience.">
      <div className="max-w-5xl space-y-16 md:space-y-20 px-4 md:px-8">
        {experiences.map((exp, index) => (
          <ScrollReveal
            key={index}
            direction="up"
            delay={index * 0.1}
            distance={30}
          >
            <div className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-12">
              <div className="text-sm md:text-base text-muted-foreground">
                {exp.date}
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-1">
                    {exp.position}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {exp.company}
                  </p>
                </div>
                <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.tasks.map((task, taskIndex) => (
                    <span
                      key={taskIndex}
                      className="inline-block px-3 py-1 text-xs md:text-sm bg-muted rounded border border-border"
                    >
                      {task}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
};

export default ExperienceSection;
