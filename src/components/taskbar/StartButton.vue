<template>
    <StartMenu v-show="this.isStartMenuOpen" :windows="windows" :isStartMenuOpen="isStartMenuOpen" 
    @openWindow="onOpenWindow" @expandWindow="onExpandWindow" @toggleStartMenu="toggleStartMenu"/>
    <button class="start flex justify-center align-center" @click="toggleStartMenu"><img src="/img/icons/Windows.ico" alt="" >Start</button>
</template>
<script>
import StartMenu from './StartMenu.vue'
export  default {
    name: 'StartButton',
    props: {
        windows: Array
    },
    components: {
        StartMenu
    },
    data() {
        return {
            isStartMenuOpen: false
        }
    },
    methods: {
        toggleStartMenu() {
            console.log('togglin srt menu')
            this.isStartMenuOpen = !this.isStartMenuOpen
        },
        onExpandWindow(windowId) {
            this.$emit('expandWindow', windowId)
        },
        onOpenWindow(windowId) {
            this.$emit('openWindow', windowId)
        },
    },
}
</script>