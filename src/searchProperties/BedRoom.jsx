import React, { useState } from "react";
import { IoBedOutline } from "react-icons/io5";
import { LuChevronsUpDown } from "react-icons/lu";

function BedRoom({ filters, setFilters }) {
  const [optionOpen, setoptionOpen] = useState(false);
  const [Max, setMax] = useState(false);
  const [Min, setMin] = useState(false);
  const [minValue, setminValue] = useState('Min');
  const [maxValue, setmaxValue] = useState('Max');
  const handleBedroomMinChange = (value) => {
    setFilters({
      ...filters,
      bedroomMin: value  });
  };
  const handleBedroomMaxChange = (value) => {
    setFilters({
      ...filters,
      bedroomMax: value  });
  };

  return (
    <div className="relative w-full">
      <div
        className=" flex items-center h-9 font-medium rounded-md p-2 w-full border border-solid border-gray-400 hover:bg-gray-200"
        onClick={() => setoptionOpen(!optionOpen)}
      >
        <div className="flex items-center gap-x-2">
          <span>
            <IoBedOutline />
          </span>
          <span>Bedroom</span>
        </div>
      </div>
      {optionOpen ? (
        <div className="z-50 absolute top-10 font-medium rounded-md p-2 w-full px-3 border border-solid border-gray-400 bg-white">
          <div className=" flex items-center  font-medium rounded-md p-2 pt-0 w-full">
            <div className="flex items-center gap-x-2">
              {/* <span ><IoBedOutline /></span> */}
              <span>Bedroom</span>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <div
              className=" relative flex items-center justify-between h-9 font-medium rounded-md p-2 w-full border border-solid border-gray-400"
              onClick={() => setMin(!Min)}
            >
              <div className="flex items-center gap-x-4 w-full">
                {/* <span ><IoBedOutline /></span> */}
                <span className="text-sm">{filters.bedroomMin ==='0' ? 'Room' : filters.bedroomMin}</span>
              </div>
              <div>
                <LuChevronsUpDown />
              </div>
             {Min? <div className="absolute top-10 font-medium rounded-md p-2 w-fit px-3 border border-solid border-gray-400 bg-white">
                <div className="flex flex-col w-full">
                  <span className="py-3 px-2 hover:bg-gray-200 text-sm rounded-md w-full whitespace-nowrap" 
                  onClick={()=>handleBedroomMinChange('0')}>Room</span>

                  <span className="py-3 px-2 hover:bg-gray-200 text-sm rounded-md w-full whitespace-nowrap"
                   onClick={()=>handleBedroomMinChange('1')}>1 Bedrooms</span>

                  <span className="py-3 px-2 hover:bg-gray-200 text-sm rounded-md w-full whitespace-nowrap"
                   onClick={()=>handleBedroomMinChange('2')}>2 Bedrooms</span>

                  <span className="py-3 px-2 hover:bg-gray-200 text-sm rounded-md w-full whitespace-nowrap"
                   onClick={()=>handleBedroomMinChange('3')}>3 Bedrooms</span>

                  <span className="py-3 px-2 hover:bg-gray-200 text-sm rounded-md w-full whitespace-nowrap"
                   onClick={()=>handleBedroomMinChange('4')}>4 Bedrooms</span>

                  <span className="py-3 px-2 hover:bg-gray-200 text-sm rounded-md w-full whitespace-nowrap"
                   onClick={()=>handleBedroomMinChange('5')}>5 Bedrooms</span>

               </div>
              </div>:null}
            </div>

            <div
              className="relative flex items-center justify-between h-9 font-medium rounded-md p-2 w-full border border-solid border-gray-400"
              onClick={() => setMax(!Max)}
            >
              <div className="flex items-center gap-x-4">
                {/* <span ><IoBedOutline /></span> */}
                <span className="text-sm">{filters.bedroomMax ==='0' ? 'Room' : filters.bedroomMax}</span>
              </div>
              <div>
                <LuChevronsUpDown />
              </div>
              {Max? <div className="absolute top-10 font-medium rounded-md p-2 w-fit px-3 border border-solid border-gray-400 bg-white">
                <div className="flex flex-col w-full">
                  <span className="py-3 px-2 hover:bg-gray-200 text-sm rounded-md w-full whitespace-nowrap" 
                 onClick={()=>handleBedroomMaxChange('0')}>Room</span>

                  <span className="py-3 px-2 hover:bg-gray-200 text-sm rounded-md w-full whitespace-nowrap" 
                   onClick={()=>handleBedroomMaxChange('1')}>1 Bedrooms</span>

                  <span className="py-3 px-2 hover:bg-gray-200 text-sm rounded-md w-full whitespace-nowrap" 
                  onClick={()=>handleBedroomMaxChange('2')}>2 Bedrooms</span>

                  <span className="py-3 px-2 hover:bg-gray-200 text-sm rounded-md w-full whitespace-nowrap" 
                   onClick={()=>handleBedroomMaxChange('3')}>3 Bedrooms</span>

                  <span className="py-3 px-2 hover:bg-gray-200 text-sm rounded-md w-full whitespace-nowrap" 
                   onClick={()=>handleBedroomMaxChange('4')}>4 Bedrooms</span>

                  <span className="py-3 px-2 hover:bg-gray-200 text-sm rounded-md w-full whitespace-nowrap"
                  onClick={()=>handleBedroomMaxChange('5')}>5 Bedrooms</span>

               </div>
              </div>:null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default BedRoom;
