<template>
  <div>
    <WordContainer v-for="wordData in props.wordsData" :key="wordData.id" :word-data></WordContainer><br>
  </div>

</template>

<script setup>
import WordContainer from './WordContainer.vue';

const props = defineProps({
  wordsData: {
    type: Array,
    required: true,
  }
})
</script>

<style scoped>
div {
  margin: 1px 0
}
</style>
