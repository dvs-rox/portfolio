<template>
    <div class="start-menu">
        <div class="sidebar">
            <div class="logo">
                <span>Windows</span><span>95</span>
            </div>
        </div>
        <Shortcut v-for="win in windows" :window="win" :key="win._id" @expandWindow="onExpandWindow"
            @openWindow="onOpenWindow" class="start-menu-shortcut" />
    </div>
</template>
<script>
import Shortcut from '../desktop/Shortcut.vue';
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