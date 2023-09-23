import { windowService } from "../../assets/services/window.service"

export const windowStore = {
    strict: true,
    state() {
        return {
            windows: [],
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
        toTop(state, windowId) {
            console.log("🚀 ~ file: window.store.js:41 ~ toTop ~ state.windows:", state.windows)
            const windowIdx = state.windows.findIndex(w => w._id === windowId)
            const window = state.windows.splice(windowIdx, 1)
            state.windows.push(window)
        },
        openWindow(state, windowId) {
            console.log("🚀 ~ file: window.store.js:46 ~ openWindow ~ windowId:", windowId)
            const window = state.windows.find(w => w._id === windowId)
            window.props.isOpen = true
            // this.commit({ type: 'toTop', windowId })
        },
        closeWindow(state, windowId) {
            const window = state.windows.find(w => w._id === windowId)
            window.props.isOpen = false
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
                        zIndex: 4,
                    },
                    shortcut: {
                        img: './img/icons/Book.ico',
                    }
                },
                {
                    _id: 2,
                    fileType: 'Image',
                    dir: ['startMenu'],
                    props: {
                        title: 'crystalPepsi.jpg',
                        content: `./img/crystalPepsi.jpg`,
                        isOpen: false,
                        isActive: false,
                        isMinimized: false,
                        zIndex: 3,
                    },
                    shortcut: {
                        img: './img/icons/Painting.ico',
                    }
                },
                {
                    _id: 3,
                    fileType: 'Notepad',
                    dir: ['desktop'],
                    props: {
                        title: 'README.txt',
                        content: `<p><b>Welcome to my site!</b></p><br><p> I'm Yona and I'm a fullstack developer. I'm currently looking for a job in the field. I'm a fast learner and I'm always looking to learn new things. I'm a team player and I love working with people and can handle tasks on my own as well. Please look around!, this will hopefully have more features over time but essential info is accessible from the desktop.</p>`,
                        isOpen: false,
                        isActive: false,
                        isMinimized: false,
                        zIndex: 2,
                    },
                    shortcut: {
                        img: './img/icons/Notepad.ico',
                    }
                },
                {
                    _id: 4,
                    fileType: 'Image',
                    dir: ['desktop'],
                    props: {
                        title: 'yona.png',
                        content: `./img/mosaic.png`,
                        isOpen: false,
                        isActive: false,
                        isMinimized: false,
                        zIndex: 1,
                    },
                    shortcut: {
                        img: './img/icons/Painting.ico',
                    }
                },]
                await context.commit({ type: 'setWindows', windows })
                return windows
            } catch (err) {
                console.log('Cannot load windows', err);
                throw err
            }
        }
    }
}