import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

function MoreBuyers() {
  return (
    <section className=" flex  flex-col items-center justify-center  p-24 pb-6 ">
      <h1 className="font-semibold text-5xl pt-3  ">Get more buyers via our</h1>
      <h1 className="font-semibold text-5xl  "> unique partner agent</h1>
      <h1 className="font-semibold text-5xl  ">network.</h1>
      <p className="font-light pt-5 pb-5 text-[20px]">
        Benefit from the 3,000+ partner agents who can earn a commission share
        by introducing qualified buyers to your property.
      </p>
      <div className="flex  items-center pt-5 pb-6">
        <div className=" flex  justify-center gap-y-5  h-full w-1/2">
          <div>
            <div className="flex gap-x-2  items-center">
              <div className="flex   gap-x-2 ">
                <FaCircleCheck  className="text-green-400" size={30} />
               </div>
               <div>
               <span className="font-bold text-lg  text-center">More buyers</span>
              <p className="font-light text-sm">
                Your property is seen by more buyers.
              </p>
               </div>
               </div>
            < div className="flex gap-x-2 items-center pt-3 ">
              <div className="flex items-center gap-x-2 ">
                <FaCircleCheck className="text-green-400"size={30} />
                </div>
                <div>
                <span className="font-bold text-lg text-center ">
                  Thousands of agents via a single point of contact
                </span>
             <p className="font-light text-sm">
              Benefit from the potential leads of thousands of agents via Scraye as the single point
             </p>
              <p className="font-light text-sm">of contact.</p>
                </div>
               
            </div>
            <div className="flex gap-x-2 pt-3 items-center">
              <div className="flex  gap-x-2 ">
                <FaCircleCheck className="text-green-400"size={30} />
                </div>
                <div>
                <span className="font-bold text-lg ">No additional cost to you</span>
              
              <p className="font-light text-sm">
              Whether a buyer comes direct to us or via a partner agent, there is no </p>
             <p className="font-light text-sm"> additional cost to you for the commission paid to the agent.</p>
               </div>
                 </div>
          </div>
        </div>
        <div className="w-1/2">
          <img src="src/assets/partner-agent.jpg" className="rounded-lg" />
        </div>
      </div>
    </section>
  );
}

export default MoreBuyers;
