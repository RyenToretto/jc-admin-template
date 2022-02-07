<template>
  <div class="home-page">
    <!-- <img class="home-page-photo" src="/images/home.jpg" alt="" /> -->
    <img class="home-page-photo" src="https://avatars.githubusercontent.com/u/32086611?v=4" alt="" />

    <div class="home-btn-box">
      <router-link class="home-to-admin btn" :to="{ name: 'admin.home' }">后台管理</router-link>
      <router-link class="home-to-login btn btn-outline" :to="{ name: 'login' }">用户登录</router-link>
    </div>

    <div class="word">
      <el-card shadow="hover">msg</el-card>
      <el-button type="primary" @click="changeColor">click me</el-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const msg = 'Hello World!'
let color = ref('red')
const changeColor = () => {
  if (color.value === 'black') {
    color.value = 'red'
  } else {
    color.value = 'black'
  }
}
</script>

<style lang="scss" scoped>
.home-page {
  box-sizing: border-box;
  padding: 30px 0;
  min-height: 100vh;
  background-color: rgb(55, 65, 81);
  .word {
    box-sizing: border-box;
    margin: 30px auto 0;
    width: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > .el-card {
      background: v-bind(color);
      color: #fff;
    }
    > .el-button {
      margin-top: 10px;
    }
  }
  .home-page-photo {
    display: block;
    box-sizing: border-box;
    margin: 0 auto;
    width: 200px;
    height: 200px;
    border: 8px solid #fff;
    border-radius: 50%;
  }
  .home-btn-box {
    box-sizing: border-box;
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .home-to-login {
      margin-left: 6px;
    }
  }
}
</style>
