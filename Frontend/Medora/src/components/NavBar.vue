<template>
  <nav class="bg-emerald-700 text-white shadow-md">
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
      <div class="flex items-center space-x-2">
        <span class="text-2xl font-bold tracking-tighter italic">MedAura</span>
      </div>
      <div class="flex space-x-6 font-medium">
        <router-link to="/" class="hover:text-emerald-200 transition">Home</router-link>
        <span class="cursor-pointer hover:text-emerald-200 transition">🛒 Cart (0)</span>
      </div>
    </div>
  </nav>
</template>