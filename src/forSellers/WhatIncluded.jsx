import React from 'react'
import { MdCheck } from 'react-icons/md'

function WhatIncluded() {
  return (
    <section className="flex items-center justify-center  p-8 pt-12">
         <div className="flex flex-col items-center ">
           <h1 className="font-semibold text-5xl pt-3 pb-5 text-center">
           What is included
             </h1>
           <div className="flex  pt-5 gap-5  pb-20">
             <div className="border  border-gray-300 p-4 shadow-md rounded-xl max-w-[350px]">
               <h1 className="text-2xl pb-3 text-center">Sales
               </h1>
               <h1 className="text-2xl font-bold  pb-1 text-center">
                 1.5%
                 <span className="font-light text-sm"> + VAT</span>
               </h1>
               <p className="font-light pb-4 text-center">
               Sales service built to sell your property at the best price.
               </p>
             
               <div className="flex flex-col gap-y-2">
                 <input
                   type="text"
                   placeholder="Enter your email?"
                   className=" rounded-lg p-2 border border-gray-400  "/>
                 <button className=" bg-orange-600 text-white rounded-lg outline-none p-2  ">
                   Enquire about Sales
                 </button>
               </div>
               <h1 className="pt-5 pb-3 font-semibold ">Service includes:
               </h1>
               <div className="flex items-center gap-2 py-1"><MdCheck /><p className="font-light">Exposure to our 3,000+ partner agents</p></div>
               <div className="flex items-center gap-2 py-1"><MdCheck /><p className="font-light">Exposure to main advertising portals</p></div>
               <div className="flex items-center gap-2 py-1"><MdCheck /><p className="font-light">Viewings</p></div>
               <div className="flex items-center gap-2 py-1"><MdCheck /><p className="font-light ">Negotiation of offers
               </p>
             </div>
             </div>
            </div>
         </div>
          </section>
  )
}

export default WhatIncluded
