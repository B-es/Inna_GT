<template>
  <div>
    <!-- Выпадающее окошко -->
    <div v-if="showPopup" class="popup-overlay" @click="showPopup = false">
      <div class="popup-content" @click.stop>
        <button class="close-btn" @click="showPopup = false">×</button>
        <img
          src="/robot-dance.gif"
          alt="Анимированная гифка"
          class="gif-image"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const showPopup = inject('showPopUp');
</script>

<style scoped>
.open-btn {
  background: #4CAF50;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
}

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

.popup-content {
  background: white;
  padding: 30px;
  border-radius: 12px;
  position: relative;
  max-width: 90%;
  max-height: 90%;
  animation: slideIn 0.3s ease;
  text-align: center;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-btn:hover {
  background: #f0f0f0;
  color: #333;
}

.gif-image {
  max-width: 100%;
  max-height: 400px;
  border-radius: 8px;
  margin-bottom: 15px;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: scale(0.8) translateY(-20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
</style>
