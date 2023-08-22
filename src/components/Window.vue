<template>
    <Vue3DraggableResizable 
    v-model:w="draggableProps.w" 
    v-model:h="draggableProps.h" 
    v-model:minW="draggableProps.minW"
    v-model:minH="draggableProps.minH"
    v-model:maxW="draggableProps.maxW"
    v-model:maxH="draggableProps.maxH"
    v-model:resizable="draggableProps.resizable"
    :parent="true"
    v-model:lock-aspect-ratio="draggableProps.lockAspectRatio"
        :handles="['tl', 'tm', 'tr', 'mr', 'br', 'bm', 'bl', 'ml']">
        <article class="window">
            <nav class="nav-bar">
                <span class="title">
                    {{ window.props.title || 'Window' }}
                </span>
                <div class="actions">
                    <button @click="minimizeWindow" class="close">
                        X
                    </button>
                </div>
            </nav>
            <section class="content">
                <component :is="window.props.component" :content="window.props.content"
                    @setDraggableProps="onSetDraggableProps" />
            </section>
        </article>
    </Vue3DraggableResizable>
</template>

<script>
import List from '@/components/window/List.vue';
import Image from '@/components/window/Image.vue';

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
                lockAspectRatio:false,
                resizable: true,
            }
        }
    },
    props: {
        window: {
            _id: String,
            props: {
                title: String,
                content: String,
                isMinimized: Boolean,
                component: String
            }
        }
    },
    components: {
        List,
        Image
    },
    methods: {
        minimizeWindow() {
            this.$emit('minimizeWindow', this.window._id)
        },
        onSetDraggableProps(props) {
            this.draggableProps = props
        }
    },
    computed: {
    },
    watch: {
    }
}

</script>