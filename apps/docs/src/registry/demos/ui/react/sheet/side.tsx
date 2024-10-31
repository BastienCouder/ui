"use client";

import { Label } from "@/registry/ui/react/label";
import { TextField } from "@/registry/ui/react/text-field";
import { Button } from "@/registry/ui/react/button";
import {
  Sheet,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@/registry/ui/react/sheet";

const sides = ["top", "right", "left", "bottom"] as const;

export default function SheetDemo(): JSX.Element {
  const Content = () => (
    <>
      <SheetHeader>
        <SheetTitle>Edit profile</SheetTitle>
        <SheetDescription>
          Make changes to your profile here. Click save when you're done.
        </SheetDescription>
      </SheetHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Name
          </Label>
          <TextField
            id="name"
            defaultValue="Pedro Duarte"
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Username
          </Label>
          <TextField
            id="username"
            defaultValue="~peduarte"
            className="col-span-3"
          />
        </div>
      </div>
      <SheetFooter>
        <Button type="submit">Save changes</Button>
      </SheetFooter>
    </>
  );

  return (
    <div className="grid grid-cols-2 gap-2">
      {sides.map((side) => (
        <Sheet key={side} content={<Content />} side={side}>
          <Button>{side}</Button>
        </Sheet>
      ))}
    </div>
  );
}
