<template>
    <nav class="nav-bar">
        <span class="title">
            {{ title || 'Window' }}
        </span>
        <div class="actions">
            <button @click="minimizeWindow" class="minimize">
                _
            </button>
            <button @click="closeWindow" class="close">
                X
            </button>
        </div>
    </nav>
</template>
<script>
export default {
    name: 'NavBar',
    props: {
        title: String
    },
    methods: {
        minimizeWindow() {
            this.$emit('minimize')
        },
        closeWindow() {
            this.$emit('close')
        }
    }
}
</script>