"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useExpense } from "@/hooks/useExpense";

import { useEffect } from "react";

import toast from "react-hot-toast";

const schema = z.object({
  name: z.string({ required_error: "Name is required." }).min(3).max(50),
  amount: z
    .number({ required_error: "Amount is required." })
    .min(0.01)
    .max(100_000),
  category: z.string({ required_error: "Category is required." }),
});

type SchemaType = z.infer<typeof schema>;

export const useExpenseForm = () => {
  const { expenses, addExpense } = useExpense();

  const form = useForm<SchemaType>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      amount: 0,
      category: "",
    },
  });

  useEffect(() => {
    const expenseAdded = localStorage.getItem("expenseAdded");

    if (expenseAdded === "true") {
      toast.success("Expense Added!");
      localStorage.removeItem("expenseAdded");
    }
  }, []);

  const onSubmit = (data: SchemaType) => {
    addExpense({ id: expenses.length + 1, ...data });
    localStorage.setItem("expenseAdded", "true");
    window.location.reload();
  };

  return { form, onSubmit, ...form };
};
