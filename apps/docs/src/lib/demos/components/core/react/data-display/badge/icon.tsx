import { Badge } from "@/lib/components/core/default/react/data-display/badge";
import { Shield } from "@/lib/icons";

export default function BadgeDemo() {
  return (
    <div className="flex items-center gap-2">
      <Badge icon={<Shield />} size="sm">
        Badge
      </Badge>
      <Badge icon={<Shield />} size="md">
        Badge
      </Badge>
      <Badge icon={<Shield />} size="lg">
        Badge
      </Badge>
    </div>
  );
}
