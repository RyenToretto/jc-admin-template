<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    退款的编辑器设置:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    查看
    <code>README.md</code>
    获取更多信息.
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite 文档</a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 文档</a>
  </p>

  <button type="button" @click="count++">count = {{ count }}</button>
  <p>
    编辑
    <code>components/HelloWorld.vue</code>
    去测试热模块更新.
  </p>
</template>
