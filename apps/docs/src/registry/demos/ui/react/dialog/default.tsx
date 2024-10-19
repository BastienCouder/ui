"use client";

import { Button } from "@/registry/ui/react/button";
import { Label } from "@/registry/ui/react/label";
import { TextField } from "@/registry/ui/react/text-field";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/registry/ui/react/dialog";

export default function DialogDemo() {
  const Content = () => (
    <>
      <DialogHeader>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
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
      <DialogFooter>
        <Button type="submit">Save changes</Button>
      </DialogFooter>
    </>
  );

  return (
    <Dialog content={<Content />} className="sm:max-w-[425px]">
      <Button>Edit Profile</Button>
    </Dialog>
  );
}
