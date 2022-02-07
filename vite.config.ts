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
    css: {
      // css预处理器
      preprocessorOptions: {
        scss: {
          // 引入 .scss 这样就可以在全局中使用 variable.scss中预定义的变量了
          // 给导入的路径最后加上 ; 双引号中间是文件地址对应好自己项目的路径就行
          additionalData: '@import "@/styles/shared";'
        }
      }
    },
    resolve: {
      alias
    },
    clearScreen: false, // 设为 false 可以避免 Vite 清屏而错过在终端中打印某些关键信息
    server: {
      host: '127.0.0.1',
      port: env.VITE_APP_PORT,
      strictPort: false,
      open: `http://${getMyIp()}:${env.VITE_APP_PORT}/#/`,
      proxy: {
        '/api': {
          target: env.VITE_APP_PROXY,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, '/ryentoretto/demo')
        }
      }
    }
  }
}
export default configFn
