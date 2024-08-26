<script setup lang="ts">
import { defineProps, withDefaults, computed, type VNode } from 'vue'
import type { HTMLAttributes, FunctionalComponent } from 'vue'
import { type PrimitiveProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { tv, VariantProps } from 'tailwind-variants'
import { LoaderIcon } from "@/lib/icons";

const buttonStyles = tv(
  {
    base: "inline-flex gap-2 cursor-pointer items-center justify-center whitespace-nowrap rounded-md leading-normal text-sm shrink-0 font-medium ring-offset-background transition-colors disabled:cursor-default disabled:bg-bg-disabled disabled:text-fg-disabled",
    variants: {
      variants: {
      variant: {
        default:
          "bg-neutral hover:bg-neutral-hover active:bg-neutral-active text-neutral-fg",
        primary:
          "bg-primary hover:bg-primary-hover active:bg-primary-active text-primary-fg",
        secondary:
          "bg-secondary hover:bg-secondary-hover active:bg-secondary-active text-secondary-fg",
        quiet:
          "bg-transparent hover:bg-neutral/10 active:bg-neutral/20 text-fg",
        outline:
          "border border-border bg-transparent hover:bg-neutral/10 active:bg-neutral/20 text-fg disabled:border-disabled disabled:bg-transparent",
        success:
          "bg-success hover:bg-success-hover active:bg-success-active text-success-fg",
        warning:
          "bg-warning hover:bg-warning-hover active:bg-warning-active text-warning-fg",
        danger:
          "bg-danger hover:bg-danger-hover active:bg-danger-active text-danger-fg",
      },
      size: {
        sm: "h-8 px-3 [&_svg]:w-4 [&_svg]:h-4",
        md: "h-9 px-4 [&_svg]:w-4 [&_svg]:h-4",
        lg: "h-10 px-5 [&_svg]:w-5 [&_svg]:h-5",
      },
      shape: {
        rectangle: "",
        square: "",
        circle: "rounded-full",
      },
    },
    compoundVariants: [
      {
        size: "sm",
        shape: ["square", "circle"],
        className: "w-8 px-0",
      },
      {
        size: "md",
        shape: ["square", "circle"],
        className: "w-9 px-0",
      },
      {
        size: "lg",
        shape: ["square", "circle"],
        className: "w-10 px-0",
      },
    ],
  },
  {
    responsiveVariants: ["sm", "lg"],
  }
)

type ButtonStyles = VariantProps<typeof buttonStyles>

interface Props extends PrimitiveProps {
  variant?: ButtonStyles['variant']
  size?: ButtonStyles['size']
  shape?: ButtonStyles['shape']
  isLoading?: boolean
  prefix?: VNode | FunctionalComponent | string
  suffix?: VNode | FunctionalComponent | string
  class?: HTMLAttributes['class']
  isDisabled?: boolean
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top' | string;
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
  variant: 'default',
  size: 'md',
  shape: 'rectangle',
  isDisabled: false,
})

const classes = computed(() => 
  cn(buttonStyles({ variant: props.variant, size: props.size, shape: props.shape }), props.class)
)

const showLoader = computed(() => props.isLoading)
</script>

<template>
  <!-- if href-->
  <template v-if="props.href">
    <a :href="props.href" :target="props.target" :class="classes" :disabled="props.isDisabled">
      <span v-if="showLoader">
        <BeakerIcon aria-label="loading" class="animate-spin" />
      </span>
      <span v-else-if="props.prefix">
        <template v-if="typeof props.prefix === 'string'">
          {{ props.prefix }}
        </template>
        <template v-else>
          <component :is="props.prefix" />
        </template>
      </span>
      <slot />
      <span v-if="props.suffix">
        <template v-if="typeof props.suffix === 'string'">
          {{ props.suffix }}
        </template>
        <template v-else>
          <component :is="props.suffix" />
        </template>
      </span>
    </a>
  </template>
  <!-- else -->
  <template v-else>
    <button :class="classes" :disabled="props.isDisabled">
      <span v-if="showLoader">
        <LoaderIcon aria-label="loading" class="animate-spin" />
      </span>
      <span v-else-if="props.prefix">
        <template v-if="typeof props.prefix === 'string'">
          {{ props.prefix }}
        </template>
        <template v-else>
          <component :is="props.prefix" />
        </template>
      </span>
      <slot />
      <span v-if="props.suffix">
        <template v-if="typeof props.suffix === 'string'">
          {{ props.suffix }}
        </template>
        <template v-else>
          <component :is="props.suffix" />
        </template>
      </span>
    </button>
  </template>
</template>
