import { Monitor, Server, Workflow, Cloud } from "lucide-vue-next";

export const EXPERTISES = [
  {
    icon: Monitor,
    title: "Full-Stack Web Applications",
    description:
      "Building responsive and maintainable web applications with intuitive user interfaces, reusable components and clean architecture.",
    technologies: ["Vue.js", "JavaScript", "Bootstrap", "Vite", "Webpack"],
  },
  {
    icon: Server,
    title: "Scalable Backend Systems",
    description:
      "Developing scalable backend systems, REST APIs, authentication, business workflows, background jobs and database architectures.",
    technologies: ["Laravel", "MySQL", "Redis", "Queues"],
  },
  {
    icon: Workflow,
    title: "Integrations & Automation",
    description:
      "Connecting third-party services, payment gateways, SFTP servers and automated workflows to improve business processes and reduce manual work.",
    technologies: [
      "REST APIs",
      "Payment Gateways",
      "SFTP",
      "Webhooks",
      "Automation",
    ],
  },
  {
    icon: Cloud,
    title: "Deployment & Infrastructure",
    description:
      "Deploying, monitoring and maintaining production applications while managing cloud infrastructure, domains, SSL, storage and server environments.",
    technologies: [
      "DigitalOcean spaces",
      "Cloudflare",
      "Ubuntu",
      "Apache",
      "Git",
    ],
  },
];
