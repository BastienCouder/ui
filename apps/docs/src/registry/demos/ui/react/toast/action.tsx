"use client";

import { Button } from "@/registry/ui/react/button";
import { ToastAction } from "@/registry/ui/react/toast";
import { useToast } from "@/registry/ui/react/use-toast";

export default function ToastDemo(): JSX.Element {
  const { toast } = useToast();

  return (
    <Button
      onClick={() => {
        toast({
          title: "Scheduled: Catch up ",
          description: "Friday, February 10, 2023 at 5:57 PM",
          action: (
            <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
          ),
        });
      }}
    >
      Add to calendar
    </Button>
  );
}
