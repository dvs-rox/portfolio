<template>
    <draggable-resizable-vue class="window" drag-handle=".handle" parent=".parent"
        v-model:x="draggableProps.x" v-model:y="draggableProps.y" 
        v-model:w="draggableProps.w" v-model:h="draggableProps.h" 
        v-model:lock-aspect-ratio="draggableProps.lockAspectRatio"
        v-model:resizable="draggableProps.resizable"
        :z="draggableProps.zIndex"
        handles-type="borders"
        :parent="true">
        <NavBar @minimize="minimizeWindow" @close="closeWindow" 
        :title="window.props.title" class="handle" />
        <component :is="window.fileType" :content="window.props.content"
         @setDraggableProps="onSetDraggableProps" />
    </draggable-resizable-vue>
</template>

<script>
import NavBar from '@/components/window/NavBar.vue';
import List from '@/components/window/List.vue';
import Image from '@/components/window/Image.vue';
import Notepad from '@/components/window/Notepad.vue';

export default {
    name: 'Window',
    data() {
        return {
            draggableProps: {
                w: 450,
                h: 500,
                x: 120,
                y: 100,
                lockAspectRatio: false,
                resizable: true,
                zIndex: 1,
            }
        }
    },
    props: {
        window: {
            _id: String,
            fileType: String,
            dir: Array,
            props: {
                title: String,
                content: String,
                isMinimized: Boolean,
            }
        }
    },
    components: {
        NavBar,
        List,
        Image,
        NavBar,
        Notepad
    },
    methods: {
        closeWindow() {
            this.$emit('closeWindow', this.window._id)
        },
        minimizeWindow() {
            this.$emit('minimizeWindow', this.window._id)
        },
        onSetDraggableProps(props) {
            this.draggableProps = JSON.parse(JSON.stringify(props))
        },
        onUpdate() {
            this.$emit('update', this.window)
        }
    },
    computed: {
    },
    watch: {
        // draggableProps: {
        //     handler: function (newVal) {
        //         this.$emit('setDraggableProps', newVal)
        //     },
        //     deep: true
        // }
    }
}

</script>