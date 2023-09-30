"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useExpenseForm } from "./hooks/useExpenseForm";
import { categories } from "./constants/categories";

import { NextPage } from "next";

interface Props {}

const ExpenseForm: NextPage<Props> = ({}) => {
  const { form, onSubmit, control, handleSubmit } = useExpenseForm();

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[420px] space-y-6 mb-6"
      >
        <FormField
          name="name"
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Expense Name</FormLabel>

              <FormControl>
                <Input {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="amount"
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Expense Amount</FormLabel>

              <FormControl>
                <Input
                  type="number"
                  {...field}
                  onChange={(e) =>
                    field.onChange(e.target.value && parseFloat(e.target.value))
                  }
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="category"
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Expense Category</FormLabel>

              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>

                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="bg-blue-500 hover:bg-blue-600">
          Add Expense
        </Button>
      </form>
    </Form>
  );
};

export default ExpenseForm;
