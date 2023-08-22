<template>
    <section class="home-page">
        <Window v-for="win in windows" :window="win" :key="win._id" @closeWindow="onCloseWindow"
            @minimizeWindow="onMinimizeWindow" v-show="win.props.isOpen && !win.props.isMinimized" />
        <Shortcut v-for="win in windows" :window="win" :key="win._id" @expandWindow="onExpandWindow"
            @openWindow="onOpenWindow" />
        <Taskbar :windows="windows" @expandWindow="toggleWindowMinimized" />
    </section>
</template>

<script>
import Window from '@/components/Window.vue'
import Taskbar from '@/components/Taskbar.vue';
import Shortcut from '@/components/desktop/Shortcut.vue'
import { windowService } from '@/assets/services/window.service';
export default {
    name: 'HomePage',
    components: {
        Window,
        Taskbar,
        Shortcut
    },
    mounted() {
    },
    methods: {
        openWindow(type = "List", title = "New Window", content = "no value") {
            this.windows.push(windowService.getWindow(type, title, content))
        },
        onMinimizeWindow(windowId) {
            const win = this.windows.find(win => win._id === windowId)
            win.props.isMinimized = true
        },
        onOpenWindow(windowId) {
            console.log("🚀 ~ file: HomePage.vue:33 ~ onOpenWindow ~ windowId:", windowId)
            const win = this.windows.find(win => win._id === windowId)
            win.props.isOpen = true
        },
        onCloseWindow(windowId) {
            const win = this.windows.find(win => win._id === windowId)
            win.props.isOpen = false
        },
        onExpandWindow(windowId) {
            const win = this.windows.find(win => {
                return win._id === windowId
            })
            win.props.isMinimized = false
        },
        toggleWindowMinimized(windowId) {
            const win = this.windows.find(win => win._id === windowId)
            win.props.isMinimized = !win.props.isMinimized
        }
    },
    data() {
        return {
            windows: [
                {
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
                        img: '/img/icons/Book.ico',
                    }
                },
                {
                    _id: 2,
                    props: {
                        title: 'crystalPepsi.jpg',
                        content: `/img/crystalPepsi.jpg`,
                        isOpen: false,
                        isActive: false,
                        isMinimized: false,
                        component: 'Image'
                    },
                    shortcut: {
                        img: '/img/icons/Earth.ico',
                    }
                }
            ],
        }
    },
    watch: {
    }
}
</script>