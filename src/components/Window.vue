<template>
    <Vue3DraggableResizable
    :initW="600"
    :initH="800"
    >

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
                {{ windowProps.content || 'Content' }}
            </section>
        </article>
    </Vue3DraggableResizable>
</template>

<script>
export default {
    name: 'Window',
    props: {
        windowProps: {
            type: Object,
            required: true,
        }
    },
    methods: {
        closeWindow() {
            console.log('closeWindow')
        }
    }
}

</script>