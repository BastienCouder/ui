"use client";

import { Button } from "@/lib/components/core/default/react/buttons/button";
import { Label } from "@/lib/components/core/default/react/input/label";
import { TextField } from "@/lib/components/core/default/react/input/text-field";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/lib/components/core/default/react/overlay/dialog";

export default function DialogDemo() {
   return (
      <Dialog>
         <DialogTrigger asChild>
            <Button>Edit Profile</Button>
         </DialogTrigger>
         <DialogContent className="sm:max-w-[425px]">
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
         </DialogContent>
      </Dialog>
   )
}
