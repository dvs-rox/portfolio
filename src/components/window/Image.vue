<template>
    <article class="image-component">
        <img :src="image" @load="getImageDimensions" />
    </article>
</template>
<script>
const NAVBAR_HEIGHT = 36;//px
export default {
    name: 'Image',
    props: {
        content: String,
    },
    data() {
        return {
            image: '',
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
        this.image = this.content;
    },
    methods: {
        getImageDimensions({ target }) {
            this.draggableProps.w = target.width;
            this.draggableProps.h = target.height + NAVBAR_HEIGHT;
            this.$emit('setDraggableProps', this.draggableProps)
            console.log("🚀 ~ file: Image.vue:31 ~ getImageDimensions ~ draggableProps:", draggableProps)
        }
    },
    watch: {
    }
}
</script>