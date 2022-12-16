import { createApp } from 'vue'
import axios from 'axios'
import { createPinia } from 'pinia'
import router from './router/index'
import './tailwind.css'
import App from './App.vue'

axios.defaults.baseURL = 'http://localhost:5173'

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.provide('$api', axios)
app.mount('#app')