<template>
<Filter @filter-changed="onFilterChanged"/>
<Showcase :characters="data.results"/>
<PageButtons @previus-page="onPreviousPage" @next-page="onNextPage"/>
</template>

<script setup>
import Filter from '@/components/Filter.vue'
import Showcase from '@/components/Showcase.vue'
import PageButtons from "@/components/PageButtons";
import useCharacterService from '@/compositions/useCharacterService'
import { ref } from 'vue'

const characterService = useCharacterService()

const data = ref([])
let filter = {}
let page = 1

loadData()

async function loadData(filter, page) {
  const newData = await characterService.getCharacters(filter?.name, filter?.status, page)
  data.value = newData
}

function onFilterChanged(_filter) {
  page = 1
  filter = _filter
  loadData(filter)
}

function onPreviousPage() {
  if (page > 1) {
    page -= 1
    loadData(filter, page)
  }
}

function onNextPage() {
  if (page < data.value.info.pages) {
    page+= 1
    loadData(filter, page)
  }
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
