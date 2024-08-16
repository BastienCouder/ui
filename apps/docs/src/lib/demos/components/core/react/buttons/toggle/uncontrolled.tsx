import { Toggle } from "@/lib/components/core/default/react/buttons/toggle";
import { PinIcon } from "@/lib/icons";

export default function ToggleDemo() {
  return (
    <Toggle defaultSelected>
      <PinIcon />
    </Toggle>
  );
}
