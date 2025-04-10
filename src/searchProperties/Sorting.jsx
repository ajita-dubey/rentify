import React, { useState } from "react";
import { LuChevronsUpDown } from "react-icons/lu";

function Sorting() {
  const [optionOpen, setoptionOpen] = useState(false);
  return (
    <div className="relative">
      <div
        className=" flex items-center justify-between h-9 font-medium rounded-md p-2 w-full 
     border border-solid border-gray-400"
        onClick={() => setoptionOpen(!optionOpen)}
      >
        <div className="flex items-center gap-x-2">
          <span>Recently updated</span>
        </div>
        <div>
          <LuChevronsUpDown />
        </div>
      </div>
      {optionOpen ? (
        <div className="font-medium rounded-md p-2 w-full px-3 border border-solid border-gray-400 bg-white">
          <div className=" flex flex-col w-full">
            <span className="py-1 px-2 hover:bg-gray-200  text-sm">
              Price
            </span>
            <span className="py-1  px-2 hover:bg-gray-200  text-sm">
              Recently updated{" "}
            </span>
            <span className="py-1 px-2 hover:bg-gray-200 text-sm">
              Recently added
            </span>
            <span className="py-1 px-2 hover:bg-gray-200 text-sm">
              Recently reduced
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Sorting;
