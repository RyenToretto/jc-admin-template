import { App } from 'vue'
import { camelCase } from 'lodash'
import setupElementPlus from './elementui'
import DoButton from '@/components/form/DoButton.vue'
import DoLink from '@/components/form/DoLink.vue'

export function setupPlugins(app: App) {
  autoRegisterComponent(app)
  setupElementPlus(app)
  app.component('DoButton', DoButton)
  app.component('DoLink', DoLink)
}

function autoRegisterComponent(app: App) {
  const components = import.meta.globEager('../components/globalComponents/*.vue')
  Object.keys(components).forEach(key => {
    const name = key.split('/').pop()?.split('.').shift() as string
    app.component(camelCase(name), components[key].default)
  })
}
