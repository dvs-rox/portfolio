<template>
    <section class="home-page parent">
        <Window v-for="win in windows" :window="win" :key="win._id" @closeWindow="onCloseWindow" @minimizeWindow="windows"
            v-show="win && win.props.isOpen && !win.props.isMinimized" @update="onWindowUpdate"/>
        <Shortcut v-for="win in windows" v-show="win" :window="win" :key="win._id" @expandWindow="onExpandWindow"
            @openWindow="onOpenWindow" />
        <Taskbar v-if="windows" :windows="windows" @expandWindow="toggleWindowMinimized" />
    </section>
</template>

<script>
import Window from '@/components/Window.vue'
import Taskbar from '@/components/Taskbar.vue'
import Shortcut from '@/components/desktop/Shortcut.vue'
export default {
    name: 'HomePage',
    components: {
        Window,
        Taskbar,
        Shortcut
    },
    created() {
        this.loadWindows()
    },
    data() {
        return {
            windows: []
        }
    },
    methods: {
        loadWindows() {
            this.windows = this.$store.getters.windows
        },
        onMinimizeWindow(windowId) {
            this.$store.commit('minimizeWindow', windowId)
        },
        onExpandWindow(windowId) {
            this.$store.commit('expandWindow', windowId)
        },
        onOpenWindow(windowId) {
            this.$store.commit('openWindow', windowId)
        },
        onCloseWindow(windowId) {
            this.$store.commit('closeWindow', windowId)
        },
        toggleWindowMinimized(windowId) {
            this.$store.commit('toggleWindowMinimized', windowId)
        },
        onWindowUpdate(window) {
            this.$store.dispatch('updateWindow', window)
        }
    },
    watch: {
    }
}
</script>