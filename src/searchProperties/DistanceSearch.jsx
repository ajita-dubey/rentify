import React, { useState } from "react";
import { GiPathDistance } from "react-icons/gi";
import { LuChevronsUpDown } from "react-icons/lu";

function DistanceSearch({ filters, setFilters }) {
  const [optionOpen, setoptionOpen] = useState(false);
  const [distanceValue, setdistanceValue] = useState('0km');
  const handleDistanceChange = (value) => {
    setFilters({
      ...filters,
      distance: value  });
  };
  return (
    <div className="relative w-full">
      <div
        className=" flex items-center justify-between h-9 font-medium rounded-md p-2 w-full border 
        border-solid border-gray-400 hover:bg-gray-200"
        onClick={() => setoptionOpen(!optionOpen)}
      >
        <div className="flex items-center gap-x-2">
          <span>
            <GiPathDistance />
          </span>
          <span onClick={()=>handleDistanceChange('0 km')}>{filters.distance}</span>
        </div>
        <div>
          <LuChevronsUpDown />
        </div>
      </div>
      {optionOpen ? (
        <div className=" z-50 absolute top-10 font-medium rounded-md p-2 w-full px-3 border border-solid border-gray-400 bg-white">
          <div className=" flex flex-col w-full">
            <span className="py-3 px-2 hover:bg-gray-200 text-center text-sm rounded-md" onClick={()=>handleDistanceChange('5 km')}>
              5 km{" "}
            </span>
            <span className="py-3  px-2 hover:bg-gray-200  text-center text-sm rounded-md" onClick={()=>handleDistanceChange('10 km')}>
              10 km{" "}
            </span>
            <span className="py-3 px-2 hover:bg-gray-200 text-center text-sm rounded-md" onClick={()=>handleDistanceChange('15 km')}>
              15 km{" "}
            </span>
            <span className="py-3 px-2 hover:bg-gray-200 text-center text-sm rounded-md" onClick={()=>handleDistanceChange('20 km')}>
              20 km{" "}
            </span>
            <span className="py-3  px-2 hover:bg-gray-200   text-center text-sm rounded-md" onClick={()=>handleDistanceChange('25 km')}>
              25 km{" "}
            </span>
            <span className="py-3  px-2 hover:bg-gray-200 text-center text-sm rounded-md" onClick={()=>handleDistanceChange('30 km')}>
              30 km{" "}
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default DistanceSearch;
