<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '~/lib/utils';

const props = defineProps({
    show: {
        type: Boolean,
        default: true
    },
    class: {
        type: String as HTMLAttributes['class'],
        required: false
    }
})
</script>

<template>
    <span :class="cn(
        'relative block h-6 animate-pulse rounded-md bg-neutral',
        props.show ? '' : 'invisible',
        props.class
    )">
        <slot v-if="!props.show" />
    </span>
</template>
