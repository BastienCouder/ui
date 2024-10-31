"use client";

import { Button } from "@/registry/ui/react/button";
import { useToast } from "@/registry/ui/react/use-toast";

export default function ToastDemo(): JSX.Element {
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
