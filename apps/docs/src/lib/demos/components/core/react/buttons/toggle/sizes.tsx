import { Toggle } from "@/lib/components/core/default/react/buttons/toggle";
import { PinIcon } from "@/lib/icons";

export default function ToggleDemo() {
  return (
    <div className="flex w-full items-center justify-center gap-4">
      <Toggle size="sm">
        <PinIcon />
      </Toggle>
      <Toggle size="md">
        <PinIcon />
      </Toggle>
      <Toggle size="lg">
        <PinIcon />
      </Toggle>
    </div>
  );
}
