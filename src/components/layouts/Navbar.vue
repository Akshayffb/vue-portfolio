<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { PROFILE } from "../../../config/profile";
import ThemeSwitcher from "../ThemeSwitcher.vue";

const mobileOpen = ref(false);
const scrolled = ref(false);
const activeSection = ref("home");

const links = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
];

const scrollTo = (id) => {
    mobileOpen.value = false;

    document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
};

const onScroll = () => {
    scrolled.value = window.scrollY > 20;

    const sections = links
        .map((l) => document.getElementById(l.id))
        .filter(Boolean);

    const offset = 120;

    for (const section of sections) {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (window.scrollY + offset >= top && window.scrollY + offset < bottom) {
            activeSection.value = section.id;
        }
    }
};

onMounted(() => {
    window.addEventListener("scroll", onScroll);
    onScroll();
});

onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
});
</script>

<template>
    <header class="fixed inset-x-0 top-5 z-50 flex justify-center px-4">
        <nav class="w-full max-w-7xl transition-all duration-300" :class="[
            scrolled
                ? 'bg-white/8 backdrop-blur-xl border border-white/10 shadow-2xl'
                : 'bg-white/5 backdrop-blur-md border border-white/5',
            'rounded-full'
        ]">
            <div class="flex h-16 items-center justify-between px-6">

                <router-link to="/" @click="scrollTo('home')" class="text-lg font-semibold tracking-tight text-white">
                    &lt; {{ PROFILE.name }} /&gt;
                </router-link>

                <div class="hidden items-center gap-8 md:flex">
                    <button v-for="link in links" :key="link.id" @click="scrollTo(link.id)"
                        class="relative text-sm text-white/70 transition hover:text-white">
                        {{ link.label }}

                        <span v-if="activeSection === link.id"
                            class="absolute -bottom-2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-violet-400" />
                    </button>
                </div>

                <div class="hidden items-center gap-3 md:flex">

                    <ThemeSwitcher />

                    <a :href="PROFILE.resume" target="_blank"
                        class="rounded-full border border-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/10">
                        Resume
                    </a>

                    <button @click="scrollTo('contact')"
                        class="rounded-full bg-violet-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-violet-500">
                        Let's Talk
                    </button>
                </div>

                <button @click="mobileOpen = !mobileOpen" class="text-white md:hidden">
                    ☰
                </button>
            </div>

            <transition enter-active-class="transition duration-300" leave-active-class="transition duration-200"
                enter-from-class="opacity-0 -translate-y-3" enter-to-class="opacity-100 translate-y-0"
                leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-3">
                <div v-if="mobileOpen" class="border-t border-white/10 px-6 py-5 md:hidden">
                    <div class="flex flex-col gap-4">
                        <button v-for="link in links" :key="link.id" @click="scrollTo(link.id)"
                            class="text-left text-white/80 transition hover:text-white">
                            {{ link.label }}
                        </button>

                        <a :href="PROFILE.resume" target="_blank" class="text-white/80">
                            Resume
                        </a>

                        <button @click="scrollTo('contact')" class="rounded-lg bg-violet-600 py-3 text-white">
                            Let's Talk
                        </button>
                    </div>
                </div>
            </transition>
        </nav>
    </header>
</template>