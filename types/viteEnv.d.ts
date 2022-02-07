interface ViteEnv {
  VITE_ROUTE_AUTOLOAD: boolean

  VITE_APP_PORT: number

  VITE_APP_BASE_URL: string

  VITE_APP_PROXY: string

  VITE_APP_PROJECT_NAME: string
}

// Support type hints for env variables in components
// https://cn.vitejs.dev/guide/env-and-mode.html#intellisense
interface ImportMetaEnv extends ViteEnv {}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
