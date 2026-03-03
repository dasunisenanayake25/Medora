<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Product, ProductsResponse } from '../types/Product'; // Strict interfaces [cite: 15]

const products = ref<Product[]>([]);

const fetchMeds = async () => {
  const res = await fetch('https://dummyjson.com/products/category/skin-care');
  const data: ProductsResponse = await res.json();
  products.value = data.products;
};

onMounted(fetchMeds);
</script>

<template>
  <div class="p-6">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6"> <div v-for="p in products" :key="p.id" class="border p-4 rounded-xl shadow hover:shadow-lg">
        <img :src="p.thumbnail" class="h-40 w-full object-cover rounded" />
        <h2 class="font-bold mt-2">{{ p.title }}</h2>
        <p class="text-emerald-600 font-bold">${{ p.price }}</p>
      </div>
    </div>
  </div>
</template>