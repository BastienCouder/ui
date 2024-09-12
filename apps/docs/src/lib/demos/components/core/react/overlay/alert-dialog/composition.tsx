"use client";

import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from '@/lib/components/core/default/react/overlay/alert-dialog'
import { Button } from '@/lib/components/core/default/react/buttons/button'
 
 export default function AlertDialogDemo() {
    return (
       <AlertDialog>
          <AlertDialogTrigger asChild>
             <Button>Show Dialog</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
             <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                   This action cannot be undone. This will permanently delete your
                   account and remove your data from our servers.
                </AlertDialogDescription>
             </AlertDialogHeader>
             <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
             </AlertDialogFooter>
          </AlertDialogContent>
       </AlertDialog>
    )
 }
 