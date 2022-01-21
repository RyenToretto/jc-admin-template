import { createApp } from 'vue';
import App from './App.vue';
import router, { setupRouter } from './router/index';
import { setupPlugins } from './plugins';
import '@/styles/global.scss';

async function bootstrap() {
  const app = createApp(App);

  setupRouter(app);
  setupPlugins(app);

  await router.isReady();
  app.mount('#app');
}

await bootstrap();
