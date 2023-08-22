
export const windowStore = {
    strict: true,
    state() {
        return {
            windows: [],
            activeWindow: null,
        }
    },
    getters:{
        getWindows({windows}) {
            return windows
        }
    },
    mutations: {
        addWindow(state, payload) {
            state.windows.push(payload)
        }
    },
}