import { cloneDeep } from 'lodash'

const doEnv: any = cloneDeep(import.meta.env)

Object.entries(import.meta.env as Record<string, any>).forEach(([key, value]) => {
  if (value === 'true' || value === 'false') {
    doEnv[key] = value === 'true'
  } else if (/^\d+$/.test(value)) {
    doEnv[key] = Number(value)
  } else if (value === 'null') {
    doEnv[key] = null
  } else if (value === 'undefined') {
    doEnv[key] = undefined
  }
})

export default doEnv as ViteEnv
