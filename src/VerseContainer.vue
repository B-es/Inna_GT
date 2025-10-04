<script setup>
import SentenceContainer from './SentenceContainer.vue';
import WordContainer from './WordContainer.vue';
import verseJson from './verse.json';




</script>

<template>
  <div class="container">
    <SentenceContainer v-for="(row, index) in verseJson" :key="'row'+index">
      <WordContainer v-for="wordData in row" :key="wordData.id">{{ wordData.content }}</WordContainer><br>
    </SentenceContainer>
  </div>
</template>

<style scoped>
.container {
  background-color: red;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 4%;
}
</style>
