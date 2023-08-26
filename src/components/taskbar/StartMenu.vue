<template>
    <div class="start-menu">
        <div class="sidebar">
            <div class="logo">
                <span>Windows</span><span>95</span>
            </div>
        </div>
        <Shortcut v-for="win in windows" v-show="win && win.dir.includes('startMenu')" :window="win" :key="win._id"
            @expandWindow="onExpandWindow" @openWindow="onOpenWindow" class="start-menu-shortcut" />
    </div>
</template>
<script>
import Shortcut from '@/components/desktop/Shortcut.vue'
export default {
    name: 'StartMenu',
    props: {
        isStartMenuOpen: {
            type: Boolean,
            required: true
        },
        windows: {
            type: Object,
            required: true
        }
    },
    created() {
    },
    methods: {
        onExpandWindow(windowId) {
            this.$store.commit('expandWindow', windowId)
        },
        onOpenWindow(windowId) {
            this.$store.commit('openWindow', windowId)
            this.collapseStartMenu()
        },
        collapseStartMenu() {
            this.$emit('toggleStartMenu')
        }
    },
    components: {
        Shortcut
    },
    data() {
        return {
        }
    },
}
</script>