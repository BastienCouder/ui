import { Button } from "@/lib/components/core/default/react/buttons/button";

export default function ButtonDemo() {
  return (
    <div className="flex w-full items-center justify-center gap-2">
      <Button size="sm" isLoading>
        Button
      </Button>
      <Button size="md" isLoading>
        Button
      </Button>
      <Button size="lg" isLoading>
        Button
      </Button>
    </div>
  );
}
