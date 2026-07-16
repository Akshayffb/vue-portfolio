<script setup>
import { PROFILE } from "../../config/profile.js";
import Section from "@/components/ui/Section.vue";
import {
    Mail,
    MapPin,
    Github,
    Linkedin,
} from "lucide-vue-next";

const contactItems = [
    {
        title: "Email",
        value: PROFILE.email,
        href: `mailto:${PROFILE.email}`,
        icon: Mail,
    },
    {
        title: "Location",
        value: "Bengaluru, Karnataka, India",
        href: null,
        icon: MapPin,
    },
    {
        title: "GitHub",
        value: "Akshayffb",
        href: PROFILE.github,
        icon: Github,
    },
    {
        title: "LinkedIn",
        value: "akshayffb",
        href: PROFILE.linkedIn,
        icon: Linkedin,
    },
];
</script>

<template>
    <Section id="contact" size="lg">
        <div class="rounded-[2rem] border p-6 sm:p-8 md:p-12 lg:p-16" :style="{
            background: 'var(--color-surface)',
            borderColor: 'var(--color-border)',
        }">
            <div class="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-16">
                <!-- Left -->
                <div>
                    <p class="mb-4 text-sm font-semibold uppercase tracking-[0.3em]"
                        :style="{ color: 'var(--color-primary)' }">
                        Contact
                    </p>

                    <h2
                        class="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
                        Let's Connect
                    </h2>

                    <p class="mt-8 max-w-2xl text-lg leading-8" :style="{ color: 'var(--color-text)' }">
                        I'm open to full-time software engineering opportunities. If
                        you're looking for someone to build, improve or maintain web applications, I'd be happy to
                        connect.
                    </p>

                    <div class="mt-10 flex flex-col gap-4 sm:flex-row">
                        <a :href="`mailto:${PROFILE.email}`"
                            class="w-full rounded-full px-7 py-4 text-center font-medium text-white transition-all duration-300 hover:-translate-y-1 sm:w-auto"
                            :style="{
                                background: 'var(--color-primary)',
                            }">
                            Email Me
                        </a>

                        <a :href="PROFILE.resume" target="_blank"
                            class="w-full rounded-full border px-7 py-4 text-center font-medium transition-all duration-300 hover:-translate-y-1 sm:w-auto"
                            :style="{
                                borderColor: 'var(--color-border)',
                                color: 'var(--color-heading)',
                            }" download>
                            Download Resume
                        </a>
                    </div>
                </div>

                <!-- Right -->
                <div class="grid gap-4">
                    <component :is="item.href ? 'a' : 'div'" v-for="item in contactItems" :key="item.title"
                        :href="item.href" :target="item.href ? '_blank' : null"
                        class="group w-full rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        :style="{
                            background: 'var(--color-surface)',
                            borderColor: 'var(--color-border)',
                        }">
                        <div class="flex items-center gap-4">
                            <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl" :style="{
                                background:
                                    'color-mix(in srgb, var(--color-primary) 12%, transparent)',
                                color: 'var(--color-primary)',
                            }">
                                <component :is="item.icon" :size="22" />
                            </div>

                            <div class="min-w-0 flex-1">
                                <p class="text-sm" :style="{ color: 'var(--color-text)' }">
                                    {{ item.title }}
                                </p>

                                <p class="mt-1 break-all text-sm font-semibold sm:text-base"
                                    :style="{ color: 'var(--color-heading)' }">
                                    {{ item.value }}
                                </p>
                            </div>
                        </div>
                    </component>
                </div>
            </div>
        </div>
    </Section>
</template>