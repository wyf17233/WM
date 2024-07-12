import "./mock"
import { createApp } from 'vue'
import App from './App.vue'
import "amfe-flexible" //可伸缩布局
import "./assets/base.css"
import router from "./router/index"
import { createPinia } from 'pinia'
const pinia = createPinia()
createApp(App).use(router).use(pinia).mount('#app')
