import { Avatar } from "@/lib/components/core/default/react/data-display/avatar";

export default function AvatarDemo() {
  return (
    <Avatar
      className="bg-white/70"
      src="/images/profile-default.png"
      alt="@bastiencouder"
      fallback="B"
    />
  );
}
