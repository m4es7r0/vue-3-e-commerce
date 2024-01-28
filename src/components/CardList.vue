<script setup lang="ts">
import { ref, watch } from 'vue';

import { useQuery } from '@tanstack/vue-query'
import { api } from '../api/index'

import Card from './Card.vue';

const props = defineProps<{
  sortBy: string
  handleUpdateSortBy: (value: string) => void
}>()

const { data, isPending, refetch } = useQuery({
  queryKey: ['sneakers'],
  queryFn: () => api.getSneakers({ sortBy: props.sortBy }),
  refetchOnWindowFocus: false
})

const sneakersList = ref(data)

watch(() => props.sortBy, () => {
  refetch()
})

</script>

<template>
  <div class="grid grid-cols-4 gap-4">
    <div v-if="isPending" v-for="item in [...Array(12)]" :item="item" :key="item"
      class="w-full h-[430px] p-8 bg-gray-100 rounded-xl">
    </div>
    <Card v-for="sneakers in sneakersList" :item="sneakers" :key="sneakers.id" :="sneakers" />
  </div>
</template>