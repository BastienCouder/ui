<script setup>
import { ref } from 'vue';
import Skeleton from '@/shared/skeleton.vue';
import Button from '~/shared/button.vue';

const status = ref('idle');

const apiCall = () => {
  status.value = 'loading';
  setTimeout(() => {
    status.value = 'success';
  }, 4000);
};
</script>

<template>
  <div class="flex flex-col items-center gap-4">
    <Button :is-loading="status === 'loading'" @click="apiCall">
      Simulate API Call
    </Button>
    <Skeleton :show="status === 'loading'">
      <p>Some text loaded from API.</p>
    </Skeleton>
  </div>
</template>
