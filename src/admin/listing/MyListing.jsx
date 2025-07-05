import React from "react";
import { FaUpload } from "react-icons/fa6";
import { MdPending } from "react-icons/md";

function MyListing() {
  return (
    <section className="flex pt-11  w-full md:p-8 p-4 ">
      <div className="flex flex-col w-full">
        <h1 className="font-bold text-xl">Listing properties</h1>
        <div className="flex items-center justify-between p-4 gap-x-2">
          <div className="flex ">
            <button className=" flex gap-x-2 items-center rounded-md text-orange-500 border border-orange-500 p-2 ">
            <FaUpload />
             <span className="md:text-base text-xs">Add listing</span> 
            </button>
            <span></span>
          </div>
          <div className=" flex gap-x-2 items-center">
            <div class="flex">
              <button
                class="text-base  rounded-r-none  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-gray-200  bg-gray-100 text-gray-700 border duration-200 ease-in-out 
              border-gray-600 transition"
              >
                <div class="flex leading-5 md:text-base text-xs">Rental</div>
              </button>
              <button
                class="text-base  rounded-l-none border-l-0  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-gray-200 text-gray-700  border duration-200 ease-in-out 
                  border-gray-600 transition"
              >
                <div class="flex leading-5 md:text-base text-xs">Sale</div>
              </button>
            </div>
            <div>
            <button className=" flex items-center  gap-x-2 rounded-md text-gray-700 border border-gray-600 px-4 py-2">
            <MdPending />
            <span className="md:text-base text-xs">Show pending</span>
            </button>
            </div>

          </div>
        </div>
        <div>
          <div className="flex  flex-col items-center justify-center pt-12">
            <h1 className="text-center font-bold text-xl pb-4">
              {" "}
              It looks like there are no listings to show!
            </h1>
            <button className=" flex gap-x-2 items-center rounded-md text-orange-500 border border-orange-500 p-2 ">
            <FaUpload />
             <span> Add listings</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyListing;
