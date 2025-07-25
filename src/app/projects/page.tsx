import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/project-card";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A selection of my projects, showcasing my skills in backend development and system design.',
};


export default function ProjectsPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-headline font-bold mb-8 text-center">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
