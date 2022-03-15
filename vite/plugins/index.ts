import vue from '@vitejs/plugin-vue'
import { Plugin } from 'vite'

import { setupMockPlugin } from './mock'
import { configSvgIconsPlugin } from './svgSprite'

export default function setupPlugins(isBuild: boolean, env: ViteEnv) {
  const plugins: Plugin[] = [vue()]

  plugins.push(setupMockPlugin(isBuild))
  plugins.push(configSvgIconsPlugin(isBuild))
  return plugins
}

// type Record<T extends keyof any, D> = {
//   [P in T]: D;
// };
