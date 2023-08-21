<template>
    <nav class="taskbar grid align-center">
        <button class="start">Start</button>
        <div class="items-container">
            <TaskbarItem v-for="window in windows" :key="window._id" :window="window" @expand="onExpandWindow" />
        </div>
        <Clock />
    </nav>
</template>
<script>
import Clock from '@/components/taskbar/Clock.vue'
import TaskbarItem from '@/components/taskbar/TaskbarItem.vue'
export default {
    name: 'Taskbar',
    props: {
        windows: Array
    },
    components: {
        Clock,
        TaskbarItem
    },
    methods: {
        onExpandWindow(windowId) {
            this.$emit('expandWindow', windowId)
        }
    }
}
</script>