<script setup>
import Section from "@/components/ui/Section.vue";

const stats = [
    {
        value: "3+",
        label: "Years Experience",
    },
    {
        value: "Production",
        label: "Business Applications",
    },
    {
        value: "Full Stack",
        label: "Laravel & Vue.js",
    },
];

const focusAreas = [
    "Laravel",
    "Vue.js",
    "REST APIs",
    "Backend Development",
    "System Design",
    "Business Applications",
    "Cloud Deployment",
    "Performance Optimization",
];
</script>

<template>
    <Section id="about" size="lg">
        <div class="max-w-4xl">
            <p class="mb-4 text-sm font-semibold uppercase tracking-[0.3em]" :style="{ color: 'var(--color-primary)' }">
                About Me
            </p>

            <h2 class="text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl"
                :style="{ color: 'var(--color-heading)' }">
                Building software with

                <span
                    class="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
                    curiosity and purpose
                </span>
            </h2>

            <p class="mt-8 max-w-3xl text-lg leading-8" :style="{ color: 'var(--color-text)' }">
                I'm a Full Stack Software Engineer who enjoys building reliable,
                scalable and maintainable web applications that solve real
                business problems. My work spans frontend development, backend
                architecture, REST APIs, third-party integrations, deployment
                and production support.
            </p>

            <p class="mt-6 max-w-3xl text-lg leading-8" :style="{ color: 'var(--color-text)' }">
                Over the past few years I've contributed to travel booking
                platforms, SaaS products, document management systems,
                appointment booking platforms and e-commerce solutions. I enjoy
                turning complex business requirements into clean software that
                teams and businesses can depend on.
            </p>

            <p class="mt-6 max-w-3xl text-lg leading-8" :style="{ color: 'var(--color-text)' }">
                I'm continuously learning, improving my engineering skills and
                exploring better ways to design software that is scalable,
                maintainable and delivers long-term value.
            </p>
        </div>

        <div class="mt-20 grid gap-6 md:grid-cols-3">
            <div v-for="stat in stats" :key="stat.label" class="rounded-3xl border p-8 text-center" :style="{
                background: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
            }">
                <h3 class="text-4xl font-bold" :style="{ color: 'var(--color-heading)' }">
                    {{ stat.value }}
                </h3>

                <p class="mt-3 text-sm uppercase tracking-wider" :style="{ color: 'var(--color-text)' }">
                    {{ stat.label }}
                </p>
            </div>
        </div>

        <div class="mt-16 rounded-3xl border p-8 lg:p-10" :style="{
            background: 'var(--color-surface)',
            borderColor: 'var(--color-border)',
        }">
            <h3 class="text-2xl font-semibold" :style="{ color: 'var(--color-heading)' }">
                Current Focus
            </h3>

            <p class="mt-4 max-w-2xl leading-8" :style="{ color: 'var(--color-text)' }">
                I enjoy working across the full software development lifecycle,
                from designing user experiences and backend systems to deploying
                production applications and continuously improving them.
            </p>

            <div class="mt-8 flex flex-wrap gap-3">
                <span v-for="item in focusAreas" :key="item"
                    class="rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5"
                    :style="{
                        background: 'var(--color-surface)',
                        borderColor: 'var(--color-border)',
                        color: 'var(--color-text)',
                    }">
                    {{ item }}
                </span>
            </div>
        </div>
    </Section>
</template>