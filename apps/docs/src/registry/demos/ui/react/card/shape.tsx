import { Card, CardHeader, CardTitle } from "@/registry/ui/react/card";

const shapes = ["rectangle", "square", "circle"] as const;

export default function CardDemo(): JSX.Element {
  return (
    <div className="grid grid-cols-2 gap-2">
      {shapes.map((shape) => (
        <Card key={shape} shape={shape}>
          <CardHeader>
            <CardTitle className="text-lg">{shape}</CardTitle>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
