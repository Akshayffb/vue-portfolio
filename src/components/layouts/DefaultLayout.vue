<script setup>
import Footer from '../Footer.vue';
import Navbar from '../Navbar.vue';
import AppBackground from './AppBackground.vue';

</script>

<template>
    <AppBackground />

    <Navbar />

    <main class="flex-1">
        <RouterView />
    </main>

    <Footer />
</template>