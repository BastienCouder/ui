"use client";

import { ColumnDef, Column } from "@tanstack/react-table";
import { ArrowUpDown } from "@/lib/icons";
import { Payment } from "../basic/column";
import { Button } from "@/registry/ui/react/button";

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "email",
    header: ({ column }: { column: Column<Payment, unknown> }): JSX.Element => {
      return (
        <Button
          variant="quiet"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
];
