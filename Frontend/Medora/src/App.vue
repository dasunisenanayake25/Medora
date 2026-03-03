<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="min-h-screen bg-slate-50 font-sans text-slate-900">
    <NavBar />
    
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style>
/* Tailwind directives main.css eke thiyena nisa methana CSS oni na */
</style>