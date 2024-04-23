<template>
  <v-flex column class="v-tabs" as="ul">
    <li
        v-for="tab in tabs"
        :key="tab.id"
    >
      <v-text
          :as="VButton"
          :color="tab.id === activeTabProxy ? 'light-blue' : 'transparent'"
          class="v-tabs__button"
          align="left"
          font-size="20"
          weight="bold"
          variant="empty"
          @click="activeTabProxy = tab.id"
      >
        {{ tab.name }}
      </v-text>
    </li>
  </v-flex>
</template>

<script setup lang="ts" generic="TTab extends ITab = ITab">
import { computed } from 'vue';

import { ITab } from '@ui/v-tabs/types';

import VButton from '@ui/v-button/v-button.vue';
import VText from '@ui/v-text/v-text.vue';
import VFlex from '@ui/v-flex/v-flex.vue';

const props = defineProps<{
  tabs: Iterable<TTab>;
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
