<script setup>
import Section from "@/components/ui/Section.vue";

const experience = {
    role: "Associate Software Engineer",
    company: "Madgeek Pvt. Ltd.",
    duration: "2023 — Present",

    summary:
        "Building and maintaining production web applications, business platforms and integrations using Laravel, Vue.js and modern backend technologies. Contributing across architecture, development, deployments and long-term product improvements.",

    projects: [
        {
            title: "Travel Booking Platform",
            description:
                "Developed and enhanced a production travel booking platform by implementing booking workflows, role-based access, reporting modules and day-to-day feature improvements for business operations.",
            stack: ["Laravel", "Vue.js", "MySQL"],
            highlights: [
                "Booking workflows",
                "Role-based access",
                "Reporting modules",
                "Production support",
            ],
        },

        {
            title: "Multi-Tenant SaaS Data Platform",
            description:
                "Built backend services that synchronize business data from multiple client databases into a centralized platform, process files, integrate third-party systems and manage cloud storage.",
            stack: [
                "Laravel",
                "Redis",
                "REST APIs",
                "DigitalOcean Spaces",
            ],
            highlights: [
                "Database synchronization",
                "Redis queues",
                "File processing",
                "API integrations",
            ],
        },

        {
            title: "Document Management System",
            description:
                "Developing document management features including secure file uploads, metadata management, cloud storage integration and workflow automation for production environments.",
            stack: [
                "Laravel",
                "MySQL",
                "DigitalOcean",
                "REST APIs",
            ],
            highlights: [
                "Document workflows",
                "Cloud storage",
                "Metadata management",
                "Automation",
            ],
        },

        {
            title: "Healthcare Appointment Management Platform",
            description:
                "Built integrations between WordPress websites and a centralized appointment management system supporting multiple clinics, doctors, services, notifications and booking workflows.",
            stack: [
                "Laravel",
                "WordPress",
                "REST APIs",
                "MySQL",
            ],
            highlights: [
                "Appointment booking",
                "Doctor scheduling",
                "Notifications",
                "Multi-location support",
            ],
        },

        {
            title: "Laravel E-Commerce Solutions",
            description:
                "Customized and extended Laravel, WooCommerce and Shopify platforms with payment gateways, shipping integrations and business-specific functionality for client requirements.",
            stack: [
                "Laravel",
                "Shopify",
                "WooCommerce",
                "WordPress",
            ],
            highlights: [
                "Payment gateways",
                "Shipping APIs",
                "Store customization",
                "Maintenance",
            ],
        },

        {
            title: "Business Integrations & Internal Tools",
            description:
                "Developed integrations and internal business modules including Bugzilla integration, notification systems, REST APIs, scheduled jobs, background processing and workflow automation.",
            stack: [
                "Laravel",
                "REST APIs",
                "Redis",
                "Automation",
            ],
            highlights: [
                "Bugzilla integration",
                "Background jobs",
                "Notification systems",
                "Business workflows",
            ],
        },
    ],

    contributions: [
        "Designed and developed REST APIs",
        "Built production-ready Laravel applications",
        "Integrated third-party platforms and services",
        "Developed scalable backend systems",
        "Optimized MySQL database queries",
        "Implemented Redis queues and scheduled jobs",
        "Managed DigitalOcean infrastructure",
        "Configured Cloudflare, DNS and deployments",
        "Worked on live production bug fixes and feature enhancements",
    ],
};
</script>

<template>
    <Section id="experience" size="lg">
        <div class="max-w-4xl">
            <p class="mb-4 text-sm font-semibold uppercase tracking-[0.3em]" :style="{ color: 'var(--color-primary)' }">
                Professional Experience
            </p>

            <h2 class="text-4xl font-semibold leading-[1.15] tracking-tight md:text-5xl lg:text-6xl"
                :style="{ color: 'var(--color-heading)' }">
                Building software that powers
                <span
                    class="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
                    real businesses
                </span>
            </h2>

            <p class="mt-8 max-w-3xl text-lg leading-8" :style="{ color: 'var(--color-text)' }">
                Nearly three years of experience building production software
                across travel, SaaS and e-commerce platforms, contributing to
                scalable backend systems, integrations and business-critical
                workflows.
            </p>
        </div>

        <div class="mt-20 rounded-3xl border p-8 lg:p-10" :style="{
            background: 'var(--color-surface)',
            borderColor: 'var(--color-border)',
        }">
            <div class="flex flex-col gap-4 border-b pb-8 md:flex-row md:items-center md:justify-between"
                :style="{ borderColor: 'var(--color-border)' }">
                <div>
                    <h3 class="text-3xl font-semibold" :style="{ color: 'var(--color-heading)' }">
                        {{ experience.role }}
                    </h3>

                    <p class="mt-2 text-lg" :style="{ color: 'var(--color-text)' }">
                        {{ experience.company }}
                    </p>
                </div>

                <span class="rounded-full px-4 py-2 text-sm font-medium" :style="{
                    background:
                        'color-mix(in srgb, var(--color-primary) 12%, transparent)',
                    color: 'var(--color-primary)',
                }">
                    {{ experience.duration }}
                </span>
            </div>

            <div class="mt-10 space-y-10">
                <article v-for="project in experience.projects" :key="project.title">
                    <div class="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                        <div class="max-w-2xl">
                            <h4 class="text-2xl font-semibold" :style="{ color: 'var(--color-heading)' }">
                                {{ project.title }}
                            </h4>

                            <p class="mt-4 leading-8" :style="{ color: 'var(--color-text)' }">
                                {{ project.description }}
                            </p>

                            <div class="mt-6 flex flex-wrap gap-2">
                                <span v-for="tech in project.stack" :key="tech"
                                    class="rounded-full border px-3 py-1.5 text-xs font-medium" :style="{
                                        background: 'var(--color-surface)',
                                        borderColor: 'var(--color-border)',
                                        color: 'var(--color-text)',
                                    }">
                                    {{ tech }}
                                </span>
                            </div>
                        </div>

                        <ul class="grid gap-3 text-sm lg:min-w-[220px]">
                            <li v-for="item in project.highlights" :key="item" class="flex items-center gap-3"
                                :style="{ color: 'var(--color-text)' }">
                                <span class="h-2 w-2 rounded-full" :style="{
                                    background: 'var(--color-primary)',
                                }" />
                                {{ item }}
                            </li>
                        </ul>
                    </div>

                    <div v-if="project !== experience.projects.at(-1)" class="mt-10 h-px" :style="{
                        background:
                            'linear-gradient(to right, var(--color-border), transparent)',
                    }" />
                </article>

                <div class="mt-12 border-t pt-10" :style="{ borderColor: 'var(--color-border)' }">
                    <h4 class="text-xl font-semibold" :style="{ color: 'var(--color-heading)' }">
                        Key Contributions
                    </h4>

                    <div class="mt-6 grid gap-4 md:grid-cols-2">
                        <div v-for="item in experience.contributions" :key="item" class="flex items-start gap-3">
                            <span class="mt-2 h-2 w-2 rounded-full" :style="{ background: 'var(--color-primary)' }" />

                            <span :style="{ color: 'var(--color-text)' }">
                                {{ item }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Section>
</template>