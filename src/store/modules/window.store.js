import { windowService } from "../../assets/services/window.service"

export const windowStore = {
    strict: true,
    state() {
        return {
            windows: []
        }
    },
    getters: {
        windows({ windows }) {
            return windows
        },
        // isLoaded({ windows }) {
        //     return windows.length > 0
        // }
    },
    mutations: {
        setWindows(state, { windows }) {
            state.windows = windows
        },
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
        },
        topLayerWindow(state, windowId) {
            const window = state.windows.find(w => w._id === windowId)
            this.windows.push(this.windows.splice(this.windows.indexOf(window), 1)[0])
        }
    },
    actions: {
        async loadWindows(context) {
            try {
                const windows = [{
                    _id: 1,
                    fileType: 'List',
                    dir: ['desktop', 'startMenu'],
                    props: {
                        title: 'Welcome to my website',
                        content: [
                            { id: 1, name: 'Michael Jackson' },
                            { id: 2, name: 'Madonna' },
                            { id: 3, name: 'Tom Cruise' },
                            { id: 4, name: 'Prince' },
                            { id: 5, name: 'Whitney Houston' },
                            { id: 6, name: 'Arnold Schwarzenegger' },
                            { id: 7, name: 'Molly Ringwald' },
                            { id: 8, name: 'Eddie Murphy' },
                            { id: 9, name: 'Cyndi Lauper' },
                            { id: 10, name: 'Bruce Springsteen' }
                        ],
                        isOpen: true,
                        isActive: false,
                        isMinimized: false,
                    },
                    shortcut: {
                        img: './img/icons/Book.ico',
                    }
                },
                {
                    _id: 2,
                    fileType: 'Image',
                    dir: ['desktop'],
                    props: {
                        title: 'crystalPepsi.jpg',
                        content: `./img/crystalPepsi.jpg`,
                        isOpen: true,
                        isActive: false,
                        isMinimized: false,
                    },
                    shortcut: {
                        img: './img/icons/Earth.ico',
                    }
                },
                {
                    _id: 3,
                    fileType: 'Notepad',
                    dir: ['desktop'],
                    props: {
                        title: 'README.txt',
                        content: `welcome to my site :DDD`,
                        isOpen: true,
                        isActive: false,
                        isMinimized: false,
                    },
                    shortcut: {
                        img: './img/icons/Notepad.ico',
                    }
                }]        
                await context.commit({ type: 'setWindows', windows })
                return windows
            } catch (err) {
                console.log('Cannot load windows', err);
                throw err
            }
        }
    }
}