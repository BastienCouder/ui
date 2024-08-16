import { Button } from "@/lib/components/core/default/react/buttons/button";
import { Divider } from "@/lib/components/core/default/react/data-display/divider";

export default function DividerDemo() {
  return (
    <div className="w-full mx-4">
      <Divider className="gap-4">
        <Button>Default</Button>
      </Divider>
    </div>
  );
}