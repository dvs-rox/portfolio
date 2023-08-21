<template>
    <Vue3DraggableResizable :initW="400" :initH="500" :minW="300" :minH="350" :parent="true"
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
                <component :is="window.props.component" :content="window.props.content" />
            </section>
        </article>
    </Vue3DraggableResizable>
</template>

<script>
import List from '@/components/window/List.vue';
export default {
    name: 'Window',
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
        List
    },
    methods: {
        minimizeWindow() {
            this.$emit('minimizeWindow', this.window._id)
        }
    }
}

</script>