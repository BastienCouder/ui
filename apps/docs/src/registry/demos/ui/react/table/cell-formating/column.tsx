"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Payment } from "../basic/column";

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({
      row,
    }: {
      row: { getValue: (key: string) => string };
    }): JSX.Element => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
];
