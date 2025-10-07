<script setup>
import SentenceContainer from './SentenceContainer.vue';
import { inject, ref, watch } from 'vue';

const dataVerseRepository = inject('dataVerseRepository');

const isPreview = ref(true);

watch(isPreview, (newValue) => {
  dataVerseRepository.setEditablesTo(newValue);
}, { immediate: true })
</script>

<template>
  <div class="verse-container">
    <label class="checkbox-wrapper">
      <input class="checkbox-input" type="checkbox" v-model="isPreview">
      Режим редактирования
    </label>
    <br>
    <hr/>
    <SentenceContainer v-for="(row, index) in dataVerseRepository.data" :key="'row'+index" :words-data="row"></SentenceContainer>
  </div>
</template>

<style scoped>

.checkbox-input {
    appearance: none;
    width: 1rem;
    height: 1rem;
    border: 1px solid #0d6efd;
    border-radius: 0.25rem;
    background-color: #fff;
    cursor: pointer;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin: 0;
}

.checkbox-input:checked {
    background-color: red;
    border-color: red;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e");
}

.checkbox-wrapper {
  display: flex;
  align-items: center; /* Выравнивание по центру по вертикали */
  gap: 8px; /* Расстояние между чекбоксом и текстом */
  position: absolute;
  top: 25px;
  right: 45px;
  cursor: pointer;
  color:white
}

.verse-container {
  position: relative;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 4%;
}

@media(max-width: 768px){
  .verse-container {
    padding: 10%;
  }
}
</style>
