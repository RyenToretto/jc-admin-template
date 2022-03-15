/**
 *  Vite Plugin for fast creating SVG sprites.
 * https://github.com/anncwb/vite-plugin-svg-icons
 */
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

export function configSvgIconsPlugin(isBuild: boolean) {
  return createSvgIconsPlugin({
    svgoOptions: isBuild,
    iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')], // 指定需要缓存的图标文件夹
    symbolId: 'icon-[dir]-[name]', // 指定symbolId格式
    inject: 'body-last', // 自定义插入位置 @default: body-last
    customDomId: '__svg__icons__dom__' // custom dom id @default: __svg__icons__dom__
  })
}
