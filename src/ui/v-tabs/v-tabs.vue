<template>
  <v-flex column class="v-tabs">
    <v-text
        :as="VButton"
        v-for="tab in tabs"
        align="left"
        :key="tab.id"
        :color="tab.id === activeTabProxy ? 'light-blue' : 'transparent'"
        @click="activeTabProxy = tab.id"
        font-size="20"
        weight="bold"
        class="v-tabs__button"
        variant="empty"
    >
      {{ tab.name }}
    </v-text>
  </v-flex>
</template>

<script setup lang="ts" generic="TTab extends ITab = ITab">
import { computed } from 'vue';

import { ITab } from '@ui/v-tabs/types';

import VButton from '@ui/v-button/v-button.vue';
import VText from '@ui/v-text/v-text.vue';
import VFlex from '@ui/v-flex/v-flex.vue';

const props = defineProps<{
  tabs: TTab[];
  modelValue?: TTab['id'] | null;
}>();
const emit = defineEmits<{
  (e: 'update:model-value', v: TTab['id'] | null): void;
}>();

const activeTabProxy = computed<TTab['id'] | null>({
  get: () => props.modelValue ?? null,
  set: (v) => {
    emit('update:model-value', v);
  }
});
</script>

<style lang="scss" scoped src="./v-tabs.scss"></style>
