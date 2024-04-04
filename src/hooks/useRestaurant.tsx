import getRestaurant from "@/utils/getRestaurant";
import { useQuery } from "@tanstack/react-query";

export type RestaurantItem = {
  id: number;
  title: string;
  img: string[];
  rating: number;
  open: boolean;
  price: string;
  categories: {
    id: number;
    name: string;
  }[];
  ratings: {
    id: number;
    restaurant_id: number;
    user_id: number;
    user_name: string;
    rating: number;
    rating_text: string;
  }[];
  positions: {
    latitude: number;
    longitude: number;
  };
  average_rating: number;
};

type Restaurants = RestaurantItem[];

export function useRestaurant() {
  const { data: restaurants, isLoading } = useQuery<Restaurants>({
    queryKey: ["restaurant"],
    queryFn: () => getRestaurant(),
  });
  console.log(restaurants);

  return { restaurants, isLoading };
}
