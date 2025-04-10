import React from "react";

function DoesRentify() {
  return (
    <section className="flex items-center justify-center  md:p-8  md:pt-12 relative m-auto w-full max-w-[1265px] p-4">
      <div className="flex flex-col items-center  ">
        <h1 className="font-semibold pt-3 pb-7  max-w-[20ch] text-center text-4xl"> How does Rentify Deposit Free work?</h1>
        <p className="font-light text-center">
          Lower your move-in costs with a low, affordable fee instead of paying
          a security deposit upfront.</p>
        <div className="m-auto mt-20 grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className=" flex flex-col items-center ">
            <div className=" flex items-center justify-center border-2 bg-gray-100 border-black rounded-full h-20 w-20">
              <span className="font-bold text-4xl">1</span>
            </div>
            <h1 className=" font-bold text-lg pt-3 pb-2 text-center">
              Request Deposit Free for your offer or tenancy
            </h1>
            <p className="font-light text-center">
              Choose Deposit Free when making an offer or
              to unlock your existing deposit. </p>
           
          </div>
          <div className=" flex flex-col items-center   ">
            <div className=" flex items-center justify-center border-2 bg-gray-100 border-black rounded-full h-20 w-20">
              <span className="font-bold text-4xl">2</span>
            </div>
            <h1 className=" font-bold text-lg pt-3 pb-2 text-center">
            Rentify pays the security  deposit</h1>
          <p className="font-light  text-center">
          We pay your deposit so your landlord stays  protected.</p>
          </div>
          <div className=" flex flex-col items-center ">
            <div className=" flex items-center justify-center border-2 bg-gray-100 border-black rounded-full h-20 w-20">
              <span className=" font-bold text-4xl">3</span>
            </div>
            <h1 className=" font-bold text-lg pt-3 pb-2 text-center">
            Pay a low, affordable fee instead of the deposit
            </h1>
          <p className="font-light text-center">
            You pay Rentify a fee for paying the deposit on your behalf.
            </p>
          </div>
          <div className=" flex flex-col items-center  ">
            <div className=" flex items-center justify-center border-2 bg-gray-100 border-black rounded-full h-20 w-20">
              <span className="font-bold text-4xl">4</span>
            </div>
            <h1 className=" font-bold text-lg pt-3 pb-2 text-center">
            At end of tenancy, return the deposit to Rentify </h1>
          <p className="font-light text-center">
          Once your landlord refunds the deposit, simply repay Rentify. You remain responsible for most deductions. </p>
            </div>
        </div>
      </div>
    </section>
  );
}

export default DoesRentify;
