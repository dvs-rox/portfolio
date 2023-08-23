<template>
    <Vue3DraggableResizable v-model:w="draggableProps.w" v-model:h="draggableProps.h" v-model:minW="draggableProps.minW"
        v-model:minH="draggableProps.minH" v-model:maxW="draggableProps.maxW" v-model:maxH="draggableProps.maxH"
        v-model:resizable="draggableProps.resizable" v-model:lock-aspect-ratio="draggableProps.lockAspectRatio"
        :parent="true" :handles="['tl', 'tm', 'tr', 'mr', 'br', 'bm', 'bl', 'ml']">
        <article class="window">
            <NavBar @minimize="minimizeWindow" @close="closeWindow" :title="window.props.title" />
            <section class="content">
                <component :is="window.fileType" :content="window.props.content" @setDraggableProps="onSetDraggableProps" />
            </section>
        </article>
    </Vue3DraggableResizable>
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
                w: 250,
                h: 450,
                minW: 250,
                minH: 450,
                maxH: null,
                maxW: null,
                lockAspectRatio: false,
                resizable: true,
                zIndex: 9,
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
            this.draggableProps = { ...props }
        }
    },
    computed: {
    },
    watch: {
        draggableProps: {
            handler: function (newVal) {
                this.$emit('setDraggableProps', newVal)
            },
            deep: true
        }
    }
}

</script>