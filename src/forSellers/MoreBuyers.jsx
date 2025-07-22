import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

function MoreBuyers() {
  return (
       <section className="relative m-auto w-full max-w-[1265px] p-4">
         <div  class="py-10 md:py-20">
         <div>
           <h1 class="m-auto mb-6 max-w-[22ch] text-center text-4xl font-bold md:text-5xl">
           Get more buyers via our unique partner agent network. </h1>
           <p class="text-center text-lg text-slate-700">
           Benefit from the 3,000+ partner agents who can earn a commission share by introducing 
           qualified buyers to your property. </p>
           <div class="py-12">
             <div class="relative mx-auto mb-5 grid w-full grid-cols-1 gap-10  md:grid-cols-2">
               <div>
                 <li class=" flex relative mt-2 list-none">
                   <FaCircleCheck className="text-green-400" size={30} />
                   <div class="pl-2">
                     <h5 class="mb-1 text-xl font-bold">
                     More buyers
                     </h5>
                     <span class="text-gray-700">
                     Your property is seen by more buyers.
                     </span>
                   </div>
                 </li>
                 <li class=" flex relative mt-2 list-none">
                   <FaCircleCheck className="text-green-400" size={35} />
                   <div class="pl-2">
                     <h5 class="mb-1 text-xl font-bold">
                     Thousands of agents via a single point of contact
                     </h5>
                     <span class="text-gray-700">
                     Benefit from the potential leads of thousands of agents via Scraye as the single point of contact.
                     </span>
                   </div>
                 </li>
                 <li class="flex relative mt-2 list-none">
                   <FaCircleCheck className="text-green-400" size={50} />
                   <div class="pl-2">
                     <h5 class="mb-1 text-xl font-bold">
                     No additional cost to you
                     </h5>
                     <span class="text-gray-700">
                     Whether a buyer comes direct to us or via a partner agent, there is no additional cost to you for the commission paid to the agent.
                     </span>
                   </div>
                 </li>
               </div>
               <div>
                 <img
                   alt=""
                   class="ml-auto w-full rounded-md object-cover marker:max-w-full md:max-h-[300px]"
                   src="./assets/partner-agent.jpg"
                 />
               </div>
             </div>
           </div>
         </div>
       </div>
       </section>
  );
}

export default MoreBuyers;
