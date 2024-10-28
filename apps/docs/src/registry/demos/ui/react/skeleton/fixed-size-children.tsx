import { Button } from "@/registry/ui/react/button";
import { Skeleton } from "@/registry/ui/react/skeleton";

export default function SkeletonDemo(): JSX.Element {
  return (
    <Skeleton className="size-20">
      <Button>Button</Button>
    </Skeleton>
  );
}
