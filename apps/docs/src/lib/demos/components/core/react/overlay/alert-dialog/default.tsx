"use client";

import { AlertDialog, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from '@/lib/components/core/default/react/overlay/alert-dialog'
import { Button } from '@/lib/components/core/default/react/buttons/button'
 
 export default function AlertDialogDemo() {
   const Content = () => (
      <>
         <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
               This action cannot be undone. This will permanently delete your
               account and remove your data from our servers.
            </AlertDialogDescription>
         </AlertDialogHeader>
      </>
   );

    return (
       <AlertDialog content={<Content/>} cancelText='Cancel' okText='Continue'>
             <Button>Show Dialog</Button>
       </AlertDialog>
    )
 }
 