import React, { useEffect, useState } from "react";
import { FaBatteryFull, FaSignal, FaWifi } from "react-icons/fa6";

const Header = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setTimeout(() => {
      setDate(new Date());
    }, 1000);

    return () => clearTimeout(interval);
  }, []);

  return (
    <div className="flex justify-between p-5 pt-3 pb-4 sm:hidden">
      <h4>{`${date.getHours()}:${date.getMinutes()}`}</h4>
      <div className="flex gap-1">
        <FaSignal />
        <FaWifi />
        <FaBatteryFull />
      </div>
    </div>
  );
};

export default Header;
