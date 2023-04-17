import React from "react";
import { BsChevronRight } from "react-icons/bs";

const DashboardCard = ({ icon, title, value, hidden = true }) => {
  return (
    <div
      className={
        hidden
          ? "hidden gap-3 lg:flex lg:bg-secondary-bg lg:flex-row-reverse lg:h-[103px] lg:rounded-3xl lg:w-[351px] lg:justify-around lg:items-center   lg:shadow-md lg:cursor-pointer"
          : "gap-3 flex lg:bg-secondary-bg lg:flex-row-reverse lg:h-[103px] lg:w-[351px] lg:rounded-[26px] lg:justify-around lg:items-center   lg:shadow-md lg:cursor-pointer"
      }
    >
      {icon}
      <div className="flex flex-col lg:gap-1">
        <p className="text-primary-text text-sm lg:text-base lg:flex lg:items-center lg:gap-2">
          {title} <BsChevronRight className="hidden text-xs mt-1 lg:block" />
        </p>
        {value}
      </div>
    </div>
  );
};

export default DashboardCard;
