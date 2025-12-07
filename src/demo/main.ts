// src/demo/main.ts
import { createApp } from 'vue'
import App from './App.vue'
import MyComponentLib from '../index'
import '../styles/index.scss'

const app = createApp(App)
app.use(MyComponentLib) // 全局注册组件
app.mount('#app')
