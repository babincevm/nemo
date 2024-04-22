<template>
  <button
      :class="['v-button', `v-button--${color}`, `v-button--${variant}`]"
      @click="$emit('click')"
  >
    <slot/>
  </button>
</template>

<script setup lang="ts">
import { TColor, TVariants } from '@ui/v-button/types';

withDefaults(defineProps<{
  color?: TColor;
  variant?: TVariants;
}>(), {
  color: 'transparent',
  variant: 'default',
});

defineEmits<{
  (e: 'click'): void
}>();
</script>

<style lang="scss" scoped src="./v-button.scss"></style>
