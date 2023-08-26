<template>
    <article class="notepad-toolbar">
        <ul class="clean-list">
            <li>
                <button @click="onSave"><span>S</span>ave</button>
            </li>
        </ul>
    </article>
</template>
<script>
export default {
    name: 'NotepadToolbar',
    methods: {
        onSave() {
            this.$emit('save')
        }
    }
}
</script>