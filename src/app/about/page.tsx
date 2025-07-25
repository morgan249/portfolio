import { techStack } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from 'next';
import Image from "next/image";

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Learn more about my background, experience, and the technologies I work with as a backend developer.',
};

export default function AboutPage() {
  return (
    <div className="container max-w-4xl mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-1 flex justify-center">
          <Image
            src="https://placehold.co/400x400.png"
            alt="John Doe"
            width={250}
            height={250}
            className="rounded-full object-cover border-4 border-primary/10 shadow-lg"
            data-ai-hint="developer portrait"
          />
        </div>
        <div className="md:col-span-2">
          <h1 className="text-4xl font-headline font-bold mb-4">About Me</h1>
          <div className="space-y-4 text-muted-foreground text-lg">
            <p>
              Hello! I'm John Doe, a passionate backend developer with a knack for building scalable, efficient, and secure web applications. My journey into programming started with a fascination for how things work behind the scenes, which naturally led me to the world of backend development.
            </p>
            <p>
              I thrive on solving complex problems and architecting systems that can handle real-world demands. With a strong foundation in computer science principles, I enjoy working with a variety of technologies to bring ideas to life. My focus is always on writing clean, maintainable, and well-documented code.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-headline font-bold text-center mb-8">My Tech Stack</h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {techStack.map((tech) => (
            <Badge key={tech.name} variant="secondary" className="text-md px-4 py-2 rounded-lg">
              {tech.name}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
