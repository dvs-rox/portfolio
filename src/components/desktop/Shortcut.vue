<template>
    <button class="flex flex-column align-center" @click="onActive" @dblclick="openWindow" @blur="onLoseFocus"
        :class="classNames">
        <img :src="window.shortcut.img" alt="">
        <span>{{ window.props.title }}</span>
    </button>
</template>
<script>
export default {
    props: {
        window: Object
    },
    mounted() {
    },
    data() {
        return {
            classNames: {
                'shortcut': true,
                'active': false
            }
        }
    },
    methods: {
        onActive() {
            this.classNames.active = true;
        },
        onLoseFocus() {
            this.classNames.active = false;
        },
        expandWindow() {
            this.$emit('expandWindow', this.window._id);
        },
        openWindow() {
            this.$emit('openWindow', this.window._id)
        }
    }
}
</script>