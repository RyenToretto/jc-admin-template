import { App } from 'vue'
import { camelCase, capitalize } from 'lodash'
import setupElementPlus from './elementui'

export function setupPlugins(app: App) {
  autoRegisterComponent(app)
  setupElementPlus(app)
}

function autoRegisterComponent(app: App) {
  const components = import.meta.globEager('../components/globalComponents/*.vue')
  Object.keys(components).forEach(key => {
    const name = key.split('/').pop()?.split('.').shift() as string
    app.component(capitalize(camelCase(name)), components[key].default)
  })
}
