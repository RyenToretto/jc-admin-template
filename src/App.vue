<template>
  <router-view />
</template>

<script setup lang="ts">
// import { onMounted } from 'vue';
// import { requestLogin } from '@/api';
import { env } from '@/utils';

console.log(env);
// onMounted(async () => {
//   const response = await requestLogin();
//   console.log(response.data.token);
// });
</script>
