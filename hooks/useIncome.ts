import { createJSONStorage, persist } from "zustand/middleware";
import { create } from "zustand";

import { toast } from "react-hot-toast";

interface IncomeType {
  income: number;
  setIncome: (income: number) => void;
}

export const useIncome = create(
  persist<IncomeType>(
    (set, get) => ({
      income: 0,
      setIncome: (income) => {
        set({ income });
        toast.success("Income Edited Successfully.");
      },
    }),
    {
      name: "income",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
