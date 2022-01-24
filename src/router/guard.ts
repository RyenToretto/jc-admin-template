import { store } from '@/utils'
import { RouteLocationNormalized, Router } from 'vue-router'

class Guard {
  constructor(private router: Router) {}

  public run() {
    // handling login and verification
    this.router.beforeEach((to, from) => {
      const token = store.get('token')?.token
      if (!Guard.isLogin(to, token)) {
        return { name: 'login' }
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
