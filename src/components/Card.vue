<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  title: string
  img: string
  price: number
  isAdded?: boolean
}>()

const isLiked = ref(false);
const isAdded = ref(props.isAdded);

const onClick = () => {
  isLiked.value = !isLiked.value;
};
const onAddHendler = () => {
  isAdded.value = !isAdded.value;
};
</script>

<template>
  <div
    class="relative flex justify-between flex-col w-full border border-slate-100 rounded-xl p-8 cursor-pointer transition hover:shadow-xl hover:transform hover:-translate-y-2">
    <div @click="onClick" class="absolute top-8 left-8">
      <img :src="!isLiked ? '/like-1.svg' : '/like-2.svg'" alt="Favorite" />
    </div>
    <img :src="img" class="w-full" alt="Sneaker" />
    <p>{{ title }}</p>
    <div class=" flex justify-between items-center mt-5">
      <div class="flex flex-col gap-2">
        <span class="text-[#9b9b9b]">Цена:</span>
        <span class="font-bold">{{ price }} $</span>
      </div>
      <img :src="!isAdded ? '/plus.svg' : '/checked.svg'" @click="onAddHendler" alt="Plus" />
    </div>
  </div>
</template>