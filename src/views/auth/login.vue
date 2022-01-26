<template>
  <Form v-slot="{ errors }" class="login-form" :validation-schema="schema" @submit="onSubmit">
    <div class="login-content">
      <div class="login-info">
        <div class="login-card">
          <h2 class="login-title">登陆页</h2>
          <div class="login-detail">
            <Field name="account" class="login-input account-input" label="账号" value="" placeholder="请输入邮箱" />
            <p v-if="errors.account" class="login-error account-error">请输入邮箱或者手机号</p>
            <Field name="password" class="login-input password-input" label="密码" value="" type="password" />
            <ErrorMessage name="password" as="p" class="login-error password-error" />
          </div>
          <jc-button />
          <div class="wechat-login"><i class="fab fa-weixin"></i></div>
        </div>
        <div class="login-bottom">
          <jc-link />
          <jc-link />
          <jc-link />
        </div>
      </div>
      <div class="login-log">
        <img src="/images/login.jpg" alt="" />
      </div>
    </div>
  </Form>
</template>

<script setup lang="ts">
import v from '@/plugins/validate'
import { requestLogin } from '@/api'
import { store } from '@/utils'
import { useRouter } from 'vue-router'

const { Form, Field, ErrorMessage } = v

// :rules="{ required: true, email: true }" (Field component)
// const schema = v.yup.object({
//   account: v.yup.string().required().email().label('账号'),
//   password: v.yup.string().required().min(3).label('密码'),
// });

const router = useRouter()
const schema = {
  account: { required: true, regex: /.+@.+|\d{11}/i },
  password: { required: true, min: 3 }
}

const onSubmit = async (value: any) => {
  const {
    data: { token }
  } = await requestLogin()
  store.set('token', {
    token,
    expire: 10000
  })
  await router.push({ name: 'home' })
}
</script>

<script lang="ts">
export default {
  route: {
    name: 'login',
    meta: {
      guest: true
    }
  }
}
</script>

<style lang="scss" scoped>
.login-form {
  box-sizing: border-box;
  padding: 30px 0;
  min-height: 100vh;
  background-color: rgb(203, 213, 225);
  display: flex;
  justify-content: center;
  align-items: center;
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
        .jc-button {
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
      justify-content: center;
      align-items: center;
      > img {
        width: 100%;
      }
    }
  }
}
</style>
