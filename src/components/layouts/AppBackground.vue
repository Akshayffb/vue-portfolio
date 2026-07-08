<template>
  <div class="fixed -z-10 overflow-hidden pointer-events-none" style="
    top: calc(-1 * env(safe-area-inset-top));
    right: 0;
    bottom: calc(-1 * env(safe-area-inset-bottom));
    left: 0;
  ">
    <!-- Background -->
    <div class="absolute inset-0" :style="{ background: 'var(--color-background)' }" />

    <!-- Main Glow -->
    <div class="background-glow absolute left-1/2 top-0
             h-[650px] w-[650px]
             -translate-x-1/2 rounded-full blur-[170px]" :style="{ background: 'var(--glow-primary)' }" />

    <!-- Secondary Glow -->
    <div class="background-glow-delay absolute bottom-0 right-0
             h-[450px] w-[450px]
             rounded-full blur-[150px]" :style="{ background: 'var(--glow-secondary)' }" />

    <!-- Grid -->
    <div class="absolute inset-0 bg-[size:64px_64px]" :style="{
      backgroundImage: `
          linear-gradient(to right,var(--grid-color) 1px,transparent 1px),
          linear-gradient(to bottom,var(--grid-color) 1px,transparent 1px)
        `
    }" />

  </div>
</template>