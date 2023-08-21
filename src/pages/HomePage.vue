<template>
    <section class="home-page">
        <Window :windowProps="windowProps" />
        <Taskbar/>
    </section>
</template>

<script>
import Window from '@/components/Window.vue'
import Taskbar from '@/components/Taskbar.vue';
export default {
    name: 'HomePage',
    components: {
    Window,
    Taskbar
},
    methods: {
        openWindow() {
            console.log('openWindow')
        }
    },
    data(){
        return{
            windowProps:{
                title: 'Welcome to my website',
                content: 'skeet skeet',
                open: true,
                component: 'List'
            }

        }
    }
}
</script>