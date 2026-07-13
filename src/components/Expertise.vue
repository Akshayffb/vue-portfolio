<script setup>
import Section from "@/components/ui/Section.vue";
import { Monitor, Server, Workflow, Cloud } from "lucide-vue-next";

const expertise = [
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
            "DigitalOcean",
            "Cloudflare",
            "Ubuntu",
            "Apache",
            "Git"
        ],
    },
];
</script>

<template>
    <Section id="expertise" size="lg" spacing="normal">
        <div class="max-w-4xl">
            <p class="mb-4 text-sm font-semibold uppercase tracking-[0.3em]" :style="{ color: 'var(--color-primary)' }">
                Core Expertise
            </p>

            <h2 class="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
                :style="{ color: 'var(--color-heading)' }">
                Building production software

                <span
                    class="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
                    from idea to deployment
                </span>
            </h2>

            <p class="mt-8 max-w-3xl text-lg leading-8" :style="{ color: 'var(--color-text)' }">
                I design and build maintainable software across the entire development lifecycle, from user interfaces
                and backend systems to APIs, integrations and production deployments, with a strong focus on
                performance, scalability and clean architecture.
            </p>
        </div>

        <div class="mt-20 grid gap-6 md:grid-cols-2">
            <article v-for="item in expertise" :key="item.title"
                class="group rounded-3xl border p-8 lg:p-9 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                :style="{
                    background: 'var(--color-surface)',
                    borderColor: 'var(--color-border)',
                }">
                <!-- Icon -->
                <div class="flex h-14 w-14 items-center justify-center rounded-2xl border shadow-inner transition-all duration-300 group-hover:-translate-y-0.5 group-hover:scale-105 group-hover:-rotate-3"
                    :style="{
                        background:
                            'color-mix(in srgb, var(--color-primary) 12%, transparent)',
                        borderColor:
                            'color-mix(in srgb, var(--color-primary) 20%, transparent)',
                        color: 'var(--color-primary)',
                    }">
                    <component :is="item.icon" :size="28" :stroke-width="2" />
                </div>

                <!-- Title -->
                <h3 class="mt-7 text-2xl font-semibold tracking-tight" :style="{ color: 'var(--color-heading)' }">
                    {{ item.title }}
                </h3>

                <!-- Description -->
                <p class="my-8 leading-8" :style="{ color: 'var(--color-text)' }">
                    {{ item.description }}
                </p>

                <!-- Technologies -->
                <div class="flex flex-wrap gap-2">
                    <span v-for="tech in item.technologies" :key="tech"
                        class="rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-violet-500/20"
                        :style="{
                            background: 'var(--color-surface)',
                            borderColor: 'var(--color-border)',
                            color: 'var(--color-text)',
                        }">
                        {{ tech }}
                    </span>
                </div>
            </article>
        </div>
    </Section>
</template>