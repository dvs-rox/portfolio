<template>
    <article class="list-component">
        <ul>
            <li v-for="item in content" :key="item.id">
                {{ item.name }}
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
    },
    methods:{
        setDraggableProps(){
            this.$emit('setDraggableProps', this.draggableProps)
        }
    }
}
</script>