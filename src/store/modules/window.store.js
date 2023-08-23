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
                        title: 'Projects',
                        content: [
                            {
                                id: 1,
                                imgURL: './img/projectList/Approdite.png',
                                title: 'Approdite',
                                onHover: 'A vue project that simulates Gmail, Google Keeps, and Google books',
                                siteURL: 'https://dorezahavy.github.io/approdite',
                                gitURL: 'https://github.com/DoreZahavy/approdite',
                            },
                            {
                                id: 2,
                                imgURL: './img/projectList/doomguy.png',
                                title: 'Doomsweeper',
                                onHover: 'Vanilla minesweeper game with a doom theme',
                                siteURL: 'https://dvs-rox.github.io/minesweeper/',
                                gitURL: 'https://github.com/dvs-rox/minesweeper',
                            },
                            {
                                id: 3,
                                imgURL: './img/projectList/monday.png',
                                title: 'Mayday',
                                onHover: 'Monday.com clone done in Vue.js',
                                siteURL: 'https://mayday-production.up.railway.app/',
                                gitURL: 'https://github.com/DoreZahavy/mayday-frontend',
                            }
                        ],
                        isOpen: false,
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
                        isOpen: false,
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
                        isOpen: false,
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