<script>
import { RouterLink, RouterView } from 'vue-router'
import HomePage from '@/pages/HomePage.vue';
export default {
  name: 'App',
  components: {
    RouterLink,
    RouterView,
    HomePage,
  },
  created() {
    this.$store.dispatch('loadWindows')
  },
  computed:{
    isLoaded(){
      return this.$store.getters.isLoaded
    }
  }
}
</script>

<template>
  <main class="main-layout">
    <HomePage/>
  </main>
</template>
