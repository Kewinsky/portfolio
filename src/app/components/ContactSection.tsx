"use client";

import { Textarea } from "@/components/ui/textarea";
import { submitContactForm } from "../actions";
import Section from "./Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useState } from "react";

const ContactSection = () => {
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(formData: FormData) {
    setPending(true);
    try {
      const response = await submitContactForm(formData);
      setMessage(response.message);
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <Section id="contact" header="contact.">
      <div className="mx-auto max-w-2xl">
        <Card className="p-6">
          <form action={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <Input id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input id="email" name="email" type="email" required />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <Textarea id="message" name="message" required />
            </div>
            <Button type="submit" className="w-full" disabled={pending}>
              {pending ? "Sending..." : "Send Message"}
            </Button>
            {message && (
              <p className="text-sm text-center mt-4 text-muted-foreground">
                {message}
              </p>
            )}
          </form>
        </Card>
      </div>
    </Section>
  );
};

export default ContactSection;
