<script setup lang="ts">
const props = defineProps<{
  options: {
    id: number
    value: string
    name: string // Предполагаю, что это строка
  }[]
  handleUpdateSortBy: (value: string) => void
}>()

const handleSelect = (e: any) => {
  props.handleUpdateSortBy(e.target.value)
}
</script>

<template>
  <div class="flex items-center gap-4">
    <select @change="handleSelect"
      class="py-2 px-3 border border-gray-200 focus:border-gray-400 rounded-md focus:outline-none">
      <option v-for="option in options" :key="option.id" :value="option.value">{{ option.name }}</option>
    </select>
    <div class="relative">
      <input class="border border-gray-200 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:border-gray-400"
        type="text" placeholder="Поиск..." />
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <img src="/search.svg" />
      </div>
    </div>
  </div>
</template>
