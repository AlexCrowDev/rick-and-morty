<template>
  <article class="characterCard" v-for="character in characters">
    <div class="characterCard__Img">
      <img :src=character.image alt="Antenna Morty">
    </div>
    <div class="characterCard__Content">
        <div class="section">
          <span>
            <h2>{{ character.name }}</h2>
          </span>
          <span class="status">
            <span class="status__icon"></span> {{ character.status }} - {{ character.species }}
          </span>
        </div>
        <div class="section">
          <span class="text-mini text-gray">Last known location:</span>
          <span>{{ character.location.name }}</span>
        </div>
        <div class="section">
          <span class="text-mini text-gray">First seen in:</span>
          <span>{{ character.episode }}</span>
        </div>
    </div>
  </article>
</template>

<script setup>

defineProps({
  characters: Array,
})

</script>

<style>
.characterCard {
    width: 600px;
    height: 220px;
    display: flex;
    overflow: hidden;
    background: rgb(60, 62, 68);
    border-radius: 0.5rem;
    margin: 0.75rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}
@media (max-width: 40.625em) {
    .characterCard {
        flex-direction: column;
        height: initial;
        width: 100%;
    }
}
.characterCard__Img {
    flex: 2 1 0%;
    width: 100%;
}
.characterCard__Img img {
    width: 100%;
    height: 100%;
    margin: 0px;
    opacity: 1;
    transition: opacity 0.5s ease 0s;
    object-position: center center;
    object-fit: cover;
}
@media (max-width: 40.625em) {
    .characterCard__Img img {
        height: 300px;
    }
}
.characterCard__Content {
    flex: 3 1 0%;
    position: relative;
    padding: 0.75rem;
    color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
}
.characterCard__Content .section {
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
}
.characterCard__Content .section:first-child {
    -webkit-box-pack: start;
    justify-content: flex-start;
}
.characterCard__Content .section:last-child {
    -webkit-box-pack: end;
    justify-content: flex-end;
}
@media (max-width: 40.625em) {
    .characterCard__Content .section + .section {
        margin-top: 1.25rem;
    }
}
.characterCard__Content .status {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    text-transform: capitalize;
}
.characterCard__Content .text-mini{
    font-size: 16px;
}
.characterCard__Content .status__icon {
    height: 0.5rem;
    width: 0.5rem;
    margin-right: 0.375rem;
    background: rgb(85, 204, 68);
    border-radius: 50%;
}
.characterCard__Content .text-gray {
    color: rgb(158, 158, 158);
}

</style>