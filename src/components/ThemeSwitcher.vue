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
        <button @click="open = !open" :aria-label="`Change theme (current: ${theme})`" :aria-expanded="open" aria-haspopup="menu"
            class="cursor-pointer rounded-full border border-gray-200 bg-white/80 p-2 shadow-sm backdrop-blur-xl transition hover:bg-gray-100 dark:border-white/10 dark:bg-black/40 dark:hover:bg-white/10">

            <Sun v-if="theme === 'light'" class="h-4 w-4 text-black dark:text-white" />

            <Moon v-else-if="theme === 'dark'" class="h-4 w-4 text-black dark:text-white" />

            <Monitor v-else class="h-4 w-4 text-black dark:text-white" />
        </button>

        <div v-if="open"
            class="absolute right-0 mt-2 w-40 rounded-2xl border border-gray-200 bg-white p-1 shadow-lg dark:border-white/10 dark:bg-zinc-900">

            <button @click="setTheme('light')" role="menuitem"
                class="flex w-full cursor-pointer items-center gap-2 rounded-xl px-3 py-2 text-sm text-black transition hover:bg-gray-100 dark:text-white dark:hover:bg-white/10">

                <Sun class="h-4 w-4" />
                <span>Light</span>
            </button>

            <button @click="setTheme('dark')" role="menuitem"
                class="flex w-full cursor-pointer items-center gap-2 rounded-xl px-3 py-2 text-sm text-black transition hover:bg-gray-100 dark:text-white dark:hover:bg-white/10">

                <Moon class="h-4 w-4" />
                <span>Dark</span>
            </button>

            <button @click="setTheme('system')" role="menuitem"
                class="flex w-full cursor-pointer items-center gap-2 rounded-xl px-3 py-2 text-sm text-black transition hover:bg-gray-100 dark:text-white dark:hover:bg-white/10">

                <Monitor class="h-4 w-4" />
                <span>System</span>
            </button>
        </div>
    </div>
</template>