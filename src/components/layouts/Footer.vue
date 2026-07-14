<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { PROFILE } from "../../../config/profile";
import { ArrowUp } from "lucide-vue-next";

const year = new Date().getFullYear();

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

const showScrollTop = ref(false);

const handleScroll = () => {
    showScrollTop.value = window.scrollY > 1000;
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
    <footer class="relative mt-32 border-t" :style="{ borderColor: 'var(--color-border)' }">
        <!-- Background glow -->
        <div class="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full opacity-30 blur-[140px]"
            :style="{ background: 'var(--glow-primary)' }" />

        <div class="relative mx-auto max-w-7xl px-6 py-20">

            <!-- Closing Message -->
            <div class="text-center">

                <p class="mb-4 text-sm font-semibold uppercase tracking-[0.3em]"
                    :style="{ color: 'var(--color-primary)' }">
                    Let's Connect
                </p>

                <h2 class="mx-auto max-w-3xl text-4xl font-semibold leading-tight md:text-5xl"
                    :style="{ color: 'var(--color-heading)' }">
                    Thanks for stopping by!
                </h2>

                <p class="mx-auto mt-6 max-w-2xl text-lg leading-8" :style="{ color: 'var(--color-text)' }">
                    Building software, solving problems, and always learning.
                </p>

            </div>

            <!-- Bottom -->
            <div class="mt-20 flex flex-col items-center justify-center gap-5 border-t pt-8 text-sm md:flex-row"
                :style="{
                    borderColor: 'var(--color-border)',
                    color: 'var(--color-text)',
                }">

                <p>
                    © {{ year }} {{ PROFILE.name }}. All rights reserved.
                </p>

                <Transition name="fade">
                    <button v-if="showScrollTop" @click="scrollToTop"
                        class="fixed bottom-6 cursor-pointer right-6 z-50 group inline-flex items-center gap-2 rounded-full border px-4 py-3 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 md:bottom-8 md:right-8"
                        :style="{
                            background: 'var(--color-surface)',
                            borderColor: 'var(--color-border)',
                            color: 'var(--color-heading)',
                        }">

                        <span class="flex h-8 w-8 items-center justify-center rounded-full" :style="{
                            background:
                                'color-mix(in srgb, var(--color-primary) 12%, transparent)',
                            color: 'var(--color-primary)',
                        }">
                            <ArrowUp :size="16" />
                        </span>

                        <span class="hidden text-sm font-medium sm:block">
                            Back to top
                        </span>

                    </button>
                </Transition>

            </div>

        </div>
    </footer>
</template>