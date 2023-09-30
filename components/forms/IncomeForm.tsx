import { NextPage } from "next";
import { useIncomeForm } from "./hooks/useIncomeForm";
import { Input } from "@/components/ui/input";
import { Form } from "@/components/ui/form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "../ui/button";

interface Props {}

const IncomeForm: NextPage<Props> = ({}) => {
  const { form, onSubmit, control, handleSubmit } = useIncomeForm();

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[420px] space-y-6 mb-6"
      >
        <FormField
          name="income"
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Personal Income
                <span className="text-gray-400 ml-3">
                  ( Handle Personal Data With Care )
                </span>
              </FormLabel>

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

        <Button type="submit" className="bg-blue-500 hover:bg-blue-600">
          Edit Income
        </Button>
      </form>
    </Form>
  );
};

export default IncomeForm;
