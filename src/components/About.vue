<script setup>
import Section from './ui/Section.vue';

</script>

<template>
    <Section id="about" size="lg" spacing="normal">
        <div class="grid gap-20 lg:grid-cols-[1.1fr_.9fr]">
            <div>
                <p class="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
                    About
                </p>

                <h2 class="text-4xl font-bold leading-tight lg:text-5xl">
                    I enjoy building software that's fast,
                    scalable and enjoyable to use.
                </h2>

                <p class="mt-8 max-w-xl leading-8 opacity-70">
                    I'm a Full Stack Developer who enjoys turning ideas into
                    reliable products. From polished frontends to scalable
                    backend services, I like building software that is simple,
                    maintainable and focused on solving real problems.
                </p>
            </div>

            <div class="space-y-8">

                <div class="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                    <p class="mb-2 text-sm text-violet-400">
                        01
                    </p>

                    <h3 class="text-xl font-semibold">
                        Frontend
                    </h3>

                    <p class="mt-2 opacity-70">
                        Building responsive interfaces with Vue, JavaScript and Tailwind CSS.
                    </p>
                </div>

                <div class="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                    <p class="mb-2 text-sm text-cyan-400">
                        02
                    </p>

                    <h3 class="text-xl font-semibold">
                        Backend
                    </h3>

                    <p class="mt-2 opacity-70">
                        Designing REST APIs, authentication and scalable services using Java
                        and Spring Boot.
                    </p>
                </div>

                <div class="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                    <p class="mb-2 text-sm text-emerald-400">
                        03
                    </p>

                    <h3 class="text-xl font-semibold">
                        Cloud
                    </h3>

                    <p class="mt-2 opacity-70">
                        Deploying applications with Docker, AWS and modern CI/CD workflows.
                    </p>
                </div>
            </div>
        </div>
    </Section>
</template>