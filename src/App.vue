<template>
<Filter @filter-changed="onFilterChanged"></Filter>
<Showcase :characters="data"></Showcase>
</template>

<script setup>
import Filter from '@/components/Filter.vue'
import Showcase from '@/components/Showcase.vue'
import useCharacterService from '@/compositions/useCharacterService'
import { ref } from 'vue'

const characterService = useCharacterService()

const data = ref([])

loadData()

async function loadData(filter) {
  const newData = await characterService.getCharacters(filter?.name, filter?.status)
  data.value = newData
}

function onFilterChanged(filter) {
  loadData(filter)
}
</script>

<style>
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: inherit;
}
html, body {
  font: 18px / 1.4 -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-weight: 500;
}
</style>
