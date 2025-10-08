<template>
  <button class="result-btn" @click="handleClick"><slot></slot></button>
  <a v-if="audioUrl" :href="audioUrl" download="озвучка.mp3"><button class="result-btn">Скачать озвучку</button></a>
</template>

<script setup>
import { inject, ref} from "vue";


const showPopUp = inject('showPopUp');

const dataVerseRepository = inject("dataVerseRepository");
async function handleClick() {
  const verseText = dataVerseRepository.assembly();
  audioUrl.value = await speak(verseText)

  const audio = new Audio()
  audio.src = audioUrl.value;
  audio.play()

  showPopUp.value = true;

  audio.onended = () => showPopUp.value = false
}
</script>

<style scoped>
.result-btn {
  cursor: pointer;
  transition: all 0.3s ease;
  animation: slideInUp 0.5s ease forwards;
  opacity: 0;
}

.result-btn:hover {
  transform: translateY(-2px);
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
