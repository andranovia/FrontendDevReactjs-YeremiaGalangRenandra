import Image from "next/image";
import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaStar } from "react-icons/fa";
import RestaurantDetailMap from "./RestaurantDetailMap";
import { RestaurantItem } from "@/hooks/useRestaurant";

type RestaurantDetailInfoProps = {
  restaurantsDetail: RestaurantItem;
};

const RestaurantDetailInfo = ({
  restaurantsDetail,
}: RestaurantDetailInfoProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleChangeImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div
      key={restaurantsDetail?.id}
      className="w-full  flex justify-center items-center lg:justify-start lg:flex-row flex-col p-4 text-primary"
    >
      <div className="flex lg:flex-row flex-col lg:justify-start justify-center lg:w-3/4 lg:gap-20 mt-16 lg:mt-20">
        <div className="lg:w-[40%] left-[10%] top-0  overflow-hidden lg:fixed lg:p-10 lg:mt-20">
          <Image
            src={restaurantsDetail?.img[currentImageIndex]}
            alt="restaurant-img"
            width={400}
            height={400}
            className="rounded-md w-full h-[15rem] lg:h-[20rem]"
          />
          <div className="grid grid-cols-4 gap-4 mt-4">
            {restaurantsDetail?.img.map((image, index) => (
              <React.Fragment key={index}>
                <div
                  className="cursor-pointer"
                  onClick={() => handleChangeImage(index)}
                >
                  <Image
                    src={image}
                    alt="restaurant-img"
                    width={400}
                    height={400}
                    className="rounded-md w-full h-full"
                  />
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="relative flex flex-col items-start gap-4 lg:my-10 my-4 lg:left-[70%] px-2 lg:px-0">
          <h1 className="text-4xl lg:text-5xl font-semibold">
            {restaurantsDetail?.title}
          </h1>
          <div className="justify-center flex items-center px gap-2">
            <FaStar size={15} color="yellow" />
            <span className="text-sm">{restaurantsDetail?.average_rating}</span>
            <span className="text-sm">
              ({restaurantsDetail?.ratings.length} Rating)
            </span>
          </div>
          <div className="flex justify-center items-center gap-2  my-2">
            <h3 className="text-2xl lg:text-lg uppercase font-light">
              {restaurantsDetail?.open ? "Open now" : "Closed"}
            </h3>
            <div
              className={`rounded-full ${
                restaurantsDetail?.open ? "bg-green-400 " : "bg-red-400"
              }  h-2 w-2`}
            ></div>
          </div>
          <div className="flex justify-center lg:flex-col lg:items-start items-center gap-4 lg:gap-2">
            <h2 className="font-light text-2xl text-gray-600">Price</h2>
            <span className="text-4xl"> {restaurantsDetail?.price} </span>
          </div>
          <div className="flex flex-col justify-start items-start gap-6 my-4">
            <h2 className="text-2xl font-light text-gray-600">Category</h2>
            <div className="grid lg:grid-cols-3 grid-cols-3  gap-4 justify-center items-center text-center">
              {restaurantsDetail?.categories.map((category, index) => (
                <React.Fragment key={index}>
                  <div className="border-primary border-2 text-primary  w-full px-4 py-1 rounded-md">
                    <span className="text-xs lg:text-md">{category.name}</span>
                  </div>
                </React.Fragment>
              ))}
            </div>
            <div className="flex flex-col items-start gap-4 my-4">
              <h2 className="text-2xl font-light text-gray-600">Rating</h2>
              <div className="grid grid-cols-2 items-start justify-start gap-4">
                {restaurantsDetail?.ratings.map((rating, index) => (
                  <React.Fragment key={index}>
                    <div className="bg-slate-100 h-full text-primary px-2 py-2 rounded-md grid justify-center items-start gap-4">
                      <div className="flex justify-start items-center gap-2">
                        <CgProfile />
                        <span>{rating.user_name}</span>
                      </div>
                      <div className="flex justify-start items-center">
                        {[...Array(rating.rating)].map((_, index) => (
                          <FaStar key={index} size={15} color="yellow" />
                        ))}
                        {[...Array(5 - rating.rating)].map((_, index) => (
                          <FaStar key={index + 4} size={15} color="grey" />
                        ))}
                      </div>
                      <p className="font-normal text-sm lg:w-[12rem]">
                        {rating.rating_text}
                      </p>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full flex justify-start flex-col items-start gap-4">
            <h2 className="text-2xl font-light text-gray-600">Location</h2>
            <RestaurantDetailMap mapPosition={restaurantsDetail?.positions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetailInfo;
