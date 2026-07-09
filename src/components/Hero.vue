<script setup>
import Section from "@/components/ui/Section.vue";
import { PROFILE } from "../../config/profile.js";
</script>

<template>
    <Section id="home" size="lg" spacing="normal">
        <div class="mb-8 inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-sm" :style="{
            background:
                'color-mix(in srgb, var(--color-primary) 12%, transparent)',
            border:
                '1px solid color-mix(in srgb, var(--color-primary) 20%, transparent)',
            color: 'var(--color-primary)',
        }">
            <span class="h-2 w-2 animate-pulse rounded-full" :style="{ background: 'var(--color-primary)' }" />

            Open to Full-Time Opportunities
        </div>

        <h1 class="max-w-5xl text-4xl font-black tracking-tight leading-[1.15] md:text-6xl md:leading-tight lg:text-8xl"
            :style="{ color: 'var(--color-heading)' }">
            I'm

            <span class="bg-gradient-to-r from-violet-500 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                {{ PROFILE.name }}
            </span>

            <br />

            Full Stack Developer

            <br />

            <span>
                building production software.
            </span>
        </h1>

        <p class="mt-8 max-w-2xl text-lg leading-8 md:text-xl" :style="{ color: 'var(--color-text)' }">
            Experience building production-ready
            <strong :style="{ color: 'var(--color-heading)' }">
                travel platforms, e-commerce solutions, document management systems
                and SaaS applications
            </strong>
            using modern backend technologies and scalable software architecture.
        </p>

        <div class="mt-8 flex flex-wrap gap-4 md:mt-12">
            <button @click="
                document
                    .getElementById('projects')
                    ?.scrollIntoView({ behavior: 'smooth' })
                "
                class="rounded-full px-6 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-1 lg:px-7 lg:py-4"
                :style="{ background: 'var(--color-primary)' }">
                View Projects
            </button>

            <a :href="PROFILE.resume" target="_blank"
                class="rounded-full px-6 py-3 font-medium transition-all duration-300 hover:-translate-y-1 lg:px-7 lg:py-4"
                :style="{
                    color: 'var(--color-heading)',
                    border: '1px solid var(--color-border)',
                }">
                Download Resume
            </a>
        </div>
    </Section>
</template>