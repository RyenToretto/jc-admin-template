import { resolve } from 'path'
import { AliasOptions } from 'vite'

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}

const alias = [
  // /@/xxxx => src/xxxx
  {
    find: /\/@\//,
    replacement: pathResolve('src') + '/'
  },
  // /#/xxxx => types/xxxx
  {
    find: /\/#\//,
    replacement: pathResolve('types') + '/'
  }
] as AliasOptions

export default alias
