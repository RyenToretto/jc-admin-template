import { doLocal } from '@/utils'
import { doEnv } from '@/utils'
import { RouteLocationNormalized, Router } from 'vue-router'

class Guard {
  constructor(private router: Router) {}

  public run() {
    this.router.beforeEach((to, from) => {
      if (to.meta.backgroundColor) {
        document.documentElement.style.backgroundColor = to.meta.backgroundColor as string
      } else {
        document.documentElement.style.backgroundColor = '#ffffff'
      }

      if (to.meta.title) {
        document.title = `${to.meta.title} | ${doEnv.VITE_APP_PROJECT_NAME}`
      } else {
        document.title = doEnv.VITE_APP_PROJECT_NAME
      }

      // handling login and verification
      const token = doLocal.get('token')?.token
      if (!Guard.isLogin(to, token)) {
        return { name: 'auth.login' }
      }

      if (!Guard.isGuest(to, token)) {
        return from
      }
    })
  }

  private static isGuest(route: RouteLocationNormalized, token: any) {
    return Boolean(!route.meta.guest || (route.meta.guest && !token))
  }

  private static isLogin(route: RouteLocationNormalized, token: any) {
    return Boolean(!route.meta.auth || (route.meta.auth && token))
  }
}

export default (router: Router) => {
  new Guard(router).run()
}
