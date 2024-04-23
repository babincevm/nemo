<template>
  <v-flex gap="5">
    <v-text v-if="label" :for="id" as="label" weight="bold">{{ label }}</v-text>
    <input :id="id" v-model="modelValueProxy" :type="type"/>
  </v-flex>
</template>

<script setup lang="ts">
import { computed, getCurrentInstance } from 'vue';
import { useVModel } from '@vueuse/core';

import { TType } from '@ui/v-input/types';

import VText from '@ui/v-text/v-text.vue';
import VFlex from '@ui/v-flex/v-flex.vue';

const id = computed(() => `input-${getCurrentInstance()?.uid}`);
const props = defineProps<{
  modelValue: string;
  label?: string;
  type?: TType
}>();
const emit = defineEmits<{
  (e: 'update:modelValue', v: string): void
}>();

const modelValueProxy = useVModel(props, 'modelValue', emit);
</script>

