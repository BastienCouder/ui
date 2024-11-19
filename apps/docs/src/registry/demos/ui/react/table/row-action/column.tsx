"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "@/lib/icons";
import { Button } from "@/registry/ui/react/button";
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownLabel,
  DropdownSeparator,
  DropdownTrigger,
} from "@/registry/ui/react/dropdown";
import { Payment } from "../basic/column";

export const columns: ColumnDef<Payment>[] = [
  // ...
  {
    id: "actions",
    cell: ({ row }: { row: { original: Payment } }): JSX.Element => {
      const payment = row.original;

      return (
        <Dropdown>
          <DropdownTrigger asChild>
            <Button variant="quiet" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownTrigger>
          <DropdownContent align="end">
            <DropdownLabel>Actions</DropdownLabel>
            <DropdownItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownItem>
            <DropdownSeparator />
            <DropdownItem>View customer</DropdownItem>
            <DropdownItem>View payment details</DropdownItem>
          </DropdownContent>
        </Dropdown>
      );
    },
  },
  // ...
];
