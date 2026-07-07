<script setup>
import Section from "@/components/ui/Section.vue";
import { PROFILE } from "../../config/profile.js";
</script>

<template>
    <Section id="home" size="xl">
        <div class="mx-auto flex max-w-7xl flex-col px-6">

            <!-- Availability -->
            <div
                class="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
                <span class="h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
                Available for opportunities
            </div>

            <!-- Heading -->
            <h1 class="max-w-5xl text-5xl font-black leading-tight tracking-tight md:text-7xl lg:text-8xl">
                Hi, I'm
                <span
                    class="bg-gradient-to-r from-violet-500 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                    {{ PROFILE.name }}
                </span>

                <br />

                I build modern
                <br />
                web experiences.
            </h1>

            <!-- Description -->
            <p class="mt-8 max-w-2xl text-lg leading-8 opacity-70 md:text-xl">
                Full Stack Developer focused on building scalable web applications,
                beautiful user interfaces, and reliable backend systems using Vue,
                Java, Spring Boot, and cloud technologies.
            </p>

            <!-- Buttons -->
            <div class="mt-12 flex flex-wrap gap-4">

                <button @click="document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })"
                    class="rounded-full bg-violet-600 px-7 py-4 font-medium text-white transition hover:-translate-y-1 hover:bg-violet-500">
                    View Projects
                </button>

                <a :href="PROFILE.resume" target="_blank"
                    class="rounded-full border border-white/10 px-7 py-4 font-medium transition hover:bg-white/5">
                    Resume
                </a>

            </div>

            <!-- Stats -->
            <div class="mt-20 flex flex-wrap gap-10 text-sm">
                <div>
                    <h3 class="text-3xl font-bold">3+</h3>
                    <p class="opacity-60">Years Experience</p>
                </div>

                <div>
                    <h3 class="text-3xl font-bold">20+</h3>
                    <p class="opacity-60">Projects Built</p>
                </div>

                <div>
                    <h3 class="text-3xl font-bold">∞</h3>
                    <p class="opacity-60">Curiosity</p>
                </div>
            </div>

        </div>
    </Section>
</template>