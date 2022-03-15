import type { StaticVersion } from '/#/version'
import { http } from '/@/plugins/axios'

export const requestStaticVersion = () => {
  console.log(window.location.origin, window.location)
  return http.request<StaticVersion>({
    url: `${window.location.origin}/json/version.json`
  })
}
