<script setup lang="ts">
import Button from '@/lib/components/vue/button.vue';

const variants = [
  "default",
  "primary",
  "secondary",
  "outline",
  "quiet",
  "success",
  "warning",
  "danger",
] as const;
</script>


<template>
  <div class="grid grid-cols-4 gap-2">
    <Button v-for="variant in variants" :key="variant" :variant="variant">
      {{ variant }}
    </Button>
  </div>
</template>
