import Section from "./Section";

const AboutSection = () => {
  return (
    <Section id="about" header="about.">
      {/* <div className="mx-auto max-w-2xl">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
        omnis distinctio officiis earum veniam et asperiores quasi vero quidem
        <TextAnimate animation="blurInUp" by="character" startOnView={true}>
          nam labore quis mollitia eveniet aliquid accusamus at, molestiae
          voluptates quas.
        </TextAnimate>
      </div> */}
      <div className="mx-auto max-w-2xl">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
        omnis distinctio officiis earum veniam et asperiores quasi vero quidem
        nam labore quis mollitia eveniet aliquid accusamus at, molestiae
        voluptates quas.
      </div>
    </Section>
  );
};

export default AboutSection;
