import { Button } from "@/lib/components/core/default/react/buttons/button";
import { Skeleton } from "@/lib/components/core/default/react/feedback/skeleton";

export default function Demo() {
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
