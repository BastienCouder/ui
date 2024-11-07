import { Card, CardHeader, CardTitle } from "@/registry/ui/react/card";

const variants = [
  "default",
  "outline",
  "success",
  "warning",
  "danger",
] as const;

export default function CardDemo(): JSX.Element {
  return (
    <div className="grid grid-cols-2 gap-2">
      {variants.map((variant) => (
        <Card key={variant} variant={variant}>
          <CardHeader>
            <CardTitle className="text-base">{variant}</CardTitle>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
