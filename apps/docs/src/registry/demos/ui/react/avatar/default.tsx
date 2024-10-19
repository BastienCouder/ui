import { Avatar } from "@/registry/ui/react/avatar";

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
