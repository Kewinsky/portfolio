import { Check } from "lucide-react";
import Section from "./Section";

const priorities = [
  "Full-stack and AI engineering work with real product impact",
  "A collaborative team that values ownership and thoughtful execution",
  "Modern engineering practices, reliable systems, and continuous learning",
];

const LookingForSection = () => {
  return (
    <Section id="looking-for" header="what's next.">
      <div className="max-w-4xl px-4 md:px-8">
        <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          I&apos;m open to full-time and contract opportunities where I can
          combine strong full-stack fundamentals with practical AI engineering
          to ship products people value.
        </p>

        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {priorities.map((priority) => (
            <li
              key={priority}
              className="flex gap-3 rounded-md border border-border bg-muted/40 p-4 text-sm leading-relaxed text-muted-foreground"
            >
              <Check
                className="mt-0.5 size-5 flex-shrink-0 text-foreground"
                aria-hidden="true"
              />
              <span>{priority}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default LookingForSection;
