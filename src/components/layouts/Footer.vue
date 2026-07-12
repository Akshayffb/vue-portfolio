<script setup>
import { PROFILE } from "../../../config/profile";

const year = new Date().getFullYear();

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
</script>

<template>
    <footer
        class="relative mt-32 border-t"
        :style="{ borderColor: 'var(--color-border)' }"
    >
        <!-- Background glow -->
        <div
            class="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full opacity-30 blur-[140px]"
            :style="{ background: 'var(--glow-primary)' }"
        />

        <div class="relative mx-auto max-w-7xl px-6 py-20">
            <!-- CTA -->
            <div class="text-center">
                <p
                    class="mb-4 text-sm font-semibold uppercase tracking-[0.3em]"
                    :style="{ color: 'var(--color-primary)' }"
                >
                    Let's Connect
                </p>

                <h2
                    class="mx-auto max-w-3xl text-4xl font-semibold leading-tight md:text-5xl"
                    :style="{ color: 'var(--color-heading)' }"
                >
                    Interested in working together?

                    <span
                        class="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent"
                    >
                        Let's build something great.
                    </span>
                </h2>

                <p
                    class="mx-auto mt-6 max-w-2xl text-lg leading-8"
                    :style="{ color: 'var(--color-text)' }"
                >
                    I'm currently open to full-time software engineering
                    opportunities, freelance projects and collaborations.
                </p>

                <div class="mt-10 flex flex-wrap justify-center gap-4">
                    <a
                        :href="`mailto:${PROFILE.email}`"
                        class="rounded-full px-7 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-1"
                        :style="{ background: 'var(--color-primary)' }"
                    >
                        Get in Touch
                    </a>

                    <a
                        :href="PROFILE.resume"
                        target="_blank"
                        class="rounded-full border px-7 py-3 font-medium transition-all duration-300 hover:-translate-y-1"
                        :style="{
                            color: 'var(--color-heading)',
                            borderColor: 'var(--color-border)',
                        }"
                    >
                        Download Resume
                    </a>
                </div>
            </div>

            <!-- Bottom -->
            <div
                class="mt-20 flex flex-col items-center justify-between gap-5 border-t pt-8 text-sm md:flex-row"
                :style="{
                    borderColor: 'var(--color-border)',
                    color: 'var(--color-text)',
                }"
            >
                <p>
                    © {{ year }} {{ PROFILE.name }}. All rights reserved.
                </p>

                <button
                    @click="scrollToTop"
                    class="transition-colors duration-300 hover:text-violet-400"
                >
                    Back to top ↑
                </button>
            </div>
        </div>
    </footer>
</template>