import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import ToastService from 'primevue/toastservice'
import './assets/main.css'

createApp(App)
  .use(PrimeVue, {
    theme: {
      preset: Aura,
      options: {
        darkModeSelector: '.dark-mode', // 또는 'class' (Tailwind 스타일)
        cssLayer: false,
      }
    },
  })
  .use(router)
  .use(ToastService)
  .mount('#app')
