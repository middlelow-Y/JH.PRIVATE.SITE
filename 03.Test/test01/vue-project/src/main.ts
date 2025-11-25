import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import './assets/main.css'

const app = createApp(App)
  .use(PrimeVue, {
    theme: {
      preset: Aura,
      options: {
        darkModeSelector: '.dark-mode',  // 또는 'class' (Tailwind 스타일)
        cssLayer: false
      },
    },
  })
  .mount('#app')
