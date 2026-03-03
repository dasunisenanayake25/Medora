import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import type { Product } from '../types/Product';

export const useCartStore = defineStore('cart', () => {
  // LocalStorage walin data ganna [cite: 27]
  const cartItems = ref<Product[]>(JSON.parse(localStorage.getItem('medaura_cart') || '[]'));

  const addToCart = (product: Product) => {
    cartItems.value.push(product);
  };

  // Data save karanna [cite: 27]
  watch(cartItems, (newVal) => {
    localStorage.setItem('medaura_cart', JSON.stringify(newVal));
  }, { deep: true });

  return { cartItems, addToCart };
});