import { Button } from "@/registry/ui/react/button";

export default function ButtonDemo() {
  return (
    <div className="flex w-full items-center justify-center gap-4">
      <Button size="sm">Button</Button>
      <Button size="md">Button</Button>
      <Button size="lg">Button</Button>
    </div>
  );
}
