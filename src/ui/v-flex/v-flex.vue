<template>
  <component :is="as" class="v-flex">
    <slot/>
  </component>
</template>

<script setup lang="ts">
// @ts-ignore
import { pixelify } from '@/helpers/styles';
import { CSSProperties } from 'vue';

const props = withDefaults(defineProps<{
  as?: keyof HTMLElementTagNameMap | string | object;
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  column?: boolean;
  gap?: string | number;
  padding?: string | number;
  margin?: string | number;
  wrap?: boolean;
}>(), {
  as: 'div'
});
</script>

<style lang="scss" scoped>
.v-flex {
  display: flex;
  align-items: v-bind('props.align');
  justify-content: v-bind('props.justify');
  flex-direction: v-bind('props.column ? "column" : "row"');
  gap: v-bind('pixelify(props.gap)');
  flex-wrap: v-bind('props.wrap ? "wrap" : "nowrap"');
  padding: v-bind('pixelify(props.padding)');
  margin: v-bind('pixelify(props.margin)');
}
</style>
