import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useIncome } from "@/hooks/useIncome";

const schema = z.object({
  income: z.number({ required_error: "Income is required." }),
});

type SchemaType = z.infer<typeof schema>;

export const useIncomeForm = () => {
  const { income, setIncome } = useIncome();

  const form = useForm<SchemaType>({
    resolver: zodResolver(schema),
    defaultValues: { income } || { income: 0 },
  });

  const onSubmit = ({ income }: SchemaType) => setIncome(income);

  return { form, onSubmit, ...form };
};
