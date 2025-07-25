import { Button } from "@/components/ui/button";
import { Github, Mail, FileText } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to DevFolio, the portfolio of a professional backend developer specializing in building robust and scalable applications.",
};

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-8rem)] px-4">
      <section className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl md:text-6xl lg:text-7xl">
            John Doe
          </h1>
          <p className="mt-4 text-lg text-muted-foreground sm:text-xl md:text-2xl">
            Backend Developer | Building Scalable & Robust Applications
          </p>
          <p className="max-w-xl mx-auto mt-6 text-base text-muted-foreground md:text-lg">
            I specialize in creating high-performance backend systems with a focus on clean architecture, security, and scalability. Let's build something amazing together.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Button asChild size="lg">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-5 w-5" />
              Resume
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
