<script setup lang="ts">
import { defineProps } from 'vue';
import { cn } from '~/lib/utils';

const props = defineProps({
  show: {
    type: Boolean,
    default: true,
  },
  class: {
    type: String,
    required: false,
  }
});
</script>

<template>
  <div v-if="!props.show">
    <slot />
  </div>

  <div
    v-else
    :class="cn(
      'relative block animate-pulse rounded-md bg-neutral',
      props.class
    )"
  >
    <div class="invisible">
      <slot />
    </div>
  </div>
</template>