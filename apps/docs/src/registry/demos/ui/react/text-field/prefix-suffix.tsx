"use client";

import { TextField } from "@/registry/ui/react/text-field";
import { Upload } from "@/lib/icons";

export default function TextFieldDemo(): JSX.Element {
  return (<div className="flex gap-4">
    <TextField prefix={<Upload />} />
    <TextField suffix={<Upload />} />
  </div>
  )
}
