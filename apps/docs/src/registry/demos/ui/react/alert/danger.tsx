"use client";

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/ui/react/alert";
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
