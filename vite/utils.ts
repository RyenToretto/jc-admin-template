import { cloneDeep } from 'lodash'
import os, { NetworkInterfaceInfo } from 'os'

// support env type hints in vite configuration files
export function parseEnv(env: Record<string, any>): ViteEnv {
  const envs: any = cloneDeep(env)
  Object.entries(env).forEach(([key, value]) => {
    if (value === 'true' || value === 'false') envs[key] = value === 'true'
    else if (/^\d+$/.test(value)) envs[key] = Number(value)
    else if (value === 'null') envs[key] = null
    else if (value === 'undefined') envs[key] = undefined
  })
  return envs
}

// 获取本机 IP
export const getMyIp = (): string | undefined => {
  const ifaces: NodeJS.Dict<NetworkInterfaceInfo[]> = os.networkInterfaces()

  for (const attr of Object.keys(ifaces)) {
    for (const info of ifaces[attr] as NetworkInterfaceInfo[]) {
      if (info.family === 'IPv4' && info.address !== '127.0.0.1') {
        console.log(info.address)
        return info.address
      }
    }
  }
}
