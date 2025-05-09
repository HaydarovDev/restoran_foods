import React from "react";
import { BiSolidSend } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";

const Location = () => {
  return (
    <div className="w-full mt-5 p-4 hidden sm:hidden">
      <div className="w-full py-4 bg-[#EFEFEF] rounded-[8px] flex flex-col justify-center items-center">
        <h3 className="mb-3">Проверить адрес доставки</h3>
        <label
          htmlFor="search"
          className="w-[90%] justify-between flex items-center rounded-[50px] bg-white pl-3"
        >
          <CiLocationOn className="text-2xl" />
          <input
            type="text"
            placeholder="Адрес"
            className="outline-0 w-full ml-1"
            id="search"
          />
          <button className="bg-black text-white py-2 px-2 rounded-[50%] cursor-pointer">
            <BiSolidSend />
          </button>
        </label>
      </div>
    </div>
  );
};

export default Location;
