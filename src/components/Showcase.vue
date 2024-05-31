<template>
  <div class="showcase_Wrapper">
    <div class="showcase">
      <CharacterCard :characters="characters"></CharacterCard>
    </div>
  </div>
</template>

<script setup>
import CharacterCard from '@/components/CharacterCard.vue'

defineProps({
  characters: Array,
})

</script>

<style>
@media (max-width: 40.625em) {
  .showcase_Wrapper {
    padding: 1.5rem;
  }
}
.showcase_Wrapper {
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  padding: 4.5rem 0px;
  background: rgb(39, 43, 51);
  min-height: calc(-60px + 50vh);
}
@media (max-width: 40.625em) {
  .showcase_Wrapper {
    padding: 1.5rem;
  }
}
.showcase {
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1920px;
}
</style>