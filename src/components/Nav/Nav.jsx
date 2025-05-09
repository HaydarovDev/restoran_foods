import React, { useState } from "react";
import pizzaImg from "../../assets/img/Group 2.png";

const Nav = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <nav className="p-4 flex items-center justify-between border-b border-[#E2E2E2] sm:hidden">
        <div className="flex">
          <img src={pizzaImg} alt="" />
          <p className="text-2xl ml-2">Куда пицца</p>
        </div>
        <button
          className="flex flex-col gap-1 cursor-pointer p-2"
          onClick={() => setActive(!active)}
        >
          <span
            className={`block w-[20px] rounded h-[2px] transition-all bg-black duration-100 ${
              active ? "rotate-45 translate-y-[6px]" : ""
            }`}
          ></span>
          <span
            className={`block w-[20px] rounded h-[2px] transition-all bg-black duration-100 ${
              active ? "opacity-1 -translate-x-3" : ""
            }`}
          ></span>
          <span
            className={`block w-[20px] rounded duration-100 h-[2px] transition-all bg-black ${
              active ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          ></span>
        </button>
      </nav>
    </>
  );
};

export default Nav;
