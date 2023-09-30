import { NextPage } from "next";
import { TableRow, TableCell } from "../ui/table";
import { useExpense } from "@/hooks/useExpense";
import { useIncome } from "@/hooks/useIncome";
import { Badge } from "../ui/badge";

interface Props {}

const AmountRow: NextPage<Props> = ({}) => {
  const { expenses } = useExpense();
  const { income } = useIncome();

  const totalAmount = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  const savings = income - totalAmount;

  const checkDebt = () => {
    if (savings < 0) {
      return <Badge variant="destructive">DEBT ALERT</Badge>;
    } else if (savings > 0 && savings < income * (10 / 100)) {
      return <Badge className="bg-orange-500">START SAVING</Badge>;
    } else {
      return <Badge className="bg-green-500">NO DEBT</Badge>;
    }
  };

  return (
    <TableRow>
      <TableCell className="text-bold">Total:</TableCell>
      <TableCell>${totalAmount}</TableCell>

      <TableCell className="text-bold">Savings:</TableCell>
      <TableCell className="flex items-center justify-between">
        ${savings}
        {checkDebt()}
      </TableCell>
    </TableRow>
  );
};

export default AmountRow;
