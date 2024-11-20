<script lang="ts" setup>
import type { HTMLAttributes } from 'vue';
import { cn } from '@/lib/utils';
import { NuxtLink } from '#components';
import { inject } from 'vue';
import type { BreadcrumbStylesType } from './Breadcrumbs.vue';

const props = defineProps<{
    class?: HTMLAttributes['class'],
    href?: string,
    disabled?: boolean,
    variant?: 'neutral' | 'active',
    size?: 'sm' | 'md' | 'lg',
    isLast?: boolean,
}>();

const breadcrumbStyles = inject<BreadcrumbStylesType>('breadcrumbStyles') as unknown as (args: { variant?: string, size?: string }) => string;
const injectedSize = inject<string>('size', 'sm');

const breadcrumbClass = computed(() => breadcrumbStyles({
    variant: props.isLast ? 'active' : props.variant,
    size: props.size || injectedSize,
}));

</script>

<template>
    <li :class="cn('inline-flex items-center gap-1.5 group',
        breadcrumbClass,
        props.class,
        { 'opacity-50 cursor-not-allowed': props.disabled })" :aria-disabled="props.disabled ? 'true' : undefined">

        <template v-if="props.href && !props.disabled && !props.isLast">
            <NuxtLink :to="props.href" class="group-hover:text-primary-hover">
                <slot />
            </NuxtLink>
        </template>

        <template v-else-if="props.disabled">
            <span>
                <slot />
            </span>
        </template>

        <template v-else>
            <span class="font-bold">
                <slot />
            </span>
        </template>
    </li>
</template>
