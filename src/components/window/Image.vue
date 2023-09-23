<template>
    <!-- <article class="image-component"> -->
    <img :src="image" @load="setWindowDimensions" class="image-component" />
    <!-- </article> -->
</template>
<script>
// const NAVBAR_HEIGHT = 95//px magic number lmao TODO:and make it not a magic number
export default {
    name: 'Image',
    props: {
        content: String,
    },
    data() {
        return {
            image: '',
            scale: 0.5,
            draggableProps: {
                w: 450,
                h: 500,
                x: 120,
                y: 100,
                lockAspectRatio: true,
                resizable: true,
                zIndex: 5,
            }
        }
    },
    beforeCreate() {
    },
    beforeMount() {
        this.image = this.content
        this.setDraggableProps()
    },
    methods: {
        setWindowDimensions({ target }) {
            this.draggableProps.w = target.width * this.scale
            this.draggableProps.h = target.height * this.scale
            this.setDraggableProps()
        },
        setDraggableProps() {
            this.$emit('setDraggableProps', this.draggableProps)
        }
    },
    watch: {
    }
}
</script>