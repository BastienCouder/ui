import { Badge } from "@/lib/components/core/default/react/data-display/badge";

export default function BadgeDemo() {
  return (
    <div className="flex items-center gap-2">
      <Badge variant="primary" size="sm">
        Small
      </Badge>
      <Badge variant="primary" size="md">
        Medium
      </Badge>
      <Badge variant="primary" size="lg">
        Large
      </Badge>
    </div>
  );
}
