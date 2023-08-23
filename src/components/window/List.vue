<template>
    <article class="list-component">
        <ul class="clean-list">
            <li v-for="item in content" :key="item.id" :title="item.onHover" class="list-item flex">
                <img :src="item.imgURL" alt="">
                <a :href="item.siteURL" target="_blank">{{ item.title }}</a>
                <a :href="item.gitURL" target="_blank">
                    git
                </a>
            </li>
        </ul>
    </article>
</template>
<script>
export default {
    name: 'List',
    props: {
        content: Array,
    },
    data() {
        return {
            draggableProps: {
                maxW: 550,
                maxH: 750,
                minW: 350,
                minH: 450,
                w: 350,
                h: 450,
                resizable: true,
            }

        }
    },
    created() {
        this.setDraggableProps()

        console.log("🚀 ~ file: List.vue:33 ~ created ~ this.content:", this.content)
    },
    methods: {
        setDraggableProps() {
            this.$emit('setDraggableProps', this.draggableProps)
        }
    }
}
</script>