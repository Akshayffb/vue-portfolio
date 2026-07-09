<script setup>
import Container from "./Container.vue";

const props = defineProps({
    id: String,
    size: {
        type: String,
        default: "lg",
    },
    spacing: {
        type: String,
        default: "normal",
    },
});

const spacings = {
    none: "",
    sm: "py-16",
    normal: "py-20 md:py-24",
    lg: "py-32",
};
</script>

<template>
    <section :id="props.id" :class="['relative px-5 md:px-20 lg:px-6', spacings[props.spacing] || spacings.normal]">
        <Container :size="props.size">
            <slot />
        </Container>
    </section>
</template>