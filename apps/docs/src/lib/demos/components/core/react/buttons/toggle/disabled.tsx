import { Toggle } from "@/lib/components/core/default/react/buttons/toggle";
import { Pin } from "@/lib/icons";

export default function ToggleDemo() {
  return (
    <Toggle isDisabled>
      <Pin />
    </Toggle>
  );
}
