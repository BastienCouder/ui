"use client";

import {   Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue} from "@/registry/ui/react/select";
import { TextField } from "@/registry/ui/react/text-field";
import { Loader2 } from "lucide-react";
import * as React from "react";

const generateFakeData = (numItems: number) => {
  return Array.from({ length: numItems }, (_, index) => ({
    id: index + 1,
    name: `Item ${index + 1}`,
  }));
};

const ITEMS_PER_PAGE = 10;

export default function TestPage(): JSX.Element {
  const data = generateFakeData(100); // Creating 100 fake items
  const [currentPage, setCurrentPage] = React.useState(1);

  // Calculate the current page data
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentData = data.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return <main className="container pb-36 pt-16">Test Page
  <div><Select className="w-[180px]"
  options={[
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
  ]}
>
 Open Select
</Select>
</div>
<div>
<Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
<div className="flex flex-col gap-4">
    <TextField  placeholder="Email" />
    <TextField  prefix={<Loader2/>} />
    <TextField  suffix={<Loader2/>} />
    <TextField  isLoading  className="w-full"/>
    <TextField  isInvalid errorMessage="error"/>
    <TextField  label="label" />
    <TextField  description="description" />
    <TextField  contextualHelp='help' label="help" />
    </div>
</div>

  </main>;
}
