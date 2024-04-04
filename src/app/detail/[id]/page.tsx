"use client";

import RestaurantDetailInfo from "@/components/RestaurantDetailInfo";
import { RestaurantItem } from "@/hooks/useRestaurant";
import { getRestaurantDetail } from "@/utils/getRestaurant";
import { useQuery } from "@tanstack/react-query";
import React from "react";

type RestaurantDetailProps = {
  params: { id: string };
};

const RestaurantDetail = ({ params }: RestaurantDetailProps) => {
  const { data: restaurantsDetail, isLoading: restaurantsDetailLoading } =
    useQuery<RestaurantItem>({
      queryKey: ["restaurantItem"],
      queryFn: () => getRestaurantDetail(params.id),
    });

  return (
    <div>
      <RestaurantDetailInfo restaurantsDetail={restaurantsDetail} />
    </div>
  );
};

export default RestaurantDetail;
