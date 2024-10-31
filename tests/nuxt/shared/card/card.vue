<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class'];
  variant?: 'default' | 'outline' | 'success' | 'warning' | 'danger';
  shape?: 'rectangle' | 'square' | 'circle';
}>();

</script>

<template>
  <div
    :class="cn(
      'rounded-lg border shadow-sm p-2 md:px-4 md:py-2',
      {
        'bg-neutral/70 hover:bg-neutral-hover active:bg-neutral-active text-neutral-fg': props.variant === 'default' || !props.variant,
        'border border-border bg-transparent hover:bg-neutral/10 active:bg-neutral/20 text-fg': props.variant === 'outline',
        'bg-success hover:bg-success-hover active:bg-success-active text-success-fg': props.variant === 'success',
        'bg-warning hover:bg-warning-active active:bg-warning-active text-warning-fg': props.variant === 'warning',
        'bg-danger hover:bg-danger-active active:bg-danger-active text-danger-fg': props.variant === 'danger',
        'rounded-sm': props.shape === 'square',
        'rounded-full': props.shape === 'circle',
      },
      props.class
    )"
  >
    <slot />
  </div>
</template>
