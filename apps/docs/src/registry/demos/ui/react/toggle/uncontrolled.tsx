import { Toggle } from "@/registry/ui/react/toggle";
import { Pin } from "@/lib/icons";

export default function ToggleDemo() {
  return (
    <Toggle defaultSelected>
      <Pin />
    </Toggle>
  );
}