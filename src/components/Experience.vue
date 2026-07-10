<script setup>
import Section from "@/components/ui/Section.vue";

const experiences = [
    {
        role: "Associate Software Engineer",
        company: "Madgeek Pvt. Ltd.",
        duration: "2023 — Present",

        summary:
            "Working as a Full Stack Software Engineer building and maintaining production web applications, business systems and enterprise solutions. Contributing across backend development, frontend implementation, API integrations, cloud infrastructure and long-term product improvements.",

        responsibilities: [
            "Develop full-stack web applications using Laravel and Vue.js",
            "Design and integrate REST APIs and third-party services",
            "Build business workflows, authentication and role-based access",
            "Develop background jobs using Redis queues",
            "Optimize MySQL databases and backend performance",
            "Deploy and maintain production applications",
            "Integrate payment gateways, SFTP and cloud storage",
            "Develop booking systems, SaaS platforms and business applications",
            "Troubleshoot production issues and deliver feature enhancements",
        ],

        technologies: [
            "Laravel",
            "Vue.js",
            "PHP",
            "MySQL",
            "Redis",
            "REST APIs",
            "DigitalOcean",
            "Cloudflare",
            "Git",
        ],
    },

    {
        role: "Freelance Full Stack Developer",
        company: "Self Employed",
        duration: "2022 — 2023",

        summary:
            "Worked directly with small businesses and clients to design, develop and deploy custom websites, business applications and e-commerce solutions while managing hosting, deployments and ongoing maintenance.",

        responsibilities: [
            "Developed custom Laravel applications",
            "Built WordPress websites and WooCommerce stores",
            "Created a School Management System for a local school",
            "Managed hosting, domains and deployments",
            "Provided maintenance and technical support",
            "Worked directly with clients from planning to delivery",
        ],

        technologies: [
            "CodeIgniter",
            "PHP",
            "MySQL",
            "WordPress",
            "WooCommerce",
            "Bootstrap",
            "JavaScript",
            "Git",
        ],
    },
];
</script>

<template>
    <Section id="experience" size="lg" spacing="normal">

        <div class="max-w-4xl">

            <p
                class="mb-4 text-sm font-semibold uppercase tracking-[0.3em]"
                :style="{ color: 'var(--color-primary)' }"
            >
                Professional Experience
            </p>

            <h2
                class="text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl"
                :style="{ color: 'var(--color-heading)' }"
            >
                Building software for

                <span
                    class="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent"
                >
                    businesses and real users
                </span>
            </h2>

            <p
                class="mt-8 max-w-3xl text-lg leading-8"
                :style="{ color: 'var(--color-text)' }"
            >
                Nearly three years of professional experience developing
                production-ready software, business platforms, e-commerce
                solutions and scalable backend systems while collaborating with
                clients and cross-functional teams.
            </p>

        </div>

        <div class="mt-20 space-y-8">

            <article
                v-for="experience in experiences"
                :key="experience.role"
                class="rounded-3xl border p-8 lg:p-10"
                :style="{
                    background: 'var(--color-surface)',
                    borderColor: 'var(--color-border)',
                }"
            >

                <div
                    class="flex flex-col gap-4 border-b pb-8 lg:flex-row lg:items-center lg:justify-between"
                    :style="{ borderColor: 'var(--color-border)' }"
                >

                    <div>

                        <h3
                            class="text-3xl font-semibold"
                            :style="{ color: 'var(--color-heading)' }"
                        >
                            {{ experience.role }}
                        </h3>

                        <p
                            class="mt-2 text-lg"
                            :style="{ color: 'var(--color-text)' }"
                        >
                            {{ experience.company }}
                        </p>

                    </div>

                    <span
                        class="rounded-full px-4 py-2 text-sm font-medium"
                        :style="{
                            background:
                                'color-mix(in srgb, var(--color-primary) 12%, transparent)',
                            color: 'var(--color-primary)',
                        }"
                    >
                        {{ experience.duration }}
                    </span>

                </div>

                <p
                    class="mt-8 max-w-4xl leading-8"
                    :style="{ color: 'var(--color-text)' }"
                >
                    {{ experience.summary }}
                </p>

                <div class="mt-10 grid gap-10 lg:grid-cols-[2fr_1fr]">

                    <div>

                        <h4
                            class="mb-5 text-lg font-semibold"
                            :style="{ color: 'var(--color-heading)' }"
                        >
                            Key Responsibilities
                        </h4>

                        <ul class="grid gap-4">

                            <li
                                v-for="item in experience.responsibilities"
                                :key="item"
                                class="flex items-start gap-3"
                            >

                                <span
                                    class="mt-2 h-2 w-2 rounded-full"
                                    :style="{ background: 'var(--color-primary)' }"
                                />

                                <span
                                    class="leading-7"
                                    :style="{ color: 'var(--color-text)' }"
                                >
                                    {{ item }}
                                </span>

                            </li>

                        </ul>

                    </div>

                    <div>

                        <h4
                            class="mb-5 text-lg font-semibold"
                            :style="{ color: 'var(--color-heading)' }"
                        >
                            Technologies
                        </h4>

                        <div class="flex flex-wrap gap-2">

                            <span
                                v-for="tech in experience.technologies"
                                :key="tech"
                                class="rounded-full border px-3 py-1.5 text-xs font-medium"
                                :style="{
                                    borderColor: 'var(--color-border)',
                                    background: 'var(--color-surface)',
                                    color: 'var(--color-text)',
                                }"
                            >
                                {{ tech }}
                            </span>

                        </div>

                    </div>

                </div>

            </article>

        </div>

    </Section>
</template>