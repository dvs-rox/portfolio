<template>
    <article class="list-component">
        <ul>
            <li v-for="item in list" :key="item.id">
                {{ item.name }}
            </li>
        </ul>
    </article>
</template>
<script>
    export default{
        name: 'List',
        data(){
            return{
                list: [
                    {id: 1, name: 'John'},
                    {id: 2, name: 'Jane'},
                    {id: 3, name: 'Joe'},
                    {id: 4, name: 'Jack'},
                    {id: 5, name: 'Jill'},
                ]
            }
        }
    }
</script>