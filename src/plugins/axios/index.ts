import Axios from './Axios'
import { doEnv } from '@/utils'

export const http = new Axios({
  baseURL: doEnv.VITE_APP_BASE_URL,
  timeout: 60000
})
