import React, { useState } from "react";
import { LuChevronsUpDown } from "react-icons/lu";

function Sorting({sortingState,setsortingState}) {
  const [optionOpen, setoptionOpen] = useState(false);
  const [orderValue, setorderValue] = useState('Recently Updated');
  
  return (
    <div className="relative">
      <div
        className=" flex items-center justify-between h-9 font-medium rounded-md p-2 w-44
     border border-solid border-gray-400"
        onClick={() => setoptionOpen(!optionOpen)}
      >
        <div className="flex items-center gap-x-2">
          <span>{sortingState}</span>
        </div>
        <div>
          <LuChevronsUpDown />
        </div>
      </div>
      {optionOpen ? (
        <div className="z-50 absolute top-10 font-medium rounded-md p-2 w-fit px-3 border border-solid border-gray-400 bg-white">
          <div className=" flex flex-col w-full">
            <span className="py-1 px-2 hover:bg-gray-200  text-sm whitespace-nowrap" onClick={()=>setsortingState('Price')}>
              Price
            </span>
            <span className="py-1  px-2 hover:bg-gray-200  text-sm whitespace-nowrap" onClick={()=>setsortingState('Recently Updated')}>
              Recently updated{" "}
            </span>
            <span className="py-1 px-2 hover:bg-gray-200 text-sm whitespace-nowrap" onClick={()=>setsortingState('Recently Added')}>
              Recently added
            </span>
            <span className="py-1 px-2 hover:bg-gray-200 text-sm whitespace-nowrap" onClick={()=>setsortingState('Recently Reduced')}>
              Recently reduced
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Sorting;
