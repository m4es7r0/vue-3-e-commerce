<script setup lang="ts">
  import Card from './Card.vue';
</script>

<template>
  <div class="grid grid-cols-4 gap-4">
      <Card img="public/sneakers/sneakers-1.jpg" :price="100" title="Мужские Кроссовки Nike Blazer Mid Suede"/>
      <Card img="public/sneakers/sneakers-2.jpg" :price="100" title="Мужские Кроссовки Nike Blazer Mid Suede"/>
      <Card img="public/sneakers/sneakers-3.jpg" :price="100" title="Мужские Кроссовки Nike Blazer Mid Suede"/>
      <Card img="public/sneakers/sneakers-4.jpg" :price="100" title="Мужские Кроссовки Nike Blazer Mid Suede"/>
  </div>
</template>