import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";

type RestaurantCardProps = {
  restaurantData: {
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
  };
};

const ratingFn = (rating: number) => {
  const roundedRating = Math.round(rating);

  return roundedRating;
};

const RestaurantCard = ({ restaurantData }: RestaurantCardProps) => {
  const rating = ratingFn(restaurantData.rating);
  const firstCategory = restaurantData.categories[1];

  return (
    <>
      <div className="flex flex-col items-start rounded-lg bg-white shadow-sm  pb-2   ">
        <Image
          src={
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt=""
          width={200}
          height={200}
          className="rounded-t-lg lg:w-[18rem]"
        />
        <div className="flex flex-col items-start gap-2 mt-2 w-full px-2">
          <h1 className="text-sm lg:text-xl">{restaurantData.title}</h1>
          <div className="flex justify-center items-center">
            {[...Array(rating)].map((_, index) => (
              <FaStar key={index} size={15} color="yellow" />
            ))}
            {[...Array(5 - rating)].map((_, index) => (
              <FaStar key={index + rating} size={15} color="grey" />
            ))}
          </div>
          <div className="flex justify-between w-full mt-2 items-center pr-2">
            <h1 className="text-xs opacity-80">
              {firstCategory.name} - {restaurantData.price}
            </h1>
            <div className="flex justify-center items-center gap-2">
              <h3 className="text-xs hidden lg:block uppercase font-light">
                {restaurantData.open ? "Open Now" : "Closed"}
              </h3>
              <div
                className={`rounded-full ${
                  restaurantData.open ? "bg-green-400" : "bg-red-400"
                }  h-2 w-2`}
              ></div>
            </div>
          </div>
        </div>
        <div className="w-full px-2  text-center ">
          <Link href={`/detail/${restaurantData.id}`}>
            <h1 className="text-white  bg-primary py-1 lg:py-2 rounded-sm mt-2">
              Learn More
            </h1>
          </Link>
        </div>
      </div>
    </>
  );
};

export default RestaurantCard;
