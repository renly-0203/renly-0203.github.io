import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import './style.css'

// 获取App实例
const app = createApp(App)

// 获取pinia实例
const pinia = createPinia()

app.use(pinia).use(router)

// 挂载到#app上
app.mount('#app')
