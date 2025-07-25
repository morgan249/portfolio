import { ContactForm } from "@/components/contact-form";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with me to discuss projects, collaborations, or any other inquiries.',
};

export default function ContactPage() {
  return (
    <div className="container max-w-2xl mx-auto py-12 px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-headline font-bold">Contact Me</h1>
        <p className="text-muted-foreground mt-2">
          Have a project in mind or just want to say hi? Fill out the form below.
        </p>
      </div>
      <ContactForm />
    </div>
  );
}
