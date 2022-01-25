<template>
  <div class="home-page">
    <img class="home-page-photo" src="/images/home.jpg" alt="" />
    <div class="home-btn-box">
      <router-link class="home-to-admin btn" :to="{ name: 'admin.home' }">后台管理</router-link>
      <router-link class="home-to-login btn btn-outline" :to="{ name: 'login' }">用户登录</router-link>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  route: {
    name: 'home'
  }
}
</script>

<style lang="scss" scoped>
.home-page {
  box-sizing: border-box;
  padding: 30px 0;
  min-height: 100vh;
  background-color: rgb(55, 65, 81);
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
