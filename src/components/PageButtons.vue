<template>
  <div class="pageButtons">
    <button class="PreviousPage" @click="previousPage">Previous</button>
    <button class="NextPage" @click="nextPage">Next</button>
  </div>
</template>

<script setup>

const emit = defineEmits(['previus-page', 'next-page'])

function previousPage() {
  emit('previus-page')
}

function nextPage() {
  emit('next-page')
}


</script>

<style scoped>
.pageButtons {
  display: flex;
  justify-content: space-around;
}
button {
  width: 8em;
  height: 2.3em;
}
</style>