<script setup>
import { PROFILE } from '../../config/profile';

const year = new Date().getFullYear();

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
</script>

<template>
    <footer class="relative mt-32 overflow-hidden border-t border-white/10">
        <!-- Background Glow -->
        <div class="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full blur-[140px] opacity-30"
            :style="{ background: 'var(--glow-primary)' }" />

        <div class="relative mx-auto max-w-7xl px-6 py-24">

            <!-- Closing Message -->
            <div class="text-center">

                <p class="mb-4 text-sm uppercase tracking-[0.3em] opacity-60">
                    Thanks for visiting
                </p>

                <h2 class="mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
                    Let's build something
                    <span class="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
                        extraordinary.
                    </span>
                </h2>

                <a :href="`mailto:${PROFILE.email}`"
                    class="mt-10 inline-flex items-center rounded-full bg-violet-600 px-7 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-1 hover:bg-violet-500">
                    Get in touch
                </a>

            </div>

            <!-- Bottom -->
            <div
                class="mt-24 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm opacity-70 md:flex-row">
                <p>
                    © {{ year }} {{ PROFILE.name }}
                </p>

                <button @click="scrollToTop" class="transition hover:text-violet-400">
                    Back to top ↑
                </button>
            </div>

        </div>
    </footer>
</template>