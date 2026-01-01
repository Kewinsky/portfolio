import Section from "./Section";
import Image from "next/image";

const AboutSection = () => {
  return (
    <Section id="about" header="about.">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-start">
        <div className="space-y-6 md:space-y-8 text-base md:text-lg leading-relaxed text-muted-foreground px-4 md:px-8">
          <p>
            I&apos;m a Software Engineer with over 4 years of experience
            building applications that actually work in production. I&apos;ve
            worked across different industries and I&apos;ve learned that the
            best part of this job is figuring out how to solve real problems,
            not just writing code.
          </p>
          <p>
            Right now I&apos;m working as an Associate Software Engineer, but
            I&apos;m always looking for new challenges. I enjoy diving into new
            technologies and domains, and I&apos;m pretty good at getting up to
            speed quickly. Whether it&apos;s a new framework, a different
            architecture, or understanding a completely new business domain,
            I&apos;m up for it.
          </p>
          <p>
            When I&apos;m not coding, you&apos;ll probably find me exploring new
            places, trying out different cuisines, or working on side projects.
            I believe that having interests outside of work makes me a better
            developer—it keeps me curious and helps me think about problems from
            different angles.
          </p>
        </div>
        <div className="relative w-full max-w-[300px] mx-auto md:max-w-none md:w-64 lg:w-80 aspect-square">
          <Image
            src="/avatar.JPG"
            alt="Kevin Tao Anh"
            fill
            className="object-cover border border-border"
            priority
          />
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
