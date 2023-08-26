<template>
    <article class="notepad-container">
    <NotepadToolbar @save="onSave"/>
        <QuillEditor theme="" toolbar="" class="notepad" ref="notepad" v-model:content="textHTML" contentType="html">
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
                w: 300,
                h: 450,
                x:90,
                y:60,
                lockAspectRatio: false,
                resizable: true,
            }
        }
    },
    methods: {
        onSave() {
            this.$emit('save', this.textHTML)
            console.log("🚀 ~ file: Notepad.vue:36 ~ onSave ~ this.textHTML:", this.textHTML)
        }
    },
    created() {
        this.textHTML = this.content
        this.$emit('setDraggableProps', this.draggableProps)
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