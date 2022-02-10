<template>
  <div class="login-form">
    <div class="login-content">
      <div class="login-info">
        <div class="login-card">
          <h2 class="login-title">登陆页</h2>
          <DoButton @click="toLogin" />
          <div class="wechat-login"><i class="fab fa-weixin"></i></div>
        </div>
        <div class="login-bottom">
          <DoLink />
          <DoLink />
          <DoLink />
        </div>
      </div>

      <div class="login-log">
        <div class="log-item">
          <img class="home-page-photo" src="@/assets/images/demo.png" alt="" />
        </div>

        <div class="log-item">
          <img src="/images/login.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

import { doLocal } from '@/utils'
import { requestLogin, requestStaticVersion } from '@/api'

import DoButton from '@/components/form/DoButton.vue'
import DoLink from '@/components/form/DoLink.vue'

onMounted(async () => {
  const staticVersion = await requestStaticVersion()
  console.log('staticVersion =', staticVersion)
})

const router = useRouter()

const toLogin = async () => {
  const {
    data: { token }
  } = await requestLogin()
  doLocal.set('token', {
    token,
    expire: 10000
  })
  await router.push({ name: 'home' })
}
</script>

<script lang="ts">
export default {
  route: {
    name: 'auth.login',
    meta: {
      guest: true,
      backgroundColor: '#cbd5e1'
    }
  }
}
</script>

<style lang="scss" scoped>
.login-form {
  box-sizing: border-box;
  padding: 30px 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  .login-content {
    box-sizing: border-box;
    border-radius: 6px;
    overflow: hidden;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0.1) 0 4px 6px -1px,
      rgba(0, 0, 0, 0.1) 0 2px 4px -2px;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-info {
      box-sizing: border-box;
      padding: 24px;
      width: 360px;
      height: 332px;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      .login-card {
        box-sizing: border-box;
        width: 100%;
        .login-title {
          line-height: 1.5;
          text-align: center;
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
            Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
          font-size: 18px;
          font-weight: 400;
          color: rgba(55, 65, 81, 1);
        }
        .login-detail {
          box-sizing: border-box;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          .login-input {
            box-sizing: border-box;
            margin: 4px 0;
            padding: 4px 8px;
            width: 100%;
            border: 1px solid rgb(229, 231, 235);
            border-radius: 2px;
          }
        }
        .do-button {
          box-sizing: border-box;
          margin: 20px 0 12px;
          width: 100%;
        }
        .wechat-login {
          box-sizing: border-box;
          margin: 0 auto;
          padding: 4px;
          width: 26px;
          height: 24px;
          border-radius: 50%;
          background-color: rgb(22, 163, 74);
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .login-bottom {
        box-sizing: border-box;
        > a {
          padding: 0 4px;
        }
      }
    }
    .login-log {
      box-sizing: border-box;
      width: 360px;
      height: 332px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .log-item {
        box-sizing: border-box;
        width: 100%;
        height: 50%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        > img {
          width: 100%;
          -webkit-user-drag: none;
        }
      }
    }
  }
}
</style>
