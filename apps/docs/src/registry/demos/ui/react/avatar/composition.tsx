import React from "react";
import { User2 } from "@/lib/icons";
import {
  AvatarFallback,
  AvatarImage,
  AvatarPlaceholder,
  AvatarRoot,
} from "@/registry/ui/react/avatar";

export default function AvatarDemo(): JSX.Element {
  return (
    <AvatarRoot className="bg-white/70">
      <AvatarImage src="/images/profile-default.png" alt="@bastiencouder" />
      <AvatarFallback>B</AvatarFallback>
      <AvatarPlaceholder>
        <User2 className="size-5" />
      </AvatarPlaceholder>
    </AvatarRoot>
  );
}
