<template>
  <div
    class="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#09090B] px-6"
  >
    <!-- Glow -->
    <div
      class="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[140px]"
    />

    <div
      class="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]"
    />

    <!-- Grid -->
    <div
      class="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:60px_60px]"
    />

    <div
      class="relative z-10 w-full max-w-4xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
    >
      <div class="mb-10 flex items-center gap-3">
        <div class="h-3 w-3 animate-pulse rounded-full bg-green-500" />
        <span class="text-sm text-zinc-400"> Portfolio currently in development </span>
      </div>

      <h1 class="mb-6 text-5xl font-bold leading-tight text-white md:text-7xl">
        Building a better
        <span
          class="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent"
        >
          developer experience.
        </span>
      </h1>

      <p class="mb-10 max-w-2xl text-lg leading-relaxed text-zinc-400">
        I'm redesigning my portfolio from the ground up. New case studies, projects, and
        services are on the way.
      </p>

      <div class="flex flex-wrap py-5 gap-4">
        <a
          href="mailto:akshayffb.dev@gmail.com"
          class="rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:scale-[1.02]"
        >
          Get In Touch
        </a>

        <a
          href="https://github.com/akshayffb"
          target="_blank"
          class="rounded-xl border border-white/10 px-6 py-3 text-white transition hover:bg-white/5"
        >
          GitHub
        </a>
      </div>

      <!-- Fake Status Panel -->
      <div class="mt-12 grid gap-4 md:grid-cols-3">
        <div class="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <p class="mb-1 text-sm text-zinc-500">Status</p>
          <p class="font-medium text-green-400">Actively Building</p>
        </div>

        <div class="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <p class="mb-1 text-sm text-zinc-500">Focus</p>
          <p class="font-medium text-white">Building Modern Web Applications</p>
        </div>

        <div class="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <p class="mb-1 text-sm text-zinc-500">Version</p>
          <p class="font-medium text-white">Portfolio v2.0</p>
        </div>
      </div>
    </div>
  </div>
</template>
