
<template>
  <div class="main-container">
    <h1>Напиши себе поздравление</h1>
    <VerseContainer></VerseContainer>
    <VariantPicker></VariantPicker>
    <ResultButton v-if="dataVerseRepository.getEmptyContentWordWithVariants() === undefined">Озвучить</ResultButton>
    <PopUp></PopUp>
    <video autoplay muted loop src="/video_back.mp4"></video>
  </div>
</template>

<script setup>
import PopUp from './PopUp.vue';
import ResultButton from './ResultButton.vue';
import VariantPicker from './VariantPicker.vue';
import VerseContainer from './VerseContainer.vue';

import {ref, provide, inject} from 'vue';

const dataVerseRepository = inject("dataVerseRepository");

const currentWord = ref({});

const showPopUp = ref(false);

// Предоставляем функцию для установки вариантов
const setWord = (word) => {
  currentWord.value = word
}
//setWord(dataVerseRepository.getEmptyContentWordWithVariants());
provide('setWord', setWord)
provide('currentWord', currentWord)
provide('showPopUp', showPopUp)
</script>


<style scoped>

video {
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: fill;
  filter: blur(2px);
  transform: scale(1.1);
}

.main-container {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  /* background-color: rgb(44, 44, 44); */
}
</style>

<style>
* {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 25px;
}


button {
  box-shadow: 0 5px 15px 0 rgb(246, 11, 11);
  transition: 0.5s;
  padding: 0.5rem;
  border-radius: 5px;
  border: 0;
}

button:hover {
  transform: translate(0, -3px);
  box-shadow: 0 20px 40px 0 rgb(246, 11, 11);
}

button:active {
  background-color: red;
  color: white;
}
</style>
