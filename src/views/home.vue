<template>
  <div class="home-page">
    <img class="home-page-photo" src="/images/home.jpg" alt="" />
    <div class="home-btn-box">
      <router-link class="home-btn home-to-admin" :to="{ name: 'admin.home' }"
        >后台管理</router-link
      >
      <router-link class="home-btn home-to-login" :to="{ name: 'login' }"
        >用户登录</router-link
      >
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
  .home-page-photo {
    display: block;
    margin: 0 auto;
  }
  .home-btn-box {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    .home-btn {
      padding: 6px 12px;
    }
  }
}
</style>
