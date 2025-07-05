import React from "react";
import { IoMdCheckbox } from "react-icons/io";

function LettingProtect() {
  return (
    <section className=" flex  flex-col items-center justify-center  md:p-8  md:pt-12 relative m-auto w-full max-w-[1265px] p-4">
      <div className="flex md:flex-row flex-col items-center gap-x-10 pb-6">
        <div className=" flex  justify-center gap-y-5  h-full md:w-1/2">
          <div>
            <h1 className="font-semibold text-4xl pb-6 md:text-left text-center">
              Lettings Protect-peace of mind for you and your landlord
            </h1>
            <p className="font-light md:pb-8 pb-3 md:text-left text-center">Provide your landlord with a fast and seamless letting
               plusmarket-leading protection</p>
                <div className="flex items-center gap-2 py-1">
              <IoMdCheckbox size={20}  className="text-orange-600"/>
              <p className="font-light text-sm">
                Full tenant find and tenancy progression service
              </p>
            </div>
            <div className="flex items-center gap-2 py-1">
              <IoMdCheckbox size={20}  className="text-orange-600"/>
              <p className="font-light text-sm">
                Let faster via demand of 3,000+ agents
              </p>
            </div>
            <div className="flex items-center gap-2 py-1">
              <IoMdCheckbox size={20} className="text-orange-600" />
              <p className="font-light text-sm">
                Up to 12 months rent cover and 100K in legal eviction cover
              </p>
            </div>
            <div className="flex items-center gap-2 py- 1 pb-5">
              <IoMdCheckbox size={20} className="text-orange-600" />
              <p className="font-light text-sm">
                Backing provided by a top tier insurer
              </p>
            </div>
            <p className="font-light md:pt-8 pt-3">Subject to T&Cs</p>
          </div>
        </div>
        <div className="md:w-1/2 md:block hidden">
          <img src="src/assets/group-img.png" className="rounded-lg" />
        </div>
      </div>
      <button className=" bg-orange-600 text-white rounded-lg outline-none  p-3 mt-8 hover:bg-orange-500 ">
        Get started in minutes
      </button>
    </section>
  );
}

export default LettingProtect;
