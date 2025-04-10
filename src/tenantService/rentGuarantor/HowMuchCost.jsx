import React from "react";

function HowMuchCost() {
  return (
    <section className="flex items-center justify-center relative p-4 md:p-8 md:pt-12 ">
     <div>
      <h2 class="mb-6 text-center text-4xl font-bold md:text-5xl">
        {" "}
        How much does it cost?
      </h2>
      <h3 class="m-auto mb-2 text-center text-lg">
        Enter your tenancy details below for a quick quote.
      </h3>
      <div class="m-auto mt-20 grid grid-cols-1 gap-x-10 md:grid-cols-2 ">
        <div>
          <img src="src/assets/cost-calculator.jpg" alt="" />
        </div>
        <div>
          <h4 class="text-2xl font-bold">Get a quote</h4>
          <div class="mt-4 grid max-w-[500px] grid-cols-3 items-center justify-center gap-4">
            <p class="col-span-2 text-base font-bold">Rent per month (£)</p>
            <input
              class="flex h-9 w-full rounded-md border border-slate-200 bg-transparent px-3 py-1 text-sm transition-colors
               file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none
                focus-visible:ring-1 focus-visible:ring-slate-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800
                 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300"
              placeholder="1500"
            />
            <p class="col-span-2 text-base font-bold">
              Guarantor fee (12 months tenancy)
            </p>
            <p class="underline">-</p>
          </div>
          <span class="mt-6 block text-sm text-gray-700">
            Note: the guarantor fee is 4.0% of your rent.
          </span>
          <button class=" bg-orange-500 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors
           focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-scraye-orange text-white
            hover:bg-scraye-orange-highlight hover:text-white active:text-white disabled:bg-slate-300 disabled:text-slate-900 
            h-9 px-3 py-2 mt-6 w-full md:w-auto">
            Search properties
          </button>
        </div>
      </div>
    </div>
    </section>

  );
}

export default HowMuchCost;
