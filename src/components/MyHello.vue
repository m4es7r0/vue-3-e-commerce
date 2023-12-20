<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ msg?: string }>()

let counter = ref(0)

const inc = () => {
  counter.value++
}
</script>

<template>
  <h1>Hello world {{ msg }}</h1>
  <h1>{{ counter }}</h1>
  <button @click="inc">Click</button>
  <input v-model="counter" @keyup="(e) => e.key === 'Enter' ? inc() : null">
  <slot/>
</template>

<style scoped>
</style>