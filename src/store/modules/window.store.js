
export const windowStore = {
    strict: true,
    state() {
        return {
            windows: [{
                _id: 1,
                props: {
                    title: 'Welcome to my website',
                    content: `<h3>
                            celebrities we like
                        </h3>`,
                    isOpen: false,
                    isActive: false,
                    isMinimized: false,
                    component: 'List'
                },
                shortcut: {
                    img: './img/icons/Book.ico',
                }
            },
            {
                _id: 2,
                props: {
                    title: 'crystalPepsi.jpg',
                    content: `./img/crystalPepsi.jpg`,
                    isOpen: false,
                    isActive: false,
                    isMinimized: false,
                    component: 'Image'
                },
                shortcut: {
                    img: './img/icons/Earth.ico',
                }
            }],
            activeWindow: null,
        }
    },
    getters: {
        windows({ windows }) {
            return windows
        }
    },
    mutations: {
        addWindow(state, payload) {
            state.windows.push(payload)
        },
        minimizeWindow(state, windowId) {
            const window = state.windows.find(w => w._id === windowId)
            window.props.isMinimized = true
        },
        maximizeWindow(state, windowId) {
            const window = state.windows.find(w => w._id === windowId)
            window.props.isMinimized = false
        },
        toggleWindowMinimized(state, windowId) {
            const window = state.windows.find(w => w._id === windowId)
            window.props.isMinimized = !window.props.isMinimized
        },
        openWindow(state, windowId) {
            const window = state.windows.find(w => w._id === windowId)
            window.props.isOpen = true
        },
        closeWindow(state, windowId) {
            const window = state.windows.find(w => w._id === windowId)
            window.props.isOpen = false
        }
    },
}