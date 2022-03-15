<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { requestUserInfo } from '/@/api'
import { doEnv } from '/@/utils'

console.log('doEnv =', doEnv)
onMounted(async () => {
  const response = await requestUserInfo()
  console.log('request User Info =', response.data)
})
</script>
