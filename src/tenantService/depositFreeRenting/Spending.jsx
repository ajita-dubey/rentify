import React from "react";
import SpendLess from "./SpendLess";
import DoesRentify from "./DoesRentify";
import DepositFreeRentFaq from "./DepositFreeRentFaq";

function Spending() {
  return (
    <>
      <section className=" flex items-center justify-center md:p-8  md:pt-12 m-auto w-full max-w-[1265px] p-4">
        <div className="flex  items-center  h-full md:flex-row flex-col">
          <div className=" flex flex-col justify-center gap-y-5  p-5 h-full md:w-1/2">
            <div>
              <p className="text-green-700 md:text-left  pb-6  text-center">
                Rentify Deposit Free{" "}
              </p>
              <h1 className="font-semibold text-4xl text-center pb-6 md:text-left md:text-5xl leading-tight">
                Spend 35% less when moving in
              </h1>

              <p className="font-light pb-8 md:text-left">
                Rentify pays your security deposit for a simple, affordable fee.
              </p>
              <div className="flex flex-col md:flex-row gap-y-2 w-full md:w-auto">
                <button className=" bg-orange-600 text-white rounded-lg outline-none  p-2 w-full hover:bg-orange-500 hover:cursor-pointer">
                  Unlock existing deposit
                </button>
                <button className=" text-orange-600 border border-orange-600 rounded-lg outline-none w-full p-2 md:ml-3
                 hover:bg-orange-500 hover:text-white ">
                  Search properties
                </button>
              </div>
            </div>
          </div>
          <div className=" pt-10 md:w-1/2">
            <img src="src/assets/banner.jpg" className="rounded-lg" />
          </div>
        </div>
      </section>
      <SpendLess />
      <DoesRentify />
      <DepositFreeRentFaq />
    </>
  );
}

export default Spending;
