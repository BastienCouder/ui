"use client"

import { Button } from "@/lib/components/core/default/react/buttons/button"
import { ToastAction } from "@/lib/components/core/default/react/overlay/toast"
import { useToast } from "@/lib/components/core/default/react/overlay/use-toast"

export default function ToastDemo() {
    const { toast } = useToast()

    return (
        <Button
            onClick={() => {
                toast({
                    title: "Scheduled: Catch up ",
                    description: "Friday, February 10, 2023 at 5:57 PM",
                    action: (
                        <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
                    ),
                })
            }}
        >
            Add to calendar
        </Button>
    )
}
