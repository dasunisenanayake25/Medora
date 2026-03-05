<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-white font-sans text-slate-900">
    <div class="bg-[#0b5c4b] text-white py-2 px-6 hidden md:block">
      <div class="container mx-auto flex justify-between items-center text-xs">
        <div class="flex gap-4">
          <span>Follow us:</span>
        </div>
        <div class="flex gap-6 uppercase tracking-wider font-medium">
          <span>Login</span>
          <span>Register</span>
          <span>Delivery</span>
          <span>Marketplace</span>
        </div>
      </div>
    </div>

    <header class="bg-white border-b border-gray-100 py-4 px-6 sticky top-0 z-50 shadow-sm">
      <div class="container mx-auto flex flex-wrap items-center justify-between gap-4">
        <div class="flex items-center gap-2">
          <div class="text-2xl font-black text-[#0b5c4b] tracking-tighter">
            MedAura <span class="text-[10px] block font-medium -mt-2 text-emerald-600">The Care You Trust</span>
          </div>
        </div>

        <div class="flex-1 max-w-xl relative">
          <input type="text" placeholder="Search entire store here..." 
            class="w-full bg-gray-50 border border-gray-200 rounded-full py-2.5 pl-5 pr-12 focus:ring-2 focus:ring-emerald-500 outline-none transition" />
          <span class="absolute right-4 top-2.5 text-gray-400">🔍</span>
        </div>

        <div class="flex items-center gap-6">
          <button class="text-xl"></button>
          <div class="relative cursor-pointer">
            <span class="text-2xl"></span>
            <span class="absolute -top-2 -right-2 bg-emerald-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">0</span>
          </div>
        </div>
      </div>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>