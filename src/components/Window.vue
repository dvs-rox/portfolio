<template>
    <Vue3DraggableResizable :minW="250" :minH="450"   :parent="true"
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
                <component :is="window.props.component" :content="window.props.content" @setH="onSetH"/>
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
        },

    },
    components: {
        List,
        Image
    },
    methods: {
        minimizeWindow() {
            this.$emit('minimizeWindow', this.window._id)
        },
        onSetH(h) {
            this.h = h;
        }
    },
    computed: {
    },
    watch:{
        h(){
            console.log("🚀 ~ file: Window.vue:63 ~ h ~ this.h:", this.h)
        }
    }
}

</script>