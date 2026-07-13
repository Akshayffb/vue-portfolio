<script setup>
import Section from "@/components/ui/Section.vue";
import { PROFILE } from "../../config/profile.js";

const scrollToProject = () => {
    window.document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
}
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

        <h1 class="max-w-6xl text-[2.2rem] font-black tracking-tight leading-[1.15] md:text-6xl md:leading-tight lg:text-[5.5rem]"
            :style="{ color: 'var(--color-heading)' }">
            I'm

            <span>
                {{ PROFILE.name }}
            </span>

            <br />
            <span class="bg-gradient-to-r from-violet-500 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                Full Stack Software Engineer
            </span>
            <br />

            <span>
                building scalable web applications. </span>
        </h1>

        <p class="mt-8 max-w-2xl text-lg leading-8 md:text-xl" :style="{ color: 'var(--color-text)' }">
            I build production-ready web applications using
            <strong :style="{ color: 'var(--color-heading)' }">
                Laravel, Vue.js and modern web technologies
            </strong>
            with a focus on scalable backend systems, clean architecture and long-term maintainability.
        </p>

        <div class="mt-8 flex flex-wrap gap-4 md:mt-12">
            <button @click="scrollToProject"
                class="rounded-full px-6 py-3 font-medium text-white cursor-pointer transition-all duration-300 hover:-translate-y-1 lg:px-7 lg:py-4"
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