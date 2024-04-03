import getCategory from "@/utils/getCategory";
import { useQuery } from "@tanstack/react-query";

type Categories = {
  id: number;
  name: string;
}[];

export function useCategory() {
  const { data: categories, isLoading } = useQuery<Categories>({
    queryKey: ["category"],
    queryFn: () => getCategory(),
  });

  return { categories, isLoading };
}
