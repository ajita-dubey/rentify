import React, { useState } from "react";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
function Front() {
  const [isBuyOption, setIsBuyOption] = useState(true);
  return (
    <>
     <section className=" flex items-center justify-center p-8 pt-12">
      <div className="flex justify-between items-center  h-full md:flex-row flex-col">
        <div className=" flex flex-col justify-center gap-y-7   p-2 h-full md:w-1/2">
          <div className="flex gap-x-5">
            <button
              onClick={() => setIsBuyOption(!isBuyOption)}
              className={`${isBuyOption?'bg-red-300':null} text-red-700  rounded-md text-lg p-2 px-3`}
            >
              Rent
            </button>
            <button
              onClick={() => setIsBuyOption(!isBuyOption)}
              className={`${isBuyOption? null:"bg-red-300" } text-red-700  rounded-md text-lg p-2 px-3`}
            >
              Buy
            </button>
          </div>
          {isBuyOption ? (
            <div>
              <h1 className="font-semibold text-5xl  md:text-left text-center md:pt-3 pt-1 pb-6">
                The simple and secure{" "}
              </h1>
              <h1 className="font-semibold text-5xl  md:text-left text-center md:pt-3 pt-1 pb-6 -mt-3">
                way to buy
              </h1>
            </div>
          ) : (
            <div>
              <h1 className="font-semibold text-5xl  md:text-left text-center md:pt-3 pt-1 pb-6">
                The rewarding
              </h1>
              <h1 className="font-semibold text-5xl md:text-left text-center  md:pt-3 pt-1 pb-6 -mt-3">
                way to rent
              </h1>
            </div>
          )}
          <div className="flex items-center justify-center flex-col md:block w-full">
            <div className="flex items-center justify-center md:block">
            <input
              type="text"
              placeholder="Select area"
              className=" rounded-lg p-3 border border-gray-400 "
            />
            <button className=" bg-orange-600 text-white rounded-lg outline-none p-3 ml-3 ">
              Search
            </button>
            </div>
           
            <div className="flex gap-x-2 mt-2">
              <span className="bg-gray-100 px-1 py-[0.5px] rounded  text-sm font-light">
                Delhi
              </span>
              <span className="bg-gray-100 p-1 py-[0.5px] rounded text-sm font-light">
                Kolkata
              </span>
              <span className="bg-gray-100  p-1 py-[0.5px] rounded text-sm font-light">
                Mumbai
              </span>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src="src/assets/image.png" className="rounded-lg" />
        </div>
      </div>
    </section>
    {!isBuyOption ? null:(<> <Page2/> <Page3/></> 
     )}
    
      <Page4 optionTrue={isBuyOption}/>
     <Page5/>
    
    </>
    );
}

export default Front;
