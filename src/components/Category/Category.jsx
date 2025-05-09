import React from "react";
import { categories } from "../../data/categories";

const Category = () => {
  return (
    <div className="flex w-full overflow-x-scroll scrollbar-small gap-3 items-center p-3 sm:hidden">
      {categories.map((value) => {
        return (
          <div
            key={value.name}
            className="flex min-w-[100px] p-1 justify-center items-center gap-2 cursor-pointer border border-[#C4C4C4] rounded"
          >
            <img className="w-[20px] h-[20px]" src={value.image} alt="" />
            <p className="whitespace-nowrap">{value.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
