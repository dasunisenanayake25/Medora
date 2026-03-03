<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import type { Product, ProductsResponse } from '../types/Product';

const products = ref<Product[]>([]);
const search = ref('');
const loading = ref(true);

const fetchMeds = async () => {
  try {
    const res = await fetch('https://dummyjson.com/products/category/skin-care');
    const data: ProductsResponse = await res.json();
    products.value = data.products;
  } finally {
    loading.value = false;
  }
};

const filteredMeds = computed(() => {
  return products.value.filter(p => 
    p.title.toLowerCase().includes(search.value.toLowerCase())
  );
});

onMounted(fetchMeds);
</script>

<template>
  <div class="bg-gray-50 min-h-screen">
    <div class="bg-white border-b border-gray-200 py-8">
      <div class="container mx-auto px-6">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Our Medicines</h2>
        <div class="relative max-w-lg">
          <input 
            v-model="search"
            type="text" 
            placeholder="Search entire store here..." 
            class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
          />
          <span class="absolute left-3 top-3.5 text-gray-400">🔍</span>
        </div>
      </div>
    </div>

    <div class="container mx-auto p-6">
      <div v-if="loading" class="text-center py-20 text-emerald-600 font-bold">
        Loading Medicines...
      </div>

      <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div v-for="item in filteredMeds" :key="item.id" 
             class="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
          
          <div class="relative overflow-hidden">
            <img :src="item.thumbnail" :alt="item.title" class="w-full h-56 object-contain p-4 group-hover:scale-105 transition-transform duration-300" />
          </div>
          
          <div class="p-5 border-t border-gray-100">
            <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wider">{{ item.category }}</h3>
            <h2 class="text-lg font-bold text-gray-800 mt-1 h-14 line-clamp-2">{{ item.title }}</h2>
            
            <div class="mt-4 flex items-center justify-between">
              <span class="text-2xl font-black text-emerald-600">${{ item.price }}</span>
              <button class="bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-lg transition active:scale-90">
                🛒
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>