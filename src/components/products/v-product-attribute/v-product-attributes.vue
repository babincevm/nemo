<template>
  <v-flex as="ul" gap="20" margin="0" column class="v-product-attributes">
    <v-flex
        v-for="(attr, index) in product.attributes"
        :key="index"
        as="li"
        padding="10"
        column
        gap="10"
        margin="0"
    >
      <v-input v-model="attr.code" label="code:"/>
      <v-input v-model="attr.name" label="name:"/>

      <v-input v-if="isIColor(attr)" v-model="attr.color" label="color:"/>

      <v-flex v-else-if="isISize(attr)" gap="5">
        <v-text weight="bold">size:</v-text>
        <v-flex align="center" gap="5">
          <v-input
              :model-value="String(attr.size.width)"
              type="number"
              @update:model-value="attr.size.width = Number($event)"
          />
          x
          <v-input
              :model-value="String(attr.size.height)"
              type="number"
              @update:model-value="attr.size.height = Number($event)"
          />
        </v-flex>
      </v-flex>

      <v-input
          v-else-if="isIWeight(attr)"
          :model-value="String(attr.weight)"
          label="weight:"
          type="number"
          @update:model-value="attr.weight = Number($event)"
      />
    </v-flex>
  </v-flex>
</template>

<script setup lang="ts">

import { computed } from 'vue';
import { useProductsStore } from '@/store/products-store/useProductsStore';

import { IProduct, isIColor, isISize, isIWeight } from '@/store/products-store/types';

import VInput from '@ui/v-input/v-input.vue';
import VText from '@ui/v-text/v-text.vue';
import VFlex from '@ui/v-flex/v-flex.vue';

const props = defineProps<{
  productId: IProduct['id'],
}>();

const { products } = useProductsStore();

const product = computed(() => products.value.get(props.productId) as IProduct);
</script>

<style lang="scss" scoped src="./v-product-attributes.scss"></style>
