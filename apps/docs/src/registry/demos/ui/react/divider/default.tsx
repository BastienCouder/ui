import { Button } from "@/registry/ui/react/button";
import { Divider } from "@/registry/ui/react/divider";

export default function DividerDemo(): JSX.Element {
  return (
    <div className="w-full mx-4">
      <Divider className="gap-4">
        <Button>Default</Button>
      </Divider>
    </div>
  );
}
