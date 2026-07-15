<script setup>
defineProps({
    note: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <router-link :to="`/notes/${note.slug}`"
        class="block rounded-2xl border p-6 transition-all duration-200 hover:-translate-y-1" :style="{
            background: 'var(--color-nav-bg)',
            border: '1px solid var(--color-border)',
        }">
        <div class="mb-2 flex items-center justify-between gap-4">
            <h2 class="text-xl font-semibold" :style="{ color: 'var(--color-heading)' }">
                {{ note.title }}
            </h2>

            <span class="shrink-0 text-sm" :style="{ color: 'var(--color-muted)' }">
                {{ note.date }}
            </span>
        </div>

        <p class="mb-3 text-sm" :style="{ color: 'var(--color-primary)' }">
            {{ note.category }}
        </p>

        <p class="leading-7" :style="{ color: 'var(--color-text)' }">
            {{ note.summary }}
        </p>
    </router-link>
</template>