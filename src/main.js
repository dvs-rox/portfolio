import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {store} from '@/store'
import Vue3DraggableResizable from 'vue3-draggable-resizable'
// import 'vue3-draggable-resizable/dist/Vue3DraggableResizable.css'
import '@/assets/styles/styles.scss'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(Vue3DraggableResizable)
app.mount('#app')
