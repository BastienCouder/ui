"use client";

import { TextField } from "@/registry/ui/react/text-field";

export default function TextFieldDemo(): JSX.Element {
  return <TextField isInvalid errorMessage="This is an error" />;
}
