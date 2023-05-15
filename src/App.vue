<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
   <RouterView />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

.border-alert-1 {
  -webkit-text-stroke: 2px #2E2D39;
}

.border-alert-2 {
  -webkit-text-stroke: 2px #8591FA;
}

.lds-facebook {
  width: 80px;
  height: 80px;
}
.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: #808080;
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}

.lds-facebook div:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}
.lds-facebook div:nth-child(3) {
  left: 56px;
  animation-delay: 0;
}
@keyframes lds-facebook {
  0% {
    top: 8px;
    height: 64px;
  }
  50%, 100% {
    top: 24px;
    height: 32px;
  }
}

.test {
  color: #1E1E1E absolute;
}
</style>

