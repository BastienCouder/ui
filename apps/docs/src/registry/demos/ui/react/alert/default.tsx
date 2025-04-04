"use client";

import { Terminal } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/registry/ui/react/alert";

export default function AlertDemo(): JSX.Element {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  );
}
