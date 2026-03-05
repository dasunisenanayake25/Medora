<script setup lang="ts">
import { ref, onMounted } from 'vue';

const categories = [
  { name: 'All Products', active: true },
  { name: 'Medical Devices', active: false },
  { name: 'Wellness', active: false },
  { name: 'Personal Care', active: false },
  { name: 'Pet Care', active: false }
];
</script>

<template>
  <div>
    <div class="bg-white py-4 border-b border-gray-50">
      <div class="container mx-auto px-6 flex gap-3 overflow-x-auto no-scrollbar">
        <button v-for="cat in categories" :key="cat.name"
          :class="[
            'px-5 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all border',
            cat.active ? 'bg-[#0b5c4b] text-white border-[#0b5c4b]' : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-emerald-300'
          ]">
          {{ cat.name }}
        </button>
      </div>
    </div>

    <div class="container mx-auto px-6 py-8">
      <div class="bg-[#0b5c4b] rounded-[32px] overflow-hidden flex flex-col md:flex-row items-center min-h-[450px]">
        <div class="p-12 md:w-1/2 text-white">
          <h1 class="text-5xl font-extrabold leading-tight mb-6">
            MedAura - The Care You Trust
          </h1>
          <p class="text-lg opacity-90 mb-8 leading-relaxed">
            Get your medicines delivered to your doorstep. Safe, secure, and fast.
          </p>
          
          <div class="space-y-4 mb-10">
            <div class="flex items-center gap-3"><span class="bg-emerald-500/30 p-1 rounded-full text-xs">✔</span> 100% Genuine Medicines</div>
            <div class="flex items-center gap-3"><span class="bg-emerald-500/30 p-1 rounded-full text-xs">✔</span> Free Delivery Over $50</div>
            <div class="flex items-center gap-3"><span class="bg-emerald-500/30 p-1 rounded-full text-xs">✔</span> 24/7 Customer Support</div>
          </div>

          <button class="bg-white text-[#0b5c4b] font-bold px-8 py-3 rounded-xl hover:bg-gray-100 transition shadow-lg flex items-center gap-2">
            Shop Now <span>→</span>
          </button>
        </div>

        <div class="md:w-1/2 h-full flex justify-end">
          <img src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2030&auto=format&fit=crop" 
            alt="Doctors" class="w-full h-[450px] object-cover object-center opacity-80" />
        </div>
      </div>
    </div>

    <div class="container mx-auto px-6 py-8">
      <div class="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
        <h2 class="text-3xl font-bold text-gray-800">Our Products</h2>
        <div class="flex gap-4">
           <input type="text" placeholder="Search medicines..." class="border rounded-lg px-4 py-2 text-sm" />
           <select class="border rounded-lg px-4 py-2 text-sm bg-white"><option>All Categories</option></select>
        </div>
      </div>
      
      <p class="text-center text-gray-400 italic">Product grid loading...</p>
    </div>
  </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>