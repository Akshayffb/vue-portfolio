<script setup>
import { Sun, Moon, Monitor } from 'lucide-vue-next';
import { onMounted, onUnmounted, ref } from 'vue';

const theme = ref("system");
const open = ref(false);
const dropdownRef = ref(null);

const setTheme = (mode) => {
    theme.value = mode;
    localStorage.setItem('theme', mode);
    applyTheme();
    open.value = false;
}

onMounted(() => {
    theme.value = localStorage.getItem('theme') || 'system';
    applyTheme();

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (theme.value === 'system') {
            applyTheme();
        }
    })

    document.addEventListener('click', handleClickOutside);
})

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
})

const applyTheme = () => {
    const html = document.documentElement;

    if (theme.value === 'dark') {
        html.classList.add('dark');
        return;
    }

    if (theme.value === 'light') {
        html.classList.remove('dark');
        return;
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    html.classList.toggle('dark', prefersDark);
}

const handleClickOutside = (event) => {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
        open.value = false;
    }
}
</script>

<template>
    <div ref="dropdownRef" class="relative">
        <button @click="open = !open" :aria-label="`Change theme (current: ${theme})`" :aria-expanded="open"
            aria-haspopup="menu"
            class="cursor-pointer rounded-full border p-2 shadow-sm backdrop-blur-xl transition-all duration-200"
            :style="{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                color: 'var(--color-heading)'
            }" @mouseenter="$event.currentTarget.style.background = 'var(--color-surface-hover)'"
            @mouseleave="$event.currentTarget.style.background = 'var(--color-surface)'">
            <Sun v-if="theme === 'light'" class="h-4 w-4" />

            <Moon v-else-if="theme === 'dark'" class="h-4 w-4" />

            <Monitor v-else class="h-4 w-4" />
        </button>

        <div v-if="open" class="absolute right-0 mt-2 w-40 rounded-2xl border p-1 shadow-xl backdrop-blur-xl" :style="{
            background: 'var(--color-surface-hover)',
            border: '1px solid var(--color-border)'
        }">
            <button @click="setTheme('light')" role="menuitem"
                class="flex w-full cursor-pointer items-center gap-2 rounded-xl px-3 py-2 text-sm transition-colors duration-200"
                :style="{ color: 'var(--color-text)' }"
                @mouseenter="$event.currentTarget.style.background = 'var(--color-surface)'"
                @mouseleave="$event.currentTarget.style.background = 'transparent'">
                <Sun class="h-4 w-4" />
                <span>Light</span>
            </button>

            <button @click="setTheme('dark')" role="menuitem"
                class="flex w-full cursor-pointer items-center gap-2 rounded-xl px-3 py-2 text-sm transition-colors duration-200"
                :style="{ color: 'var(--color-text)' }"
                @mouseenter="$event.currentTarget.style.background = 'var(--color-surface)'"
                @mouseleave="$event.currentTarget.style.background = 'transparent'">
                <Moon class="h-4 w-4" />
                <span>Dark</span>
            </button>

            <button @click="setTheme('system')" role="menuitem"
                class="flex w-full cursor-pointer items-center gap-2 rounded-xl px-3 py-2 text-sm transition-colors duration-200"
                :style="{ color: 'var(--color-text)' }"
                @mouseenter="$event.currentTarget.style.background = 'var(--color-surface)'"
                @mouseleave="$event.currentTarget.style.background = 'transparent'">
                <Monitor class="h-4 w-4" />
                <span>System</span>
            </button>
        </div>
    </div>
</template>