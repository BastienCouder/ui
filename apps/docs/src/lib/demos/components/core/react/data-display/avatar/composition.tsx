import React from "react";
import { UserIcon } from "@/lib/icons";
import {
  AvatarFallback,
  AvatarImage,
  AvatarPlaceholder,
  AvatarRoot,
} from "@/lib/components/core/default/react/data-display/avatar";

export default function AvatarDemo() {
  return (
    <AvatarRoot className="bg-white/70">
      <AvatarImage src="/images/profile-default.png" alt="@bastiencouder" />
      <AvatarFallback>B</AvatarFallback>
      <AvatarPlaceholder>
        <UserIcon className="size-5" />
      </AvatarPlaceholder>
    </AvatarRoot>
  );
}