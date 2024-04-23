<template>
  <v-flex v-if="product" column padding="20" gap="20">
    <v-text as="h3" class="v-product__title" weight="bold">
      {{ product.name }}
    </v-text>

    <v-product-attributes :product-id="productId"/>

    <v-flex gap="5" align="center">
      <v-text>type</v-text>

      <v-flex gap="10" align="center">
        <v-select :options="ATTRIBUTE_OPTIONS" v-model="selectedAttributeType"/>

        <v-text :as="VButton" @click="addAttribute">
          Add
        </v-text>
      </v-flex>
    </v-flex>
  </v-flex>
</template>

<script setup lang="ts">
import { computed, defineProps, ref } from 'vue';
import { useProductsStore } from '@/store/products-store/useProductsStore';

import { IProduct } from '@/store/products-store/types';
import { EAttributeTypes } from '@components/products/v-product/types';

import VSelect from '@ui/v-select/v-select.vue';
import VButton from '@ui/v-button/v-button.vue';
import VText from '@ui/v-text/v-text.vue';
import VFlex from '@ui/v-flex/v-flex.vue';

import VProductAttributes from '@components/products/v-product-attribute/v-product-attributes.vue';
import {
  ATTRIBUTE_OPTIONS,
  DEFAULT_COLOR_ATTRIBUTE,
  DEFAULT_SIZE_ATTRIBUTE,
  DEFAULT_WEIGHT_ATTRIBUTE
} from '@components/products/v-product/consts';

const { products } = useProductsStore();

const props = defineProps<{
  productId: IProduct['id']
}>();

const product = computed<IProduct | undefined>(() => products.value.get(props.productId));

const selectedAttributeType = ref<EAttributeTypes>(EAttributeTypes.TYPE_COLOR);

const addAttribute = () => {
  const defaultAttributeValue = ({
    [EAttributeTypes.TYPE_COLOR]: DEFAULT_COLOR_ATTRIBUTE,
    [EAttributeTypes.TYPE_WEIGHT]: DEFAULT_WEIGHT_ATTRIBUTE,
    [EAttributeTypes.TYPE_SIZE]: DEFAULT_SIZE_ATTRIBUTE,
  } as const)[selectedAttributeType.value];

  product.value?.attributes.push(defaultAttributeValue);
};
</script>

<style lang="scss" scoped src="./v-product.scss"></style>
