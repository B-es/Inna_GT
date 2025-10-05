<template>
  <button class="result-btn"><slot></slot></button>
</template>

<script>
  export default {

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
