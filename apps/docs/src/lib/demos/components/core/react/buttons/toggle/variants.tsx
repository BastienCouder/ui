import { Toggle } from "@/lib/components/core/default/react/buttons/toggle";
import { PinIcon } from "@/lib/icons";

const variants = ["outline", "quiet", "accent"] as const;

export default function ToggleDemo() {
  return (
    <div className="flex space-x-4">
      {variants.map((variant) => (
        <Toggle key={variant} variant={variant}>
          <PinIcon />
        </Toggle>
      ))}
    </div>
  );
}
