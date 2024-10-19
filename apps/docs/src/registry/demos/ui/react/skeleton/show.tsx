import { Button } from "@/registry/ui/react/button";
import { Skeleton } from "@/registry/ui/react/skeleton";

export default function SkeletonDemo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Skeleton>
        <Button>Button</Button>
      </Skeleton>
      <Skeleton show={false}>
        <Button>Button</Button>
      </Skeleton>
    </div>
  );
}
