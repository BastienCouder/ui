import { Badge } from "@/lib/components/core/default/react/data-display/badge";
import { ShieldIcon } from "@/lib/icons";

export default function BadgeDemo() {
  return (
    <div className="flex items-center gap-2">
      <Badge icon={<ShieldIcon />} size="sm">
        Badge
      </Badge>
      <Badge icon={<ShieldIcon />} size="md">
        Badge
      </Badge>
      <Badge icon={<ShieldIcon />} size="lg">
        Badge
      </Badge>
    </div>
  );
}
