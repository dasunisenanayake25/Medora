<script setup lang="ts">
import type { Product } from '../types/Product';
defineProps<{ product: Product }>();
</script>

<template>
  <div class="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition">
    <img :src="product.thumbnail" class="w-full h-40 object-cover rounded" />
    <h3 class="font-bold mt-2 text-emerald-700">{{ product.title }}</h3>
    <p class="text-sm text-gray-500">${{ product.price }}</p>
    <router-link :to="'/product/' + product.id" class="text-blue-500 text-sm mt-2 block">View Details</router-link>
  </div>
</template>