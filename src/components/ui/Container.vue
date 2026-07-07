<script setup>
const props = defineProps({
    size: {
        type: String,
        default: "lg",
    },
});

const sizes = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-7xl",
    xl: "max-w-[90rem]",
    full: "max-w-none",
};
</script>

<template>
    <div :class="[
        'mx-auto w-full px-6 sm:px-8 lg:px-10',
        sizes[props.size] || sizes.lg,
    ]">
        <slot />
    </div>
</template>