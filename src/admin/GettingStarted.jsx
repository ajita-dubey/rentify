import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

function GettingStarted() {
  return (
    <section className="flex  justify-center items-center p-8  pt-20">
      <div className="flex   items-center p-5 w-[500px]  border rounded-md  border-zinc-300">
        <div className="flex flex-col w-full">
          <h1 className="font-bold text-xl ">Getting Started</h1>
          <p className="text-sm text-slate-500">
            Here is how you can earn with Rentify
          </p>
          <div className="flex gap-x-2  pt-2 items-center">
            <div className="flex   gap-x-2 ">
              <FaCircleCheck className="text-green-400" size={30} />
            </div>
            <div>
              <span className="font-bold text-md  text-center">
               Earn by introducing tenants
              </span>
              <p className="font-light text-sm">
                Head <span className="font-bold"> To rent </span> or<span className="font-bold"> For sale </span>
                in the menu to explore our listings.
              </p>
            </div>
          </div>
          <div className="flex gap-x-2  pt-3 items-center">
            <div className="flex   gap-x-2 ">
              <FaCircleCheck className="text-green-400" size={30} />
            </div>
            <div>
              <span className="font-bold text-md text-center">
               Let your own stock
              </span>
              <p className="font-light text-sm">
               Head to <span className="font-bold">Listings </span> to list a property.Free professional photography is included.
              </p>
            </div>
          </div>
          <div className="flex gap-x-2 pt-3  items-center">
            <div className="flex   gap-x-2 ">
              <FaCircleCheck className="text-green-400" size={30} />
            </div>
            <div>
              <span className="font-bold text-md  text-center">
              Earn by hosting viewings
              </span>
              <p className="font-light text-sm">
                Contact <span className="font-bold">agents@rentify.com</span> if you'd like to hosting viewings
                on behalf of Rentify.
              </p>
            </div>
          </div>
          <div className="flex gap-x-2 pt-3  pb-4 items-center">
            <div className="flex   gap-x-2 ">
              <FaCircleCheck className="text-green-400" size={30} />
            </div>
            <div>
              <span className="font-bold text-md  text-center">
               Bonus: boost commisson by checking in
              </span>
              <p className="font-light text-sm">
              Accure 7.43 every time you check in. Unlock the bonus by introducing a let or sale. 
              </p>
            </div>
          </div>

          <button className=" bg-orange-600 text-white rounded-lg outline-none p-2 text-sm ">
            Get started
          </button>
        </div>
      </div>
    </section>
  );
}

export default GettingStarted;
