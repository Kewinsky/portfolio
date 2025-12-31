import Section from "./Section";
import { Check } from "lucide-react";

const LookingForSection = () => {
  return (
    <Section id="looking-for" header="what i'm looking for?">
      <div className="max-w-4xl">
        <div className="space-y-6 md:space-y-8 text-base md:text-lg leading-relaxed text-muted-foreground px-4 md:px-8">
          <p>
            I&apos;m looking for full-time Software Engineer positions that
            challenge me and let me use what I&apos;ve learned across different
            projects. I want to work on something that matters and with people I
            can learn from.
          </p>
          <div className="mt-8 md:mt-12">
            <h3 className="text-base md:text-lg font-semibold mb-6 text-foreground">
              What matters to me:
            </h3>
            <ul className="space-y-4 list-none pl-0">
              <li className="flex items-start gap-3">
                <Check className="mt-1 w-5 h-5 text-foreground flex-shrink-0" />
                <span>
                  Working with modern tech stacks — I like staying current and
                  learning new things
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 w-5 h-5 text-foreground flex-shrink-0" />
                <span>
                  Teams where I can both contribute and learn — collaboration
                  over competition
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 w-5 h-5 text-foreground flex-shrink-0" />
                <span>
                  Projects that actually make a difference — I want to build
                  things people use
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 w-5 h-5 text-foreground flex-shrink-0" />
                <span>
                  Remote or hybrid work — flexibility helps me do my best work
                </span>
              </li>
            </ul>
          </div>
          <p className="mt-8 md:mt-12">
            I&apos;m based in Gdańsk, Poland, but I&apos;m open to remote
            positions anywhere. Location isn&apos;t a dealbreaker if the work is
            interesting.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default LookingForSection;
