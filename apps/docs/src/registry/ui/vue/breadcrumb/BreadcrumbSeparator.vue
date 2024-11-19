<script lang="ts" setup>
import { ChevronRightIcon, ChevronDownIcon } from '@radix-icons/vue';
import { cn } from '@/lib/utils';
import { inject, type Component } from 'vue';

const props = defineProps<{
    class?: string,
}>()

const orientation = inject<'horizontal' | 'vertical'>('orientation', 'horizontal');
const icon = inject<Component | null>('icon', null);
</script>

<template>
    <div role="presentation" aria-hidden="true">
        <component :is="icon" v-if="icon" :class="cn('text-fg', props.class)" />

        <template v-else-if="orientation === 'vertical'">
            <ChevronDownIcon />
        </template>
        <template v-else>
            <ChevronRightIcon />
        </template>
    </div>
</template>
