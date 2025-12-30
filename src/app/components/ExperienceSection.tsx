import Section from "./Section";

const ExperienceSection = () => {
  const experiences = [
    {
      date: "Mar 2025 - Present",
      position: "Software Engineer",
      company: "Our Future Health (Healthcare)",
      description:
        "Developing a Next.js application for patients and doctors to track laboratory sample collection. Working on a contract basis to build scalable healthcare solutions with modern web technologies.",
      tasks: [
        "Next.js, React",
        "Docker, Kubernetes",
        "Azure DevOps",
        "Building patient and doctor-facing applications",
        "Laboratory sample tracking system",
      ],
    },
    {
      date: "Jan 2024 - Feb 2025",
      position: "Software Engineer",
      company: "Gov.uk (Public Sector)",
      description:
        "Developed the Adult Social Care system for gov.uk, enabling reimbursement of upskilling training for UK citizens. Built a comprehensive platform with focus on accessibility and government compliance standards.",
      tasks: [
        "TypeScript, Node.js, Express.js",
        "GovUK Framework",
        "Redis, PostgreSQL",
        "Docker, AWS (Lambda, API Gateway, Aurora PostgreSQL)",
        "Government digital services",
      ],
    },
    {
      date: "Oct 2022 - Dec 2023",
      position: "Software Engineer",
      company: "Global Screening Services (Fintech)",
      description:
        "Worked on a team responsible for one of the microservices in a financial screening platform. The system consisted of 6 microservices for comprehensive client and transaction screenings on a global scale.",
      tasks: [
        "Java 17, Spring Boot",
        "Apache Kafka, PostgreSQL",
        "AWS (EC2, SQS, S3, CloudWatch)",
        "Microservices architecture",
        "Message reliability and monitoring",
      ],
    },
    {
      date: "Apr 2022 - Sept 2022",
      position: "Junior .NET Developer",
      company: "Nsure (Insurance)",
      description:
        "Developed a full-stack web application for a digital insurance agency. Built a platform that enables users to compare quotes and buy home and auto insurance online in minutes, competing with 60+ top-rated insurers.",
      tasks: [
        "C# .NET, Blazor",
        "Xamarin",
        "MySQL",
        "Azure DevOps",
        "Full-stack web development",
      ],
    },
  ];

  return (
    <Section id="experience" header="experience.">
      <div className="max-w-4xl mx-auto space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            <div className="grid md:grid-cols-[200px_1fr] mb-6">
              <div className="text-sm text-muted-foreground">{exp.date}</div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">{exp.position}</h3>
                <p className="text-muted-foreground mb-4">{exp.company}</p>
              </div>
            </div>
            <div className="md:ml-[200px]">
              <p className="mb-4 leading-relaxed">{exp.description}</p>
              <div className="space-y-2">
                {exp.tasks.map((task, taskIndex) => (
                  <div key={taskIndex} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground flex-shrink-0" />
                    <span className="text-sm">{task}</span>
                  </div>
                ))}
              </div>
            </div>
            {index < experiences.length - 1 && (
              <div className="mt-8 pt-8 border-t" />
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ExperienceSection;
