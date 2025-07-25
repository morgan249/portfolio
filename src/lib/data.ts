import type { Project, Tech } from "./types";

export const projects: Project[] = [
  {
    title: "E-commerce Platform API",
    description:
      "A robust RESTful API for a full-featured e-commerce platform, including product management, user authentication, order processing, and payment integration with Stripe.",
    techStack: ["Node.js", "TypeScript", "Express", "Prisma", "PostgreSQL", "JWT"],
    githubUrl: "https://github.com",
    demoUrl: "https://github.com",
  },
  {
    title: "Real-time Chat Application",
    description:
      "A real-time chat application using WebSockets for instant messaging, presence status, and private chat rooms. The backend is designed for high concurrency and low latency.",
    techStack: ["Node.js", "Socket.IO", "Redis", "TypeScript", "Docker"],
    githubUrl: "https://github.com",
  },
  {
    title: "Microservices-based Order Fulfillment",
    description:
      "A distributed system for order fulfillment using a microservices architecture. Services communicate asynchronously via RabbitMQ to handle inventory, shipping, and notifications.",
    techStack: ["Docker", "RabbitMQ", "Node.js", "MySQL", "TypeScript"],
    githubUrl: "https://github.com",
    demoUrl: "https://github.com",
  },
  {
    title: "DevFolio Portfolio Website",
    description:
      "This very portfolio website, built with Next.js, Tailwind CSS, and TypeScript. It features a clean design, dark mode, and a contact form with server-side logic.",
    techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Server Actions"],
    githubUrl: "https://github.com",
  },
];

export const techStack: Tech[] = [
  { name: "Node.js" },
  { name: "TypeScript" },
  { name: "Prisma" },
  { name: "MySQL" },
  { name: "PostgreSQL" },
  { name: "Socket.IO" },
  { name: "Redis" },
  { name: "Docker" },
  { name: "RabbitMQ" },
  { name: "Next.js" },
  { name: "Express" },
  { name: "JWT" },
];
