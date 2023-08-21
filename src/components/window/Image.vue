<template>
    <article class="image-component">
        <img :src="image" style= />
    </article>
</template>
<script>   
export default {
    name: 'Image',
    props: {
        content: String,
    },
    data() {
        return {
            image: '',
        }
    },
    beforeCreate() {
    },
    beforeMount() {
        this.image = this.content;
        this.setH();
    },
    methods: {
        setH(){
            this.$emit('setH', 100)
            console.log('emitting h')
        }
    },
    watch:{
    }
}
</script>