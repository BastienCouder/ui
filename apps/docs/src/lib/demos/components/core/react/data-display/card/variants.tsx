import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/lib/components/core/default/react/data-display/card";

const variants = [
  "default",
  "outline",
  "success",
  "warning",
  "danger",
] as const;

export default function Demo() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {variants.map((variant) => (
        <Card key={variant} variant={variant}>
          <CardHeader>
            <CardTitle>{variant}</CardTitle>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
