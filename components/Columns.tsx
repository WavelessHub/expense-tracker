"use client";

import { ColumnDef } from "@tanstack/react-table";

import CellActions from "./common/CellActions";

export type Expense = {
  id: number;
  name: string;
  amount: number;
  category: string;
};

export const columns: ColumnDef<Expense>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => <div>${row.original.amount}</div>,
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => <CellActions expenseId={row.original.id} />,
  },
];
