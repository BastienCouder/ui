import { CalendarDays } from "lucide-react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/ui/react/avatar";
import { Button } from "@/registry/ui/react/button";
import { HoverCard } from "@/registry/ui/react/hover-card";

export default function HoverCardDemo() {
  const Content = () => (
    <div className="flex justify-between space-x-4">
      <Avatar>
        <AvatarImage src="https://github.com/vercel.png" />
        <AvatarFallback>VC</AvatarFallback>
      </Avatar>
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">@nextjs</h4>
        <p className="text-sm">
          The React Framework – created and maintained by @vercel.
        </p>
        <div className="flex items-center pt-2">
          <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
          <span className="text-xs text-muted-foreground">
            Joined December 2021
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <HoverCard content={<Content />} className="w-80">
      <Button variant="link">@nextjs</Button>
    </HoverCard>
  );
}
