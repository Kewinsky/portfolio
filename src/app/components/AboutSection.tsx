"use client";

import Image from "next/image";
import Section from "./Section";
import ScrollReveal from "./ScrollReveal";

const credentials = [
  "MSc Computer Science",
  "BEng Computer Science",
  "BEng Ocean Engineering",
];

const AboutSection = () => {
  return (
    <Section id="about" header="about.">
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16">
        <ScrollReveal direction="right" delay={0.1} distance={24}>
          <div className="space-y-6 px-4 text-base leading-relaxed text-muted-foreground md:px-8 md:text-lg">
            <p className="text-xl leading-relaxed text-foreground md:text-2xl">
              I&apos;m a software engineer who enjoys turning ambitious ideas
              into products people can actually use.
            </p>
            <p>
              Over the last 4+ years, I&apos;ve worked across frontend,
              backend, mobile, data, and cloud, taking features from an early
              concept all the way to production.
            </p>
            <p>
              Today, I combine full-stack development with AI engineering. I
              build practical AI features and dependable agent workflows with
              clear boundaries, validation, evaluations, and secure tool use.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {credentials.map((credential) => (
                <span
                  key={credential}
                  className="rounded-md border border-border bg-muted/60 px-3 py-2 text-xs font-medium text-foreground md:text-sm"
                >
                  {credential}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="left" delay={0.2} distance={24}>
          <div className="relative mx-auto aspect-square w-full max-w-[300px] overflow-hidden rounded-md border border-border lg:max-w-none">
            <Image
              src="/avatar.JPG"
              alt="Kewin Tao Anh"
              fill
              sizes="(max-width: 1024px) 300px, 320px"
              className="object-cover"
              priority
            />
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
};

export default AboutSection;
