import getRestaurant from "@/utils/getRestaurant";
import { useQuery } from "@tanstack/react-query";

type Restaurants = {
  id: number;
  title: string;
  img: string;
  rating: number;
  open: boolean;
  price: string;
  categories: {
    id: number;
    name: string;
  }[];
}[];

export function useRestaurant() {
  const { data: restaurants, isLoading } = useQuery<Restaurants>({
    queryKey: ["restaurant"],
    queryFn: () => getRestaurant(),
  });

  return { restaurants, isLoading };
}
