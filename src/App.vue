<script setup>
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import { RouterView } from 'vue-router';

</script>

<template>
  <Routerview />
</template>

<style scoped>
header {
  line-height: 1.5;
}

.btn {
  border: 1px solid #B9B9B9;
  padding: 15px;
  background-color: black;
  color: white;
  border-radius: 20px;
}


.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
