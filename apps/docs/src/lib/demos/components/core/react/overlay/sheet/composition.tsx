"use client";

import { Label } from "@/lib/components/core/default/react/input/label";
import { TextField } from "@/lib/components/core/default/react/input/text-field";
import { Button } from "@/lib/components/core/default/react/buttons/button";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter, SheetClose } from "@/lib/components/core/default/react/overlay/sheet";

export default function SheetDemo() {
   return (
      <Sheet>
         <SheetTrigger asChild>
            <Button>Open</Button>
         </SheetTrigger>
         <SheetContent>
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
                  <TextField id="name" value="Pedro Duarte" className="col-span-3" />
               </div>
               <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                     Username
                  </Label>
                  <TextField id="username" value="~peduarte" className="col-span-3" />
               </div>
            </div>
            <SheetFooter>
               <SheetClose asChild>
                  <Button type="submit">Save changes</Button>
               </SheetClose>
            </SheetFooter>
         </SheetContent>
      </Sheet>
   )
}