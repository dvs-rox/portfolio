<template>
    <article class="image-component">
        <img :src="image" @load="setWindowDimensions" />
    </article>
</template>
<script>
const NAVBAR_HEIGHT = 95//px magic number lmao TODO:and make it not a magic number
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
                w: 350,
                h: 350,
                lockAspectRatio: true,
                resizable: false,
            }
        }
    },
    beforeCreate() {
    },
    beforeMount() {
        this.image = this.content
    },
    methods: {
        setWindowDimensions({ target }) {
            this.draggableProps.w = (target.width) * this.scale
            this.draggableProps.h = ((target.height) * this.scale) + NAVBAR_HEIGHT
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