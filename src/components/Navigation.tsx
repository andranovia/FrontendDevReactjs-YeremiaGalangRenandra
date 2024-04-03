import React from "react";

const Navigation = () => {
  return (
    <div className="w-full lg:px-20 ">
      <div className="flex flex-col items-start text-primary">
        <div className="flex lg:flex-row flex-col lg:items-center items-start gap-4">
          <h1 className="text-lg font-semibold lg:text-nowrap">Filter by</h1>
          <div className="grid lg:grid-cols-4 grid-cols-2 items-start gap-4 w-full text-center">
            <div className="px-4 py-3  gap-2  rounded-lg flex justify-center items-center">
              <input
                id="link-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
              />
              <h2>Open now</h2>
            </div>
            <h2 className="py-3 w-full  border-[1px] border-primary rounded-lg">
              Price
            </h2>
            <h2 className="mt-4 lg:mt-0 py-3 col-span-2  border-[1px] border-primary rounded-lg">
              Category
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
