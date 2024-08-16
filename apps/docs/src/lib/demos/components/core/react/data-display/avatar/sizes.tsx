import { Avatar } from "@/lib/components/core/default/react/data-display/avatar";

export default function AvatarDemo() {
  return (
    <div className="space-x-4">
      {(["sm", "md", "lg"] as const).map((size) => (
        <Avatar
          key={size}
          size={size}
          src="/images/profile-default.png"
          alt="@bastiencouder"
          fallback="B"
          className="bg-white/70"
        />
      ))}
    </div>
  );
}
