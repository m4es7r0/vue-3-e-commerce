<script setup lang="ts">
defineProps<{
  handleToggleCart: () => void
}>()
</script>

<template>
  <header class="flex justify-between items-center border-b border-[#9b9b9b] p-5">
    <div class="flex items-center gap-4">
      <img src="/logo.png" alt="logo" class="w-12 h-auto object-contain">
      <div>
        <h2 class="text-xl font-bold uppercase">Vue Sneakers</h2>
        <p class="text-[#9b9b9b]">Магазин лучших кроссовок</p>
      </div>
    </div>
    <ul
      class="flex items-center gap-10 [&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li>*]:text-[#9b9b9b] [&>li]:cursor-pointer">
      <li class="[&>*]:hover:text-black [&>*]:transition-all" @click="handleToggleCart">
        <img src="/cart.svg" alt="cart">
        <b>100$</b>
      </li>
      <li class="[&>*]:hover:text-black [&>*]:transition-all">
        <img src="/heart.svg" alt="cart">
        <span>Закладки</span>
      </li>
    </ul>
  </header>
</template>