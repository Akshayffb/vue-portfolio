<script setup>
import WorkInProgress from './components/WorkInProgress.vue';

const isLIve = false;
</script>

<template>
  <WorkInProgress v-if="!isLIve" />
  <router-view v-else />
</template>