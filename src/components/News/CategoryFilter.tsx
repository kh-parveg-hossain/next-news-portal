"use client"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CategoryFilterProps {
  onCategory: (category: string) => void;
}

const CategoryFilter = ({ onCategory }: CategoryFilterProps) => {
    const categories = ["all","tech","health","sports","business"];
  return (
    <div className="flex gap-2 items-center justify-center mx-4">
      <h3 className="font-bold text-lg mb-2 flex-shrink-0">Filter by Category:</h3>
      <Select onValueChange={(value) => onCategory(value ==='all' ? '' : value)}>
        <SelectTrigger className="w-[180px] capitalize">
          <SelectValue placeholder="Select Category" />
        </SelectTrigger>
        <SelectContent>
            {
                categories.map((category) => (
                    <SelectItem key={category} value={category} className="capitalize" >{category}</SelectItem>
                ))
            }
          
        </SelectContent>
      </Select>
    </div>
  );
};

export default CategoryFilter;
