import React from "react";

function PaymentOption() {
  return (
    <section className="flex items-center justify-center pt-12 p-4 md:p-8  md:pt-12">
      <div className="flex flex-col items-center  ">
        <h1 className="font-semibold text-5xl  text-center pt-3 pb-7">Payment options</h1>
        <p className="font-light text-center">
        Receive up to 12 month of rent upfront. Clear, low fees with no surprises. </p>

        <div className="flex md:flex-row flex-col  gap-x-6 pt-10  rounded-lg pb-20 ">
          <div className=" flex flex-col items-center  mt-2 md:mt-0">
            <div className=" flex items-center justify-center border-2 bg-gray-100 border-black rounded-full h-20 w-20">
              <span className="text-3xl">3</span>
            </div>
            <h2 className="text-2xl pt-3 pb-2 text-center">
             3 months </h2>
            <p className="font-light  text-slate-600 text-center">
            Receive your rent 3 months upfront. </p>
            <h2 className="text-2xl pt-1  text-center">
            2.0% of rent </h2>
            <p className="text-md  pb-2 text-center">
            + £99.50 one-time admin fee </p>  
              </div>

          <div className=" flex flex-col items-center mt-2 md:mt-0">
            <div className=" flex items-center justify-center border-2 bg-gray-100 border-black rounded-full h-20 w-20">
              <span className="text-3xl">6</span>
            </div>
            <h2 className="text-2xl pt-3 pb-2 text-center">
             6 months </h2>
            <p className="font-light  text-slate-600 text-center">
            Receive your rent 6 months upfront. </p>
            <h2 className="text-2xl pt-1  text-center">
            3.75% of rent </h2>
            <p className="text-md  pb-2 text-center">
            + £199.50 one-time admin fee </p>  
          </div>
          <div className=" flex flex-col items-center  mt-2 md:mt-0">
            <div className=" flex items-center justify-center border-2 bg-gray-100 border-black rounded-full h-20 w-20">
              <span className="text-3xl">12</span>
            </div>
            <h2 className="text-2xl pt-3 pb-2 text-center">
             12 months </h2>
            <p className="font-light  text-slate-600 text-center">
            Receive your rent 12 months upfront. </p>
            <h2 className="text-2xl pt-1  text-center">
            8.85% of rent </h2>
            <p className="text-md  pb-2 text-center">
            + £299.50 one-time admin fee </p>  
          </div>
        </div>
      </div>
    </section>
  );
}

export default PaymentOption;
