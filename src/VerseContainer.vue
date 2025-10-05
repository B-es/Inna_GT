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
  <div class="container">
    <label class="checkbox-wrapper">
      <input type="checkbox" v-model="isPreview">
      Режим редактирования
    </label>
    <SentenceContainer v-for="(row, index) in dataVerseRepository.data" :key="'row'+index" :words-data="row"></SentenceContainer>
  </div>
</template>

<style scoped>

.checkbox-wrapper {
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
}

.container {
  background-color: red;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 4%;
}
</style>
