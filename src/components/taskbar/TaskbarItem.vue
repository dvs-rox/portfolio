<template>
    <div class="taskbar-item" @click="expand" v-show="window.props.isOpen">
        <img :src="window.shortcut.img" alt="shortcut.title" />
        <span>{{ window.props.title }}</span>
    </div>
</template>
<script>
export default {
    name: 'TaskbarItem',
    props: {
        window: Object
    },
    methods: {
        expand() {
            this.$emit('expand', this.window._id)
        }
    }
}
</script>