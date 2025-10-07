<template>
  <button class="result-btn" @click="handleClick"><slot></slot></button>
  <a v-if="audioUrl" :href="audioUrl" download="озвучка.mp3"><button class="result-btn">Скачать озвучку</button></a>
</template>

<script setup>
import { inject, ref} from "vue";

const audioUrl = ref("");
const useVoiceRSS = async (text) => {
  // Получаем ключ из .env (убедитесь что в .env файле переменная с префиксом VUE_APP_)
  const API_KEY = import.meta.env.VITE_VOICE_API_KEY

  // Правильный URL для VoiceRSS
  const url = `https://api.voicerss.org/?key=${API_KEY}&hl=ru-ru&src=${encodeURIComponent(text)}&c=MP3&f=48khz_16bit_stereo&r=0.8`

  try {
    const response = await fetch(url)

    // Проверяем статус ответа
    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`HTTP ${response.status}: ${errorText}`)
    }

    // Получаем blob и проверяем его тип
    const audioBlob = await response.blob()

    // VoiceRSS возвращает audio/mpeg когда успешно
    if (audioBlob.type === 'text/plain') {
      // Если вернулся текст - это ошибка
      const errorText = await audioBlob.text()
      throw new Error(`API Error: ${errorText}`)
    }

    if (!audioBlob.type.startsWith('audio/')) {
      console.warn('Unexpected MIME type:', audioBlob.type)
      // Создаем blob с правильным MIME type
      return URL.createObjectURL(new Blob([audioBlob], { type: 'audio/mpeg' }))
    }

    return URL.createObjectURL(audioBlob)

  } catch (error) {
    console.error('VoiceRSS error:', error)
    throw error // Пробрасываем ошибку дальше
  }
}

const showPopUp = inject('showPopUp');

const dataVerseRepository = inject("dataVerseRepository");
async function handleClick() {
  const verseText = dataVerseRepository.assembly();
  audioUrl.value = await useVoiceRSS(verseText)

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
