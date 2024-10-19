import { Toggle } from "@/registry/ui/react/toggle";
import { Pin } from "@/lib/icons";

export default function ToggleDemo() {
  return (
    <div className="flex w-full items-center justify-center gap-4">
      <Toggle size="sm">
        <Pin />
      </Toggle>
      <Toggle size="md">
        <Pin />
      </Toggle>
      <Toggle size="lg">
        <Pin />
      </Toggle>
    </div>
  );
}
