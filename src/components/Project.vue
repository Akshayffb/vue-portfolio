<script setup>
import Section from "@/components/ui/Section.vue";
import { ArrowUpRight } from "lucide-vue-next";

const projects = [
    {
        type: "Professional",
        title: "Travel Booking Platform",
        description:
            "Contributed to a production travel booking platform by developing booking workflows, role-based access control, reporting modules and production enhancements for day-to-day business operations.",
        technologies: [
            "Laravel",
            "Vue.js",
            "MySQL",
            "REST APIs",
        ],
    },
    {
        type: "Professional",
        title: "SaaS Data Aggregation Platform",
        description:
            "Built backend services that synchronize data from multiple client databases into a centralized platform. Implemented background jobs, API integrations, SFTP processing and DigitalOcean Spaces for secure file storage.",
        technologies: [
            "Laravel",
            "Redis",
            "MySQL",
            "DigitalOcean",
            "REST APIs",
        ],
    },
    {
        type: "Professional",
        title: "Document Management System",
        description:
            "Developed backend modules for document handling, file uploads, business workflows and secure document management while improving overall system reliability and maintainability.",
        technologies: [
            "Laravel",
            "MySQL",
            "REST APIs",
            "DigitalOcean",
        ],
    },
    {
        type: "Professional",
        title: "Appointment Booking Platform",
        description:
            "Built integrations between a WordPress website and a custom appointment management system supporting multiple stores, doctors, services, booking workflows and automated notifications.",
        technologies: [
            "Laravel",
            "WordPress",
            "MySQL",
            "REST APIs",
        ],
    },
    {
        type: "Professional",
        title: "E-Commerce Solutions",
        description:
            "Customized Laravel, WooCommerce and Shopify applications by implementing payment gateways, shipping integrations and business-specific functionality for multiple client projects.",
        technologies: [
            "Laravel",
            "Shopify",
            "WooCommerce",
            "WordPress",
        ],
    },
    {
        type: "Freelance & Personal",
        title: "School Management System",
        description:
            "Designed and developed a complete school management system for a local educational institution, including deployment, hosting configuration and administrative workflows.",
        technologies: [
            "Laravel",
            "MySQL",
            "Bootstrap",
            "Deployment",
        ],
    },
    {
        type: "Personal Project",
        title: "UPI Payment Reminder",
        description:
            "Currently building an application that helps users track pending UPI payments, automate reminders and manage recurring payment follow-ups using scheduled background jobs.",
        technologies: [
            "Laravel",
            "MySQL",
            "Scheduling",
            "Automation",
        ],
    },
];
</script>

<template>
    <Section id="projects" size="lg">
        <div class="max-w-4xl">
            <p class="mb-4 text-sm font-semibold uppercase tracking-[0.3em]" :style="{ color: 'var(--color-primary)' }">
                Featured Projects
            </p>

            <h2 class="text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl"
                :style="{ color: 'var(--color-heading)' }">
                Software built for

                <span
                    class="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
                    real businesses
                </span>
            </h2>

            <p class="mt-8 max-w-3xl text-lg leading-8" :style="{ color: 'var(--color-text)' }">
                A selection of production systems, client projects and personal
                applications I've built or contributed to across travel,
                business automation, SaaS, document management and e-commerce.
            </p>
        </div>

        <div class="mt-20 grid gap-6">
            <article v-for="project in projects" :key="project.title"
                class="group rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                :style="{
                    background: 'var(--color-surface)',
                    borderColor: 'var(--color-border)',
                }">
                <div class="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div class="max-w-3xl">
                        <span class="inline-flex rounded-full px-3 py-1 text-xs font-semibold" :style="{
                            background:
                                'color-mix(in srgb, var(--color-primary) 12%, transparent)',
                            color: 'var(--color-primary)',
                        }">
                            {{ project.type }}
                        </span>

                        <h3 class="mt-5 text-3xl font-semibold" :style="{ color: 'var(--color-heading)' }">
                            {{ project.title }}
                        </h3>

                        <p class="mt-5 leading-8" :style="{ color: 'var(--color-text)' }">
                            {{ project.description }}
                        </p>

                        <div class="mt-8 flex flex-wrap gap-2">
                            <span v-for="tech in project.technologies" :key="tech"
                                class="rounded-full border px-3 py-1.5 text-xs font-medium" :style="{
                                    background: 'var(--color-surface)',
                                    borderColor: 'var(--color-border)',
                                    color: 'var(--color-text)',
                                }">
                                {{ tech }}
                            </span>
                        </div>
                    </div>

                    <button
                        class="flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 group-hover:rotate-45"
                        :style="{
                            background:
                                'color-mix(in srgb, var(--color-primary) 12%, transparent)',
                            color: 'var(--color-primary)',
                        }">
                        <ArrowUpRight :size="20" />
                    </button>
                </div>
            </article>
        </div>
    </Section>
</template>