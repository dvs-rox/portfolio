<template>
    <section class="home-page">
        <Window v-for="win in windows" :window="win" :key="win._id" @minimizeWindow="onMinimizeWindow"
            v-show="!win.props.isMinimized" />
        <Shortcut v-for="win in windows" :window="win" :key="win._id" @expandWindow="onExpandWindow" />
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
        console.log(this.windows)
    },
    methods: {
        openWindow(type = "List", title = "New Window", content = "no value") {
            this.windows.push(windowService.getWindow(type, title, content))
        },
        onMinimizeWindow(windowId) {
            const win = this.windows.find(win => win._id === windowId)
            win.props.isMinimized = true
        },
        onExpandWindow(windowId) {
            const win = this.windows.find(win => {
                console.log("🚀 ~ file: HomePage.vue:34 ~ onExpandWindow ~ win:", win)
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
                        isMinimized: false,
                        component: 'List'
                    },
                    shortcut: {
                        img: '../assets/img/icons/Book.ico',
                    }
                },
                {
                    _id: 2,
                    props: {
                        title: 'crystalPepsi.jpg',
                        content: `../assets/img/crystalPepsi.jpg`,
                        isMinimized: false,
                        component: 'Image'
                    },
                    shortcut: {
                        img: '../assets/img/icons/Earth.ico',
                    }
                }
            ],
        }
    },
    watch: {
    }
}
</script>