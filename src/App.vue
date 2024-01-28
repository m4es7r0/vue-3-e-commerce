<script setup lang="ts">
import { ref } from 'vue';
import CardList from './components/CardList.vue';
import Drawer from './components/Drawer.vue';
import Header from './components/Header.vue';
import FormSearch from './components/FormSearch.vue';

const cartIsOpen = ref(false)

const sortBy = ref("-id")
const sortOptions = ref<{
  id: number
  value: string
  name: SelectOptionsType
}[]>([
  {
    id: 1,
    value: '-id',
    name: "По названию"
  },
  {
    id: 2,
    value: 'price',
    name: "По цене (дешевые)"
  },
  {
    id: 3,
    value: '-price',
    name: "По цене (дорогие)"
  }
])

const handleToggleCart = () => {
  cartIsOpen.value = !cartIsOpen.value
}
const handleUpdateSortBy = (value: string) => {
  sortBy.value = value
}
</script>

<template>
  <div class="container mx-auto my-5 bg-white rounded-xl shadow-xl">
    <Header :handleToggleCart="handleToggleCart" />
    <Drawer v-if="cartIsOpen" :handleToggleCart="handleToggleCart" />
    <div class="p-10 space-y-8">
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold">Все кроссовки</h1>
        <FormSearch :options="sortOptions" :handleUpdateSortBy="handleUpdateSortBy" />
      </div>
      <CardList :sortBy="sortBy" :handleUpdateSortBy="handleUpdateSortBy" />
    </div>
  </div>
</template>

<style scoped></style>
