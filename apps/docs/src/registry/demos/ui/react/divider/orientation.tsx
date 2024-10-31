import { Divider } from "@/registry/ui/react/divider";

export default function DividerDemo(): JSX.Element {
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
