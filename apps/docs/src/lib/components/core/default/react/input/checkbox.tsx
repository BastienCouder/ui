"use client";

import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { CheckIcon, MinusIcon } from "@/lib/icons";
import { focusRing, focusRingGroup } from "@/lib/utils/styles";

const checkboxStyles = tv({
  slots: {
    root: "group flex flex-row items-center gap-2 cursor-pointer invalid:text-fg-danger disabled:text-fg-disabled disabled:cursor-default",
    indicator: [
      "flex items-center justify-center w-4 h-4 shrink-0 rounded-sm border border-border-control cursor-pointer",
      "bg-transparent text-transparent group-checked:bg-bg-primary group-checked:text-fg-onPrimary transition-colors duration-75 group-checked:border-transparent",
      "group-indeterminate:bg-bg-primary group-indeterminate:text-fg-onPrimary",
      "group-read-only:cursor-default",
      "group-disabled:cursor-not-allowed group-disabled:border-border-disabled group-disabled:group-checked:text-fg-disabled group-disabled:group-checked:bg-bg-disabled group-disabled:group-indeterminate:bg-bg-disabled",
      "group-invalid:border-border-danger group-invalid:group-checked:bg-bg-danger-muted group-invalid:group-checked:text-fg-onMutedDanger",
    ],
  },
  variants: {
    variant: {
      default: {
        indicator: focusRingGroup(),
      },
      card: {
        root: [
          focusRing(),
          "border p-4 rounded-md flex-row-reverse gap-4 checked:bg-bg-muted disabled:checked:bg-bg-disabled transition-colors disabled:border-border-disabled",
        ],
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface CheckboxProps
  extends Omit<React.ComponentPropsWithoutRef<"input">, "type" | "className">,
    VariantProps<typeof checkboxStyles> {
  className?: string;
  indeterminate?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  defaultSelected?: boolean;
  isSelected?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const {
      className,
      variant,
      children,
      isDisabled,
      isReadOnly,
      defaultSelected,
      isSelected,
      onChange,
      ...restProps
    } = props;
    const { root, indicator } = checkboxStyles({ variant });

    const [isChecked, setIsChecked] = React.useState(
      isSelected ?? restProps.checked ?? defaultSelected ?? false,
    );
    const [isIndeterminate, setIsIndeterminate] = React.useState(
      restProps.indeterminate || false,
    );

    React.useEffect(() => {
      if (restProps.checked !== undefined) {
        setIsChecked(restProps.checked);
      }
    }, [restProps.checked]);

    React.useEffect(() => {
      if (restProps.indeterminate !== undefined) {
        setIsIndeterminate(restProps.indeterminate);
      }
    }, [restProps.indeterminate]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (isDisabled || isReadOnly) return;

      const checked = event.target.checked;
      setIsChecked(checked);
      setIsIndeterminate(event.target.indeterminate);
      if (onChange) {
        onChange(event);
      }
    };

    return (
      <label className={root({ className })}>
        <input
          ref={ref}
          type="checkbox"
          {...restProps}
          checked={isChecked}
          onChange={handleChange}
          disabled={isDisabled}
          readOnly={isReadOnly}
          className="sr-only"
        />
        <div
          className={indicator({
            className: isDisabled ? "cursor-not-allowed" : "",
          })}
        >
          {isIndeterminate ? (
            <MinusIcon className="w-2.5 h-2.5" />
          ) : (
            isChecked && (
              <CheckIcon
                className={`w-3 h-3 ${isDisabled ? "text-fg-disabled" : "text-primary"}`}
              />
            )
          )}
        </div>
        <span
          className={
            isDisabled ? "text-fg-disabled" : isReadOnly ? "text-fg-muted" : ""
          }
        >
          {children}
        </span>
      </label>
    );
  },
);

Checkbox.displayName = "Checkbox";

type CheckboxContextValue = VariantProps<typeof checkboxStyles>;
const CheckboxContext = React.createContext<CheckboxContextValue>({});
const useCheckboxContext = () => {
  return React.useContext(CheckboxContext);
};

export type { CheckboxProps };
export { Checkbox, CheckboxContext };
