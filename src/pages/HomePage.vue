<template>
    <section class="home-page">
        <Window :windowProps="windowProps" />
    </section>
</template>

<script>
import Window from '@/components/Window.vue'
export default {
    name: 'HomePage',
    components: {
        Window,
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
            }

        }
    }
}
</script>