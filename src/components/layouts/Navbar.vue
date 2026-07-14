<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { PROFILE } from "../../../config/profile";
import ThemeSwitcher from "../ThemeSwitcher.vue";
import { Menu, X } from "lucide-vue-next";

const mobileOpen = ref(false);
const scrolled = ref(false);
const activeSection = ref("home");
const navRef = ref(null);

const showNavbar = ref(true);
let lastScrollY = 0;
const SCROLL_DELTA = 10;
const SHOW_OFFSET = 100;

const links = [
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
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

onMounted(() => {
    window.addEventListener("scroll", onScroll);
    onScroll();
    window.addEventListener("pointerdown", handleClickOutside);
    window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener('pointerdown', handleClickOutside);
    window.removeEventListener("resize", handleResize);
});

const handleClickOutside = (event) => {
    if (!mobileOpen.value) return;

    if (navRef.value && !navRef.value.contains(event.target)) {
        mobileOpen.value = false;
    }
};

const handleResize = () => {
    if (window.innerWidth >= 768) {
        mobileOpen.value = false;
    }
};

const onScroll = () => {
    const currentScrollY = window.scrollY;

    scrolled.value = currentScrollY > 20;

    if (mobileOpen.value) {
        showNavbar.value = true;
    } else if (currentScrollY <= SHOW_OFFSET) {
        showNavbar.value = true;
    } else if (currentScrollY > lastScrollY + SCROLL_DELTA) {
        showNavbar.value = false;
    } else if (currentScrollY < lastScrollY - SCROLL_DELTA) {
        showNavbar.value = true;
    }

    lastScrollY = currentScrollY;

    const sections = links
        .map((l) => document.getElementById(l.id))
        .filter(Boolean);

    const offset = 120;

    for (const section of sections) {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (
            currentScrollY + offset >= top &&
            currentScrollY + offset < bottom
        ) {
            activeSection.value = section.id;
        }
    }
};
</script>

<template>
    <header class="fixed inset-x-0 top-5 z-50 flex justify-center px-5 transition-all duration-300" :class="showNavbar
        ? 'translate-y-0 opacity-100'
        : '-translate-y-24 opacity-0 pointer-events-none'">
        <nav ref="navRef" class="w-full max-w-7xl backdrop-blur-xl transition-all duration-300
         rounded-4xl md:rounded-full" :class="scrolled ? 'shadow-2xl' : ''" :style="{
            background: scrolled
                ? 'var(--color-nav-bg-hover)'
                : 'var(--color-nav-bg)',
            border: `1px solid ${scrolled
                ? 'var(--color-border-hover)'
                : 'var(--color-border)'
                }`
        }">
            <div class="flex h-16 items-center justify-between px-6">
                <router-link to="/" @click="scrollTo('home')" class="text-lg font-semibold tracking-tight"
                    :style="{ color: 'var(--color-heading)' }">
                    &lt; {{ PROFILE.name }} /&gt;
                </router-link>

                <div class="hidden items-center gap-8 md:flex">
                    <button v-for="link in links" :key="link.id" @click="scrollTo(link.id)"
                        class="relative text-sm cursor-pointer transition-colors duration-200" :style="{
                            color: activeSection === link.id
                                ? 'var(--color-heading)'
                                : 'var(--color-muted)'
                        }" @mouseenter="$event.target.style.color = 'var(--color-heading)'"
                        @mouseleave="$event.target.style.color = activeSection === link.id ? 'var(--color-heading)' : 'var(--color-muted)'">
                        {{ link.label }}

                        <span v-if="activeSection === link.id"
                            class="absolute -bottom-2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full"
                            :style="{ background: 'var(--color-primary)' }" />
                    </button>
                </div>

                <div class="hidden items-center gap-3 md:flex">

                    <ThemeSwitcher />

                    <a :href="PROFILE.resume" target="_blank" class="rounded-full px-4 py-2 text-sm transition" :style="{
                        color: 'var(--color-heading)',
                        border: '1px solid var(--color-border)'
                    }" @mouseenter="$event.target.style.background = 'var(--color-surface-hover)'"
                        @mouseleave="$event.target.style.background = 'transparent'">
                        Resume
                    </a>

                    <button @click="scrollTo('contact')"
                        class="rounded-full px-5 py-2 text-sm font-medium cursor-pointer text-white transition"
                        :style="{ background: 'var(--color-primary)' }">
                        Let's Talk
                    </button>

                </div>

                <div class="flex items-center justify-between gap-3 md:hidden">
                    <ThemeSwitcher />
                    <button @click="mobileOpen = !mobileOpen" class="text-3xl transition-transform duration-200"
                        :style="{ color: 'var(--color-heading)' }" :aria-label="mobileOpen ? 'Close Menu' : 'Open Menu'"
                        :aria-expanded="mobileOpen" aria-controls="mobile-menu" id="mobile-menu">
                        <Menu v-if="!mobileOpen" size="28" />
                        <X v-else size="28" />
                    </button>
                </div>
            </div>

            <transition enter-active-class="transition duration-300" leave-active-class="transition duration-200"
                enter-from-class="opacity-0 -translate-y-3" enter-to-class="opacity-100 translate-y-0"
                leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-3">
                <div v-if="mobileOpen" class="px-6 py-5 md:hidden"
                    :style="{ borderTop: '1px solid var(--color-border)' }">
                    <div class="flex flex-col gap-4">

                        <button v-for="link in links" :key="link.id" @click="scrollTo(link.id)"
                            class="text-left transition" :style="{ color: 'var(--color-text)' }">
                            {{ link.label }}
                        </button>

                        <a :href="PROFILE.resume" target="_blank" :style="{ color: 'var(--color-heading)' }">
                            Resume
                        </a>

                        <button @click="scrollTo('contact')" class="rounded-lg py-3 cursor-pointer text-white"
                            :style="{ background: 'var(--color-primary)' }">
                            Let's Talk
                        </button>
                    </div>
                </div>
            </transition>
        </nav>
    </header>
</template>