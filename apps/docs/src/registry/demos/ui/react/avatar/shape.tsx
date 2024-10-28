import { Avatar } from "@/registry/ui/react/avatar";

export default function AvatarDemo(): JSX.Element {
  return (
    <div className="space-x-4">
      <Avatar
        className="bg-white/70"
        src="/images/profile-default.png"
        alt="@bastiencouder"
        fallback="B"
        shape="square"
      />
      <Avatar
        className="bg-white/70"
        src="/images/profile-default.png"
        alt="@bastiencouder"
        fallback="B"
        shape="circle"
      />
    </div>
  );
}
