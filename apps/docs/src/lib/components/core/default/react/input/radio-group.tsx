'use client'

import * as React from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { Circle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { tv } from 'tailwind-variants'

const radioItemStyles = tv({
  base: "border ring-offset-background focus-visible:ring-ring peer shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  variants: {
    variant: {
      neutral: "border-fg data-[state=checked]:bg-fg data-[state=checked]:text-bg",
      primary: "border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-fg",
      secondary: "border-secondary data-[state=checked]:bg-secondary data-[state=checked]:text-secondary-fg",
    },
    size: {
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
    },
    shape: {
      rectangle: "rounded-md",
      square: "rounded-none",
      circle: "rounded-full",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
    shape: "circle",
  },
})

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn('grid gap-2', className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

type RadioGroupItemProps = React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & {
  variant?: 'neutral' | 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  shape?: 'rectangle' | 'square' | 'circle';
}

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(({ className, variant, size, shape, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        radioItemStyles({ variant, size, shape }),
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="w-2.5 h-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }
