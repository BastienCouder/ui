"use client";

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/lib/components/core/default/react/data-display/alert";
import { AlertCircle } from "lucide-react";

export default function AlertDemo() {
  return (
    <Alert variant="danger">
         <AlertCircle className="size-4" />
         <AlertTitle>Error</AlertTitle>
         <AlertDescription>
            Your session has expired. Please log in again.
         </AlertDescription>
      </Alert>
  );
}
