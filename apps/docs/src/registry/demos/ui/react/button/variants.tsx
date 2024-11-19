import { Button } from "@/registry/ui/react/button";

const variants = [
  "default",
  "primary",
  "secondary",
  "outline",
  "quiet",
  "success",
  "warning",
  "danger",
] as const;

export default function ButtonDemo(): JSX.Element {
  return (
    <div className="grid grid-cols-4 gap-2">
      {variants.map((variant) => (
        <Button key={variant} variant={variant}>
          {variant}
        </Button>
      ))}
    </div>
  );
}
