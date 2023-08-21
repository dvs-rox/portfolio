<script>
import { RouterLink, RouterView } from 'vue-router'
import HomePage from '@/pages/HomePage.vue';
export default {
  name: 'App',
  components: {
    RouterLink,
    RouterView,
    HomePage,
  }
}
</script>

<template>
  <main class="main-layout">
    <HomePage />
  </main>
</template>
