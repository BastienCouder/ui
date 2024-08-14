import { Avatar } from "@/lib/components/core/default/react/data-display/avatar";

export default function Demo() {
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
