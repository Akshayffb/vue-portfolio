<script setup>
import Footer from './Footer.vue';
import Navbar from './Navbar.vue';
import AppBackground from './AppBackground.vue';

</script>

<template>
    <div class="relative flex min-h-dvh flex-col">
        <AppBackground />

        <Navbar />

        <main class="flex-1 pt-24">
            <RouterView />
        </main>

        <Footer />
    </div>
</template>