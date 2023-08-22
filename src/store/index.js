import { createStore } from 'vuex'

import { windowStore } from './modules/window.store.js'
export const store = createStore({
    strict: true,
    modules: {
        windowStore,
    }
})