import { Divider } from "@/lib/components/core/default/react/data-display/divider";

export default function DividerDemo() {
  return (
    <div className="w-full mx-4">
      <Divider orientation="vertical" className="gap-4 min-h-[200px]">
        Vertical
      </Divider>
      <Divider orientation="horizontal" className="gap-4">
        Horizontal
      </Divider>
    </div>
  );
}