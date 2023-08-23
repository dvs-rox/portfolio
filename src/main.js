import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {store} from '@/store'
import Vue3DraggableResizable from 'vue3-draggable-resizable'
import { QuillEditor } from '@vueup/vue-quill'
// import 'vue3-draggable-resizable/dist/Vue3DraggableResizable.css'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import '@/assets/styles/styles.scss'

const app = createApp(App)
app.component('QuillEditor', QuillEditor)
app.use(router)
app.use(store)
app.use(Vue3DraggableResizable)
app.mount('#app')
