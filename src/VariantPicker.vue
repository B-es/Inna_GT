<template>
  <div v-if="dataVerseRepository.getEmptyContentWordWithVariants() !== undefined" class="container">
    <button class="variant-btn"
      @click="handleClick(word.id, index)"
      v-for="(variant, index) in word.variants"
      :key="variant"
    >
      {{ variant }}
    </button>
  </div>
</template>

<script setup>
import { inject} from "vue";

const word = inject("currentWord");
const setWord = inject('setWord')
const dataVerseRepository = inject("dataVerseRepository");

const handleClick = (id, index) => {
  dataVerseRepository.setContentByIndexFromVariantsToWordById(id, index);
  const emptyWord = dataVerseRepository.getEmptyContentWordWithVariants();
  if(emptyWord) {
    setWord(emptyWord);
  }
  else{
    setWord({});
  }
};

</script>

<style scoped>
.container {
  display: flex;
  gap: 30px;
  padding: 1rem;
  position: relative;
  min-height: 60px;
}

.container:not(:empty)::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: white;
  animation: borderSlide 0.5s ease-out;
}

.variant-btn {
  cursor: pointer;
  transition: all 0.3s ease;
  animation: slideInUp 0.5s ease forwards;
  opacity: 0;
}

.variant-btn:hover {
  transform: translateY(-2px);
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes borderSlide {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}
</style>
