import { Avatar } from "@/registry/ui/react/avatar";

export default function AvatarDemo(): JSX.Element {
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
