<template>
    <button class="flex flex-column align-center" @click="onActive" @dblclick="expandWindow" @blur="onLoseFocus"
        :class="classNames">
        <img :src="window.shortcut.img" alt="">
        <span>{{ window.props.title }}</span>
    </button>
</template>
<script>
export default {
    props: {
        window:{
            type: Object,
            required: true
        },
    },
    mounted() {
        console.log(this.window);
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
        }
    }
}
</script>