import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import naive from 'naive-ui'
import "amfe-flexible/index.js";
// 等宽字体

const app = createApp(App)


app.use(naive)

app.use(createPinia())
app.use(router)

app.mount('#app')
