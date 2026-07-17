<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Section from '@/components/ui/Section.vue';

const route = useRoute();

onMounted(() => {
    document.title = '404 | Page Not Found | Akshay Kumar';

    let robots = document.querySelector('meta[name="robots"]');

    if (!robots) {
        robots = document.createElement('meta');
        robots.setAttribute('name', 'robots');
        document.head.appendChild(robots);
    }

    robots.setAttribute('content', 'noindex, follow');
});
</script>

<template>
    <Section size="normal">
        <div class="flex min-h-[70vh] flex-col items-center justify-center text-center">

            <p class="text-xs font-semibold uppercase tracking-[0.35em]"
                :style="{ color: 'var(--color-text-secondary)' }">
                Error 404
            </p>

            <h1 class="pointer-events-none mt-6 select-none text-8xl font-bold tracking-tight text-white/15 sm:text-9xl md:text-[10rem] lg:text-[12rem]"
                :style="{ color: 'var(--color-heading)' }">
                404
            </h1>

            <h2 class="mt-6 text-3xl font-bold sm:text-4xl" :style="{ color: 'var(--color-heading)' }">
                Page Not Found
            </h2>

            <p class="mt-5 max-w-2xl text-lg leading-relaxed" :style="{ color: 'var(--color-text-secondary)' }">
                The requested route couldn't be resolved. It may have been moved, removed,
                or the URL may be incorrect.
            </p>

            <code class="mt-5 rounded-lg px-4 py-2 font-mono text-sm" :style="{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                color: 'var(--color-heading)'
            }">
                {{ route.fullPath }}
            </code>

            <div class="mt-10 flex flex-wrap justify-center gap-4">
                <RouterLink to="/"
                    class="rounded-full px-6 py-3 font-medium text-white cursor-pointer transition-all duration-300 hover:-translate-y-1 lg:px-7 lg:py-4"
                    :style="{
                        background: 'var(--color-primary)',
                        color: '#fff'
                    }">
                    Back to Home
                </RouterLink>


                <RouterLink to="/#projects"
                    class="rounded-full px-6 py-3 font-medium transition-all duration-300 hover:-translate-y-1 lg:px-7 lg:py-4"
                    :style="{
                        border: '1px solid var(--color-border)',
                        color: 'var(--color-heading)'
                    }">
                    View Projects
                </RouterLink>
            </div>
        </div>
    </Section>
</template>