<template>
  <div class="hello-world">
    <h1>{{ msg }}</h1>

    <p>
      编辑器设置:
      <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
      +
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    </p>

    <p>
      <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite 文档</a>
      |
      <a href="https://v3.vuejs.org/" target="_blank">Vue 3 文档</a>
    </p>

    <button type="button" @click="count++">count = {{ count }}</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<style lang="scss" scoped>
.hello-world {
  box-sizing: border-box;
  width: 100%;
}
</style>
