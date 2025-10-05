<template>
  <span :class="{isEditable: wordData.editable && !isFocused, isFocused: isFocused}" @click="handleClick">
    {{ content }}
  </span>
</template>

<script setup>

import { computed, defineProps, inject } from 'vue'

const props = defineProps({
  wordData: {
    type: Object,
    required: true,
  }
})

const content = computed(() => {
  if(!props.wordData.content) return "_".repeat(props.wordData.variants[0].length);
  return props.wordData.content;
})

const isPassive = computed(() => !props.wordData.editable);

const setWord = inject('setWord')
const currentWord = inject("currentWord");

const isFocused = computed(() => currentWord.value === props.wordData);

const handleClick = () => {
  if(isPassive.value) return;
  setWord(props.wordData)
}
</script>

<style scoped>
span {
  color: white;
  border-bottom: 1px solid white;
  border-radius: 0px;
  padding: 5px;
  margin: 5px;
  max-width: 100%;
  display: inline-block;
  transition: padding .3s ease;
}

.isEditable {
  color: white;
  border: 5px solid rgb(255, 255, 255);
  border-top: 0;
  border-right: 0;
  border-radius: 5px;
}

.isFocused {
  box-shadow: 0 5px 15px 0 rgb(0, 0, 0);
  color:red;
  background-color: white;
  padding: .4rem;
  border-radius: 5px;
}
</style>
