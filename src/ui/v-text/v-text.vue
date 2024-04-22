<template>
  <component :is="as" v-bind="$attrs" class="v-text">
    <slot/>
  </component>
</template>

<script setup lang="ts">
import { CSSProperties } from 'vue';
// @ts-ignore
import { pixelify } from '@/helpers/styles';

const props = withDefaults(defineProps<{
  as?: keyof HTMLElementTagNameMap | string | object;
  fontSize?: CSSProperties['fontSize'];
  lineHeight?: CSSProperties['lineHeight'];
  weight?: CSSProperties['fontWeight'];
  fontStyle?: CSSProperties['fontStyle'];
  align?: CSSProperties['textAlign']
}>(), {
  as: 'span',
});

</script>

<style lang="scss" scoped>
.v-text {
  text-align: v-bind('props.align');

  @include font(
      $font-size: v-bind('pixelify(props.fontSize)'),
      $line-height: v-bind('pixelify(props.lineHeight)'),
      $font-weight: v-bind('props.weight'),
      $font-style: v-bind('props.fontStyle'),
  );
}
</style>
