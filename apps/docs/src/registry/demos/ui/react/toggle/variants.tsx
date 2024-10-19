import { Toggle } from "@/registry/ui/react/toggle";
import { Pin } from "@/lib/icons";

const variants = ["outline", "quiet", "accent"] as const;

export default function ToggleDemo() {
  return (
    <div className="flex space-x-4">
      {variants.map((variant) => (
        <Toggle key={variant} variant={variant}>
          <Pin />
        </Toggle>
      ))}
    </div>
  );
}
