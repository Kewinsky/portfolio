import Section from "./Section";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque omnis distinctio officiis earum veniam et asperiores quasi vero quidem nam labore quis mollitia eveniet aliquid accusamus at, molestiae voluptates quas.";

const AboutSection = () => {
  return (
    <Section id="about" header="about.">
      <div className="mx-auto max-w-2xl">
        <TextGenerateEffect words={words} />
      </div>
    </Section>
  );
};

export default AboutSection;
