import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()
 // Criando a instância do Pinia
 app.use(router)
 app.use(pinia)
app.mount('#app')
