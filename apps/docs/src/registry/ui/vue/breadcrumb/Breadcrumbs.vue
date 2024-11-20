<script lang="ts" setup>
import { ChevronRightIcon, ChevronDownIcon } from '@radix-icons/vue';
import { tv } from 'tailwind-variants';
import { cn } from '@/lib/utils';
import { provide } from 'vue';
import type { HTMLAttributes, Component } from 'vue';

const breadcrumbStyles = tv({
    variants: {
        variant: {
            neutral: 'text-fg hover:text-primary-hover',
            active: 'text-primary font-bold',
        },
        size: {
            sm: 'text-sm [&_svg]:w-4 [&_svg]:h-4',
            md: 'text-base [&_svg]:w-4.5 [&_svg]:h-4.5',
            lg: 'text-lg [&_svg]:w-5 [&_svg]:h-5',
        },
    },
    defaultVariants: {
        variant: 'neutral',
        size: 'sm',
    },
});

export type BreadcrumbStylesType = ReturnType<typeof breadcrumbStyles>;

const props = defineProps<{
    class?: HTMLAttributes['class'],
    variant?: 'neutral' | 'active',
    size?: 'sm' | 'md' | 'lg',
    orientation?: 'horizontal' | 'vertical',
    icon?: Component,
    isLast?: boolean,
}>()

const defaultSeparatorIcon = props.orientation === 'vertical'
    ? ChevronDownIcon
    : ChevronRightIcon;

const effectiveSeparatorIcon = props.icon || defaultSeparatorIcon;

provide('orientation', props.orientation);
provide('icon', effectiveSeparatorIcon);
provide('breadcrumbStyles', breadcrumbStyles);
provide('size', props.size);
provide('isLast', props.isLast);
</script>

<template>
    <nav aria-label="breadcrumb" :class="props.class">
        <ol :class="cn('flex',
            props.orientation === 'vertical' ? 'flex-col items-center gap-2' : 'flex-row items-center gap-2')">
            <slot />
        </ol>
    </nav>
</template>
