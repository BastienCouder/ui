"use client";

import { Button } from "@/registry/ui/react/button";
import { useToast } from "@/registry/ui/react/use-toast";

const variants = ["default", "primary", "secondary", "danger"] as const;

export default function ToastDemo() {
  const { toast } = useToast();

  return (
    <div className="grid grid-cols-2 gap-2">
      {variants.map((variant) => (
        <Button
          key={variant}
          onClick={() => {
            toast({
              title: "Scheduled: Catch up ",
              description: "Friday, February 10, 2023 at 5:57 PM",
            });
          }}
        >
          {variant}
        </Button>
      ))}
    </div>
  );
}
