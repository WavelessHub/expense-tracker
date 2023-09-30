import { Expense } from "@/components/Columns";
import toast from "react-hot-toast";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type ExpenseType = {
  expenses: Expense[];
  sortValue: string;
  addExpense: (data: Expense) => void;
  removeExpense: (id: number) => void;
  setSortValue: (sortValue: string) => void;
};

export const useExpense = create(
  persist<ExpenseType>(
    (set, get) => ({
      expenses: [],
      sortValue: "",
      addExpense: (data) => {
        set((state) => ({ expenses: [...state.expenses, data] }));
        // toast.success("Expense Added!");
      },
      removeExpense: (id) => {
        set((state) => ({
          expenses: state.expenses.filter((expense) => expense.id !== id),
        }));
        toast.success("Expense Deleted!");
      },
      setSortValue: (sortValue) => set({ sortValue }),
    }),
    {
      name: "expenses",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
