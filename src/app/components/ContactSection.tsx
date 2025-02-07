import ContactForm from "./contact-form";
import Section from "./Section";

const ContactSection = () => {
  return (
    <Section id="contact" header="contact.">
      <div className="mx-auto max-w-2xl">
        <ContactForm />
      </div>
    </Section>
  );
};

export default ContactSection;
