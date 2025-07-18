import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoSearchSharp } from "react-icons/io5";

function LocationSearch({ filters, setFilters }) {
  const [optionOpen, setoptionOpen] = useState(false);
  const [inputValue, setinputValue] = useState(" ");
  const handleLocationChange = (event) => {
    setFilters({
      ...filters,
      location: event.target.value, // Update location filter
    });
  };
  // we need to add useeffect to fetch data and apply search feature via location
  return (
    <div className="relative w-full">
      <div
        className=" flex items-center h-9 font-medium rounded-md p-2 w-full border border-solid border-gray-400 hover:bg-gray-200"
        onClick={() => setoptionOpen(!optionOpen)}
      >
        <div className="flex items-center gap-x-2 ">
          <span>
            <CiLocationOn />
          </span>
          <span>Location</span>
        </div>
      </div>
      {optionOpen ? (
        <div className="font-medium rounded-md p-2 w-full px-3 border border-solid border-gray-400 bg-white">
          <div className="flex items-center border-b  gap-x-2">
            <IoSearchSharp size={20} className="" />
            <input
              type="text"
              placeholder="Search loaction..."
              className="flex h-10 w-full rounded-md bg-transparent
         outline-none placeholder:text-slate-500"
         value={filters.location}
         onChange={handleLocationChange}
            />
          </div>
          <div className="w-full">
            <span className="py-6 text-center text-sm">No location found</span>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default LocationSearch;
