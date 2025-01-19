<template>
  <div class="loading-screen">
    <div class="loading-container">
      <div class="loading-bar">
        <div class="loading-progress"></div>
      </div>
      <span class="loading-text">加载中...</span>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(18, 18, 18, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  backdrop-filter: blur(4px);
}

.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.loading-bar {
  width: 200px;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
}

.loading-progress {
  width: 50%;
  height: 100%;
  background: #409EFF;
  border-radius: 2px;
  animation: progress 1.5s ease-in-out infinite;
}

.loading-text {
  color: #fff;
  font-size: 0.9rem;
  letter-spacing: 2px;
  font-weight: 300;
}

@keyframes progress {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(200%);
  }
}
</style> 