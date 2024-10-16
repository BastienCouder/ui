"use client";

import { Button } from "@/lib/components/core/default/react/buttons/button";
import { useToast } from "@/lib/components/core/default/react/overlay/use-toast";

export default function ToastDemo() {
  const { toast } = useToast();

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: "Scheduled: Catch up ",
          description: "Friday, February 10, 2023 at 5:57 PM",
        });
      }}
    >
      Add to calendar
    </Button>
  );
}
