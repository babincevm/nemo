<template>
  <main-layout>
    <v-tabs :tabs="productsArray" v-model="selectedProduct"/>
    <v-product v-if="selectedProduct !== null" :product-id="selectedProduct"/>
  </main-layout>
</template>

<script setup lang="ts">

import { computed, ref } from 'vue';
import { useProductsStore } from '@/store/products-store/useProductsStore';

import { IProduct } from '@/store/products-store/types';

import MainLayout from '@layouts/main-layout/main-layout.vue';

import VTabs from '@ui/v-tabs/v-tabs.vue';

import VProduct from '@components/products/v-product/v-product.vue';


const { products } = useProductsStore();
const selectedProduct = ref<IProduct['id'] | null>(null);

const productsArray = computed(() => [...products.value.values()]);
</script>
