<script setup lang="ts">
import CartItem from './CartItem.vue';

defineProps<{
  handleToggleCart: () => void
}>()

const vFocus = {
  mounted: (el: HTMLDivElement) => el.focus()
}
</script>

<template>
  <div class="fixed z-10 inset-0 h-full w-screen bg-black opacity-70" :tabindex="0" v-focus="vFocus"
    @keydown.esc="handleToggleCart" @click.stop="handleToggleCart" />
  <div class="flex flex-col justify-between fixed h-full z-10 top-0 right-0 w-96 bg-white px-10 py-7">
    <h2 class="text-2xl font-bold mb-10 flex items-center gap-3">
      <svg @click="handleToggleCart" @keydown.enter="handleToggleCart" :tabindex="0"
        class="rotate-180 w-11 rounded-xl px-3 -ml-3 h-full hover:-translate-x-1 opacity-30 hover:opacity-100 focus-visible:-translate-x-1 focus-visible:opacity-100 transition cursor-pointer"
        viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 7H14.7143" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M8.71436 1L14.7144 7L8.71436 13" stroke="black" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round" />
      </svg>
      <span class="flex-1">Корзина</span>
    </h2>

    <div class="flex flex-col flex-1 justify-between">
      <div class="flex flex-col gap-5">
        <CartItem title="Мужские Кроссовки Nike Blazer Mid Suede" :price="1000" img="/sneakers/sneakers-1.jpg" />
      </div>

      <div>
        <div class="flex flex-col gap-5">
          <div class="flex items-end gap-2">
            <span>Итого:</span>
            <div class="flex-1 border-b border-dashed" />
            <span class="font-bold">1000 $</span>
          </div>

          <div class="flex items-end gap-2">
            <span>Налог 5%:</span>
            <div class="flex-1 border-b border-dashed" />
            <span class="font-bold">1 $</span>
          </div>
        </div>

        <button
          class="flex justify-center items-center gap-3 w-full py-3 mt-10 bg-lime-500 text-white rounded-xl transition active:bg-lime-700 hover:bg-lime-600">
          Оформить заказ
          <img src="/arrow-next.svg" alt="Arrow" />
        </button>
      </div>
    </div>
  </div>
</template>