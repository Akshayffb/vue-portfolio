<script setup>
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
const show = ref(false);
const counter = ref(0);

const increase = () => {
  counter.value++;
  // console.log('clicked');
};

const decrease = () => {
  if(counter.value > 0){
    counter.value--;
    return;
  }
  window.alert("Counter reached 0, can't be made negative");
}

const reset = () => {
counter.value = 0;
}
</script>

<template>
  <header v-if="show">
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->
    <!-- <div class="wrapper"> -->
    <!-- </div> -->
  </header>

  <h1>{{ counter }}</h1>
  <button @click="increase" class="btn btn-primary">Increase</button>
    <button @click="decrease" class="btn">Decrease</button>
    <button @click="reset">Reset</button>
  <main>
    <HelloWorld msg="Hi, this is Akshay ffb" />
    <slot></slot>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.btn{
  border: 1px solid #B9B9B9;
  padding: 15px;
  background-color:black;
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
