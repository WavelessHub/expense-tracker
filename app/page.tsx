"use client";

import ExpenseForm from "@/components/forms/ExpenseForm";
import IncomeForm from "@/components/forms/IncomeForm";

import { DataTable } from "@/components/DataTable";
import { columns } from "@/components/Columns";

import { useExpense } from "@/hooks/useExpense";

import { NextPage } from "next";
import { useState, useEffect } from "react";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const { expenses, sortValue } = useExpense();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const visibleExpenses = sortValue
    ? expenses.filter((expense) => expense.category === sortValue)
    : expenses;

  if (!isMounted) return <></>;

  return (
    <div className="p-6 space-y-16">
      <ExpenseForm />
      <IncomeForm />

      <DataTable columns={columns} data={visibleExpenses} />
    </div>
  );
};

export default Page;
