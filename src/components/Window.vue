<template>
    <Vue3DraggableResizable :initW="400" :initH="500" :minW="300" :minH="350" :parent="true"
        :handles="['tl', 'tm', 'tr', 'mr', 'br', 'bm', 'bl', 'ml']">
        <article class="window">
            <nav class="nav-bar">
                <span class="title">
                    {{ windowProps.title || 'Window' }}
                </span>
                <div class="actions">
                    <button @click="closeWindow" class="close">
                        X
                    </button>
                </div>
            </nav>
            <section class="content">
                <!-- {{ windowProps.content || 'Content' }} -->
                <component :is="windowProps.component" />
            </section>
        </article>
    </Vue3DraggableResizable>
</template>

<script>
import List from '@/components/window cmps/List.vue';
export default {
    name: 'Window',
    props: {
        windowProps: {
            type: Object,
            required: true,
        }
    },
    components: {
        List
    },
    methods: {
        closeWindow() {
            console.log('closeWindow')
        }
    }
}

</script>