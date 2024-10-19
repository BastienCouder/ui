import { Toggle } from "@/registry/ui/react/toggle";
import { Pin } from "@/lib/icons";

export default function ToggleDemo() {
  return (
    <div className="flex w-full items-center justify-center gap-4">
      <Toggle shape="square">
        <Pin />
      </Toggle>
      <Toggle shape="circle">
        <Pin />
      </Toggle>
      <Toggle shape="rectangle">
        <Pin />
      </Toggle>
    </div>
  );
}
