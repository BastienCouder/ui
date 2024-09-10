import React, { useMemo } from 'react';
import { cn } from '@/lib/utils'; // Assuming you have a utility function for className merging
import { Minus, Plus } from 'lucide-react'; // Icons for increment and decrement

interface NumberFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  decrementClassName?: string;
  incrementClassName?: string;
  inputClassName?: string;
}

const NumberField: React.FC<NumberFieldProps & { className?: string }> = ({
  className,
  decrementClassName,
  incrementClassName,
  inputClassName,
  children,
  ...rest
}) => {
  const delegatedProps = useMemo(() => {
    const { className: _, decrementClassName: __, incrementClassName: ___, inputClassName: ____, ...delegated } = rest;
    return delegated;
  }, [rest]);

  return (
    <div className={cn('grid gap-1.5', className)} {...delegatedProps}>
      <div
        className={cn(
          'relative [&>[data-slot=input]]:has-[data-slot=increment]:pr-5 [&>[data-slot=input]]:has-[data-slot=decrement]:pl-5',
          className
        )}
      >
        {/* Decrement Button */}
        <button
          data-slot="decrement"
          className={cn(
            'absolute top-1/2 -translate-y-1/2 left-0 p-3 disabled:cursor-not-allowed disabled:opacity-20',
            decrementClassName
          )}
        >
          <Minus className="h-4 w-4" />
        </button>

        {/* Input Field */}
        <input
          data-slot="input"
          className={cn(
            'flex h-10 w-full rounded-md border border-input bg-bg py-2 text-sm text-center ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            inputClassName
          )}
          type="number"
        />

        {/* Increment Button */}
        <button
          data-slot="increment"
          className={cn(
            'absolute top-1/2 -translate-y-1/2 right-0 disabled:cursor-not-allowed disabled:opacity-20 p-3',
            incrementClassName
          )}
        >
          <Plus className="h-4 w-4" />
        </button>

        {/* Slot content */}
        {children}
      </div>
    </div>
  );
};

export default NumberField;
