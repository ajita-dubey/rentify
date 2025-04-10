import React from "react";

function InstantQuote() {
  return (
    <section className="flex flex-col items-center justify-center pt-12 p-4 md:p-8  md:pt-12">
      <h1 className="font-semibold text-left text-xl  pb-2">
        Instant Quote
      </h1>
      <div className="flex  justify-center gap-x-20 w-full">
        <div className="flex  md:flex-row flex-col justify-center gap-x-20 pt-10 w-full ">
          <div className=" flex flex-col items-center  ">
            <p className="text-slate-500">What is your rent per month?</p>
            <input
              type="text"
              placeholder="Enter rent"
              className=" rounded-md p-1 border border-gray-400  "
            />
          </div>
         <div className=" flex flex-col items-center  mt-2 md:mt-0">
            <p className="text-lg  text-green-600 pb-1">Advance Rent Options</p>
            <p>
              3 months rent upfront <span className="text-slate-500 ml-1">0.00</span>
            </p>
            <p>
              6 months rent upfront <span className="text-slate-500 ml-1">0.00</span>
            </p>
            <p>
              12 months rent upfront
              <span className="text-slate-500 ml-1">0.00</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InstantQuote;
