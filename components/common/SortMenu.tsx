import { NextPage } from "next";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { categories } from "../forms/constants/categories";
import { useExpense } from "@/hooks/useExpense";

interface Props {}

const SortMenu: NextPage<Props> = ({}) => {
  const { setSortValue } = useExpense();

  return (
    <Select
      onValueChange={(e) => setSortValue(e === "All Categories" ? "" : e)}
    >
      <SelectTrigger className="w-[250px] h-12 px-4">
        <SelectValue placeholder="All Categories" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="All Categories">All Categories</SelectItem>
        {categories.map((category) => (
          <SelectItem key={category} value={category}>
            {category}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SortMenu;
