import React, { useState } from "react";
import { IoBedOutline } from "react-icons/io5";
import { LuChevronsUpDown } from "react-icons/lu";
import { MdOutlineBathtub } from "react-icons/md";

function BathRoom({ filters, setFilters }) {
  const [optionOpen, setoptionOpen] = useState(false);
  const [Max, setMax] = useState(false);
  const [Min, setMin] = useState(false);
   const [minValue, setminValue] = useState('Min');
    const [maxValue, setmaxValue] = useState('Max');
    const handleBathroomMinChange = (value) => {
      setFilters({
        ...filters,
        bathroomMin: value  });
    };
    const handleBathroomMaxChange = (value) => {
      setFilters({
        ...filters,
        bathroomMax: value  });
    };
  return (
    <div className="relative w-full">
      <div
        className=" flex items-center h-9 font-medium rounded-md p-2 w-full border border-solid border-gray-400 hover:bg-gray-200"
        onClick={() => setoptionOpen(!optionOpen)}
      >
        <div className="flex items-center gap-x-2">
          <span>
          <MdOutlineBathtub />
          </span>
          <span>Bathroom</span>
        </div>
      </div>
      {optionOpen ? (
        <div className="z-50 absolute top-10 font-medium rounded-md p-2 w-full px-3 border border-solid border-gray-400 bg-white">
          <div className=" flex items-center  font-medium rounded-md p-2 pt-0 w-full">
            <div className="flex items-center gap-x-2">
              {/* <span ><IoBedOutline /></span> */}
              <span>Bathroom</span>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <div
              className=" relative flex items-center justify-between h-9 font-medium rounded-md p-2 w-full border border-solid border-gray-400"
              onClick={() => setMin(!Min)}
            >
              <div className="flex items-center gap-x-4 w-full">
                {/* <span ><IoBedOutline /></span> */}
                <span className="text-sm">
                  {filters.bathroomMin === "0" ? "No min" : filters.bathroomMin}
                </span>
              </div>
              <div>
                <LuChevronsUpDown />
              </div>
              {Min ? (
                <div className="absolute top-10 font-medium rounded-md p-2 w-fit px-3 border border-solid border-gray-400 bg-white">
                  <div className="flex flex-col w-full">
                    <span
                      className="py-3 px-2 hover:bg-gray-200 text-sm rounded-md w-full whitespace-nowrap"
                      onClick={()=>handleBathroomMinChange('0')}
                    >
                      No min
                    </span>
                    <span
                      className="py-3 px-2 hover:bg-gray-200 text-sm rounded-md w-full whitespace-nowrap"
                      onClick={()=>handleBathroomMinChange('1')}
                    >
                      1 
                    </span>
                    <span
                      className="py-3 px-2 hover:bg-gray-200 text-sm rounded-md w-full whitespace-nowrap"
                      onClick={()=>handleBathroomMinChange('2')}
                    >
                      2 
                    </span>
                    <span
                      className="py-3 px-2 hover:bg-gray-200 text-sm rounded-md w-full whitespace-nowrap"
                      onClick={()=>handleBathroomMinChange('3')}
                    >
                      3 
                    </span>
                    <span
                      className="py-3 px-2 hover:bg-gray-200 text-sm rounded-md w-full whitespace-nowrap"
                      onClick={()=>handleBathroomMinChange('4')}
                    >
                      4 
                    </span>
                    <span
                      className="py-3 px-2 hover:bg-gray-200 text-sm rounded-md w-full whitespace-nowrap"
                      onClick={()=>handleBathroomMinChange('5')}
                    >
                      5 
                    </span>
                  </div>
                </div>
              ) : null}
            </div>

            <div
              className="relative flex items-center justify-between h-9 font-medium rounded-md p-2 w-full border border-solid border-gray-400"
              onClick={() => setMax(!Max)}
            >
              <div className="flex items-center gap-x-4">
                {/* <span ><IoBedOutline /></span> */}
                <span className="text-sm">
                  {filters.bathroomMax === "0" ? "No max" : filters.bathroomMax }
                </span>
              </div>
              <div>
                <LuChevronsUpDown />
              </div>
              {Max ? (
                <div className="absolute top-10 font-medium rounded-md p-2 w-fit px-3 border border-solid border-gray-400 bg-white">
                  <div className="flex flex-col w-full">
                    <span
                      className="py-3 px-2 hover:bg-gray-200 text-sm rounded-md w-full whitespace-nowrap"
                      onClick={()=>handleBathroomMaxChange('0')}
                    >
                      No max
                    </span>
                    <span
                      className="py-3 px-2 hover:bg-gray-200 text-sm rounded-md w-full whitespace-nowrap"
                      onClick={()=>handleBathroomMaxChange('1')}
                    >
                      1 
                    </span>
                    <span
                      className="py-3 px-2 hover:bg-gray-200 text-sm rounded-md w-full whitespace-nowrap"
                      onClick={()=>handleBathroomMaxChange('2')}
                    >
                      2 
                    </span>
                    <span
                      className="py-3 px-2 hover:bg-gray-200 text-sm rounded-md w-full whitespace-nowrap"
                      onClick={()=>handleBathroomMaxChange('3')}
                    >
                      3 
                    </span>
                    <span
                      className="py-3 px-2 hover:bg-gray-200 text-sm rounded-md w-full whitespace-nowrap"
                      onClick={()=>handleBathroomMaxChange('4')}
                    >
                      4 
                    </span>
                    <span
                      className="py-3 px-2 hover:bg-gray-200 text-sm rounded-md w-full whitespace-nowrap"
                      onClick={()=>handleBathroomMaxChange('5')}                    >
                      5
                    </span>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default BathRoom;
