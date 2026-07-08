<script setup>
import Section from "@/components/ui/Section.vue";
import { PROFILE } from "../../config/profile.js";
</script>

<template>
    <Section id="home" size="lg">

        <div class="mb-8 inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-sm" :style="{
            background: 'color-mix(in srgb, var(--color-primary) 12%, transparent)',
            border: '1px solid color-mix(in srgb, var(--color-primary) 20%, transparent)',
            color: 'var(--color-primary)'
        }">
            <span class="h-2 w-2 animate-pulse rounded-full" :style="{ background: 'var(--color-primary)' }" />
            Open to Full-Time Opportunities
        </div>

        <h1 class="max-w-6xl text-4xl font-black leading-[1.05] tracking-tight md:text-7xl lg:text-8xl"
            :style="{ color: 'var(--color-heading)' }">
            I'm

            <span class="bg-gradient-to-r from-violet-500 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                {{ PROFILE.name }}
            </span>

            <br />

            Full Stack Developer

            <br />

            building web aplications.
        </h1>

        <p class="mt-8 max-w-2xl text-lg leading-8 md:text-xl" :style="{ color: 'var(--color-text)' }">
            Experience building production-ready
            <strong :style="{ color: 'var(--color-heading)' }">
                travel, e-commerce, Documents Management System and SaaS applications
            </strong>
            with modern backend technologies.
        </p>

        <div class="mt-12 flex flex-wrap gap-4">

            <button @click="document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })"
                class="rounded-full px-7 py-4 font-medium text-white transition duration-300 hover:-translate-y-1"
                :style="{ background: 'var(--color-primary)' }">
                View Projects
            </button>

            <a :href="PROFILE.resume" target="_blank" class="rounded-full px-7 py-4 font-medium transition" :style="{
                color: 'var(--color-heading)',
                border: '1px solid var(--color-border)'
            }">
                Download Resume
            </a>

        </div>

    </Section>
</template>