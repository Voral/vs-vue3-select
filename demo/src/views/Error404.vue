<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <section>
    <div class="head">404</div>
    <div class="message">Oops. Page not found...</div>
    <div class="buttons">
      <button @click="router.go(-1)">Back</button>
      <button @click="router.push('/')">Home</button>
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding-top: 36px;
}

.head {
  font-size: 22vw;
}

.message {
  font-size: 16px;
}

.buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
}

button {
  background: var(--demo-note-color);
  height: var(--vs-height);
  border: none;
  border-radius: var(--vs-border-radius);
  padding: 0 24px;
  cursor: pointer;
  color: var(--vs-colors--dark);
}
button:hover {
  background: var(--vs-dropdown-option--selected-bg);
}
</style>
