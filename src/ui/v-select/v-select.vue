<template>
  <v-text as="label" :for="id" v-if="label">
    {{ label }}
  </v-text>
  <select :id="id" v-model="modelValueProxy">
    <v-text
        v-for="option in options"
        :key="option.id"
        as="option"
        :value="option.id"
    >
      {{ option.title }}
    </v-text>
  </select>
</template>

<script setup lang="ts" generic="TOption extends IOption = IOption">
import { computed, getCurrentInstance } from 'vue';
import { useVModel } from '@vueuse/core';

import { IOption } from '@ui/v-select/types';

import VText from '@ui/v-text/v-text.vue';

const id = computed(() => `input-${getCurrentInstance()?.uid}`);
const props = defineProps<{
  modelValue: TOption['id'],
  options: TOption[],
  label?: string;
}>();
const emit = defineEmits<{
  (e: 'update:modelValue', v: TOption['id']): void
}>();

const modelValueProxy = useVModel(props, 'modelValue', emit);
</script>

