"use client";

import {
  AlertDialog,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/registry/ui/react/alert-dialog";
import { Button } from "@/registry/ui/react/button";

export default function AlertDialogDemo(): JSX.Element {
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
    <AlertDialog content={<Content />} cancelText="No" okText="Yes">
      <Button>Show Dialog</Button>
    </AlertDialog>
  );
}
