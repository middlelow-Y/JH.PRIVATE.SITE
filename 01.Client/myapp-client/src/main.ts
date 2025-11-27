import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import ToastService from 'primevue/toastservice'
import Ripple from 'primevue/ripple'
import StyleClass from 'primevue/styleclass'
import './assets/main.css'

createApp(App)
  .use(PrimeVue, {
    theme: {
      preset: Aura,
      options: {
        darkModeSelector: '.dark-mode', // 또는 'class' (Tailwind 스타일)
        cssLayer: false,
      },
    },
  })
  .use(router)
  .use(ToastService)
  .directive('ripple', Ripple)
  .directive('styleclass', StyleClass) 
  .mount('#app')
