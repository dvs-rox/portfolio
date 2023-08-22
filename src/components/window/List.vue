<template>
    <article class="list-component">
        <div v-html="content">
        </div>
        <ul>
            <li v-for="item in list" :key="item.id">
                {{ item.name }}
            </li>
        </ul>
    </article>
</template>
<script>
export default {
    name: 'List',
    props: {
        content: String,
    },
    data() {
        return {
            list: [
                { id: 1, name: 'Michael Jackson' },
                { id: 2, name: 'Madonna' },
                { id: 3, name: 'Tom Cruise' },
                { id: 4, name: 'Prince' },
                { id: 5, name: 'Whitney Houston' },
                { id: 6, name: 'Arnold Schwarzenegger' },
                { id: 7, name: 'Molly Ringwald' },
                { id: 8, name: 'Eddie Murphy' },
                { id: 9, name: 'Cyndi Lauper' },
                { id: 10, name: 'Bruce Springsteen' }
            ],
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