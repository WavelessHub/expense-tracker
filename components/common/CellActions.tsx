import { Button } from "@/components/ui/button";
import { useExpense } from "@/hooks/useExpense";

import { NextPage } from "next";

interface Props {
  expenseId: number;
}

const CellActions: NextPage<Props> = ({ expenseId }) => {
  const { removeExpense } = useExpense();

  return (
    <Button onClick={() => removeExpense(expenseId)} variant="destructive">
      DELETE
    </Button>
  );
};

export default CellActions;
