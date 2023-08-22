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
export default {
    name: 'HomePage',
    components: {
        Window,
        Taskbar,
        Shortcut
    },
    beforeMount() {
        this.loadWindows()
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
        }
    },
    data() {
        return {
            windows: [],
        }
    },
    watch: {
    }
}
</script>