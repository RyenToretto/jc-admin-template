<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { requestUserInfo } from '@/api'
import { env } from '@/utils'

console.log(env)
onMounted(async () => {
  const response = await requestUserInfo()
  console.log(response.data)
})
</script>
