"use client";

import { Textarea } from "@/registry/ui/react/textarea";

export default function TextareaDemo(): JSX.Element {
  return (
    <Textarea
      placeholder="Type your message here."
      description="This is a description"
    />
  );
}
