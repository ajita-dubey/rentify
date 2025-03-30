import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { GrShieldSecurity } from "react-icons/gr";

function NewListing() {
  return (
    <section className="flex items-center justify-center p-8 pt-12">
      <div className="flex flex-col items-center ">
        <div className="flex  pt-5 gap-5 rounded-lg pb-20">
          <div className="border p-5">
            <AiOutlineHome size={25} />

            <h1 className="text-2xl pt-1 pb-5">
              Thousands of new listings per year
            </h1>
            <p className="font-light">
              Get access to India's largest portfolio of fee-paying{" "}
            </p>
            <p className="font-light">splits in both lettings and sales.</p>
          </div>

          <div className="border p-5">
            <GrShieldSecurity size={25} />

            <h1 className="text-2xl pt-1">Each commission is secure and </h1>
            <h1 className="text-2xl pb-5">guaranteed </h1>
            <p className="font-light">
              See exactly what you are going to earn before each
            </p>
            <p className="font-light ">
              deal-guaranteed.Track your earnings on a live
            </p>
            <p className="font-light ">dashboard</p>
          </div>

          <div className="border p-5">
            <IoSettingsOutline size={25} />

            <h1 className="text-2xl  pt-1 pb-5">
              Tools to help you transact more
            </h1>
            <p className="font-light">
              From viewings to paperwork and guarantor services.
            </p>
            <p className="font-light">
              we provide everything you need to close more deals.
            </p>
          </div>
        </div>

        <button className=" bg-red-700 text-white rounded-lg outline-none p-3 ml-3  ">
          {" "}
          Get started in minutes
        </button>
      </div>
    </section>
  );
}

export default NewListing;
