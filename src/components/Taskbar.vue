<template>
    <nav class="taskbar grid align-center">
        <button class="start">Start</button>
        <div class="clock">
            <span>
                {{ hours }}:{{ minutes }} {{ amPm }}
            </span>
        </div>
    </nav>
</template>
<script>
export default {
    name: 'Taskbar',
    mounted() {
        this.interval = setInterval(this.updateClock, 1000)
    },
    beforeDestroy() {
        clearInterval(this.interval)
    },
    methods: {
        updateClock() {
            const date = new Date()
            this.hours = date.getHours()
            this.minutes = date.getMinutes()
            this.seconds = date.getSeconds()
            this.amPm = this.hours >= 12 ? "pm" : "am"
            this.hours = this.hours % 12 || 12
            this.minutes = this.minutes < 10 ? 0 + this.minutes : this.minutes
            this.hours = this.hours < 10 ? 0 + this.hours : this.hours
        }
    },
    data() {
        return {
            hours: null,
            minutes: null,
            seconds: null,
            amPm: null,
            interval: null,
        }
    }
}
</script>