<template>
  <Form
    v-slot="{ errors }"
    class="login-form"
    :validation-schema="schema"
    @submit="onSubmit"
  >
    <div class="login-content">
      <div class="login-info">
        <div>
          <h2 class="login-info">登陆页</h2>
          <div class="login-detail">
            <Field
              name="account"
              class="jc-input"
              label="账号"
              value="caffreygo@163.com"
              placeholder="请输入邮箱或者手机号"
            />
            <p v-if="errors.account" class="jc-error">请输入邮箱或者手机号</p>
            <Field
              name="password"
              class="jc-input mt-3"
              label="密码"
              value="admin888"
              type="password"
            />
            <ErrorMessage name="password" as="p" class="jc-error" />
          </div>
          <jc-button class="mt-5 w-full" />
          <div class="wechat-login"><i class="fab fa-weixin"></i></div>
        </div>
        <div class="flex gap-2 justify-center mt-5">
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
form {
  @apply bg-slate-300 h-screen flex justify-center items-start md:items-center p-5;
}
</style>
