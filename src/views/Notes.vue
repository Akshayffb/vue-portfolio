<script setup>
import { onMounted, onUnmounted } from "vue";
import Section from "@/components/ui/Section.vue";
import NoteCard from "@/components/notes/NoteCard.vue";
import { NOTES } from "../../content/notes";

onMounted(() => {
    document.title = "Notes";

    let meta = document.querySelector('meta[name="robots"]');

    if (!meta) {
        meta = document.createElement("meta");
        meta.name = "robots";
        document.head.appendChild(meta);
    }

    meta.content = "noindex, nofollow";
});

onUnmounted(() => {
    const meta = document.querySelector('meta[name="robots"]');

    if (meta) {
        meta.content = "index, follow";
    }
});
</script>

<template>
    <Section size="xl">
        <header class="mb-12 max-w-3xl">
            <p class="mb-2 text-sm uppercase tracking-[0.2em]" :style="{ color: 'var(--color-primary)' }">
                Notes
            </p>

            <h1 class="mb-4 text-4xl font-bold" :style="{ color: 'var(--color-heading)' }">
                Things I've Built & Learned
            </h1>

            <p class="leading-7" :style="{ color: 'var(--color-muted)' }">
                Personal implementation notes, experiments, and learnings collected
                while building projects. This page exists as my own reference.
            </p>
        </header>

        <div class="space-y-4">
            <NoteCard v-for="note in NOTES" :key="note.slug" :note="note" />
        </div>
    </Section>
</template>