<template>
    <article class="notepad-container">
        <!-- <NotepadToolbar/> -->
        <QuillEditor theme="" toolbar="" class="notepad" ref="notepad" v-model:content="textHTML">
        </QuillEditor>
    </article>
</template>
<script>
import  NotepadToolbar  from '@/components/window/NotepadToolbar.vue'
export default {
    name: 'Notepad',
    components: {
        NotepadToolbar
    },
    props: {
        content: String,
    },
    data() {
        return {
            textHTML: '',
            draggableProps: {
                w: 500,
                h: 450,
                minW: 500,
                minH: 450,
                maxH: null,
                maxW: null,
                lockAspectRatio: false,
                resizable: true,
            }
        }
    },
    beforeMount() {
        this.textHTML = this.content
    },
    watch: {
        textHTML: {
            handler: function (val, oldVal) {
            },
            deep: true
        }
    },
}


</script>