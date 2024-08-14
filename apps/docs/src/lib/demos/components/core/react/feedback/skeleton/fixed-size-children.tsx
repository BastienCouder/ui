import { Button } from "@/lib/components/core/default/react/buttons/button";
import { Skeleton } from "@/lib/components/core/default/react/feedback/skeleton";

export default function Demo() {
  return (
    <Skeleton className="size-20">
      <Button>Button</Button>
    </Skeleton>
  );
}
