<script setup>
import Footer from './Footer.vue';
import Navbar from './Navbar.vue';
import AppBackground from './AppBackground.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
    <div class="relative flex min-h-dvh flex-col">
        <AppBackground />

        <Navbar v-if="!route.meta.hideNavbar" />

        <main class="flex-1 pt-24">
            <RouterView />
        </main>

        <Footer v-if="!route.meta.hideFooter" />
    </div>
</template>