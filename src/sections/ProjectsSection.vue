<script setup>
import Section from "@/components/ui/Section.vue";
import { ArrowUpRight } from "lucide-vue-next";
import { PROJECTS } from "../../config/projects.js";

const isMobile = window.innerWidth < 768;

</script>

<template>
    <Section id="projects" size="lg">
        <div class="max-w-4xl">
            <p class="mb-4 text-sm font-semibold uppercase tracking-[0.3em]" :style="{ color: 'var(--color-primary)' }">
                Featured Projects
            </p>

            <h2 class="text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl"
                :style="{ color: 'var(--color-heading)' }">
                Software solutions built

                <span
                    class="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
                    for real-world use </span>
            </h2>

            <p class="mt-8 max-w-3xl text-lg leading-8" :style="{ color: 'var(--color-text)' }">
                A collection of professional, freelance and personal projects showcasing business applications,
                integrations and software systems developed for real-world workflows.
            </p>
        </div>

        <div class="mt-20 grid gap-6">
            <article v-for="project in PROJECTS" :key="project.title"
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

                    <button v-if="!isMobile"
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