import '@/assets/styles/styles.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue3DraggableResizable from 'vue3-draggable-resizable'
import 'vue3-draggable-resizable/dist/Vue3DraggableResizable.css'

const app = createApp(App)

app.use(router)
app.use(Vue3DraggableResizable)
app.mount('#app')
