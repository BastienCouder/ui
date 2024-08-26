import { Toggle } from "@/lib/components/core/default/react/buttons/toggle";
import { PinIcon } from "@/lib/icons";

export default function ToggleDemo() {
  return (
    <div className="flex w-full items-center justify-center gap-4">
      <Toggle shape="square">
        <PinIcon />
      </Toggle>
      <Toggle shape="circle">
        <PinIcon />
      </Toggle>
      <Toggle shape="rectangle">
        <PinIcon />
      </Toggle>
    </div>
  );
}
