import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { GrShieldSecurity } from "react-icons/gr";

function NewListing() {
  return (
    <section className="flex items-center justify-center md:p-8  md:pt-12 relative m-auto w-full max-w-[1265px] p-4">
      <div className="flex flex-col items-center ">
        <div className="flex md:flex-row flex-col pt-5 gap-5 rounded-lg pb-20">
          <div className="border p-4 shadow-md rounded-md border-gray-300 max-w-[350px]">
            <AiOutlineHome size={25} />
           <h1 className="text-2xl pt-1 pb-5">
              Thousands of new listings per year
            </h1>
            <p className="font-light">
              Get access to India's largest portfolio of fee-paying splits in both lettings and sales.{" "}
            </p>
          </div>
        <div className="border p-4 shadow-md rounded-md border-gray-300  max-w-[350px]">
            <GrShieldSecurity size={25} />
           <h1 className="text-2xl pt-1 pb-5">Each commission is secure and guaranteed</h1>
            <p className="font-light">
              See exactly what you are going to earn before each
              deal-guaranteed.Track your earnings on a live dashboard.
            </p>
          </div>
         <div className="border p-4 shadow-md rounded-md border-gray-300  max-w-[350px]">
            <IoSettingsOutline size={25} />
           <h1 className="text-2xl  pt-1 pb-5">
              Tools to help you transact more
            </h1>
            <p className="font-light">
              From viewings to paperwork and guarantor services.
              we provide everything you need to close more deals.
            </p>
           
          </div>
        </div>
       <button className=" bg-orange-600 text-white rounded-lg outline-none p-3 ml-3 hover:bg-orange-500 ">
          {" "}
          Get started in minutes
        </button>
      </div>
    </section>
  );
}

export default NewListing;
