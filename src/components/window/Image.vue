<template>
    <article class="image-component">
        <!-- <button @click="this.draggableProps.h += 30">clickme</button> -->
        <img :src="image" @load="setWindowDimensions" />
    </article>
</template>
<script>
const NAVBAR_HEIGHT = 95//px
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
            console.log("🚀 ~ file: Image.vue:35 ~ setWindowDimensions ~ this.draggableProps.h:", this.draggableProps.h)
            console.log("🚀 ~ file: Image.vue:35 ~ setWindowDimensions ~ target.height:", target.height * 0.5)
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