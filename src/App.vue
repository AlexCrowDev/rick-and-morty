<template>
  <Filter></Filter>
  <Showcase></Showcase>
</template>

<script setup>
import Filter from '@/components/Filter.vue'
import Showcase from '@/components/Showcase.vue'

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
