import { ConfigEnv, loadEnv, UserConfigFn } from 'vite'
import alias from './vite/alias'
import { getMyIp, parseEnv } from './vite/utils'
import setupPlugins from './vite/plugins'

const configFn: UserConfigFn = ({ command, mode }: ConfigEnv) => {
  const isBuild = command === 'build'
  const root = process.cwd()
  const env = parseEnv(loadEnv(mode, root))
  return {
    plugins: setupPlugins(isBuild, env),
    resolve: {
      alias
    },
    clearScreen: false, // 设为 false 可以避免 Vite 清屏而错过在终端中打印某些关键信息
    server: {
      host: '127.0.0.1',
      port: env.VITE_APP_PORT,
      strictPort: false,
      open: `http://${getMyIp()}:${env.VITE_APP_PORT}/#/`
    }
  }
}
export default configFn
