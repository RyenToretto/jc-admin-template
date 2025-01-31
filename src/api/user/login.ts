import type { User } from '/#/user'
import type { LoginInterface } from '/#/login'
import { http } from '/@/plugins/axios'

export const requestUserInfo = () => {
  return http.request<User>({
    url: 'info'
  })
}

export const requestLogin = () => {
  return http.request<LoginInterface>({
    url: 'login',
    method: 'post'
  })
}
