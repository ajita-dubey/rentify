import React from 'react'
import { MdCheck } from 'react-icons/md'

function LettingServices() {
  return (
   <section className=" flex items-center justify-center p-4 md:p-8  md:pt-12  ">
         <div className="flex flex-col items-center ">
           <h1 className="font-semibold text-5xl pt-3 pb-5 text-center ">
           Lettings services built to suit you </h1>
           <div className="flex  md:flex-row flex-col pt-5 gap-5 rounded-lg pb-20">
             <div className="border  border-gray-300 shadow-md rounded-xl p-4 max-w-[350px]">
               <h1 className="text-2xl  text-center">Lettings for BTR </h1>
               <h1 className="text-2xl  pb-3 text-center">
                 4.0%
                 <span className="font-light text-sm"> + VAT</span>
               </h1>
               <p className="font-light pb-4">
               For large landlords and BTR looking to optimise  their return on investment.</p>
               <div className="flex flex-col gap-y-2">
                 <input
                   type="text"
                   placeholder="Enter your email"
                   className=" rounded-lg p-2 border border-gray-400  "/>
                 <button className=" bg-orange-600 text-white rounded-lg outline-none p-2 hover:bg-orange-500 ">
                   Enquire about Lettings for BTR
                 </button>
               </div>
               <h1 className="pt-4 font-semibold ">Service includes:
               </h1>
               <div className="flex items-center gap-2 py-1"><MdCheck /><p className="font-light">Rent paid on time, every month</p></div>
               <div className="flex items-center gap-2 py-1"><MdCheck /><p className="font-light">Professional photography</p></div>
               <div className="flex items-center gap-2 py-1"><MdCheck /><p className="font-light">Viewings Monday to Saturday</p></div>
               <div className="flex items-center gap-2 py-1"><MdCheck /><p className="font-light ">Every step of the lettings process covered</p>
             </div>
             </div>
             <div className="border border-gray-300 shadow-md  rounded-xl p-5 max-w-[350px]">
               <h1 className="text-2xl text-center">Lettings</h1>
               <h1 className="text-2xl  pb-5 text-center"> 5.0%
                 <span className="font-light text-sm"> + VAT</span>
               </h1>
               <p className="font-light text-center pb-2">
               For landlords who manage themselves and need  help securing tenants.
              </p>
                <div className="flex flex-col gap-y-2">
                 <input
                   type="text"
                   placeholder="what is your email?"
                   className=" rounded-lg p-2 border border-gray-400  "/>
                 <button className=" bg-orange-600 text-white rounded-lg outline-none p-2 hover:bg-orange-500 ">
                   Enquire about Lettings
                 </button>
               </div>
               <h1 className="pt-4 font-semibold ">Service includes:</h1>
               <div className="flex items-center gap-2 py-1"><MdCheck /><p className="font-light">Rent paid on time, every month</p></div>
               <div className="flex items-center gap-2 py-1"><MdCheck /><p className="font-light">Professional photography</p></div>
                <div className="flex items-center gap-2 py-1"><MdCheck /><p className="font-light">Viewings Monday to Saturday</p></div>
               <div className="flex items-center gap-2 py-1"><MdCheck /><p className="font-light ">Every step of the lettings process covered</p></div>
               </div>
   
             <div className="border  border-gray-300 shadow-md  rounded-xl p-5 max-w-[350px]">
               <h1 className="text-2xl    text-center">Managed Lettings</h1>
               <h1 className="text-2xl  pb-5 text-center"> 10.0%
                 <span className="font-light text-sm"> + VAT</span>
               </h1>
               <p className="font-light pb-2">
               For landlords looking for a hassle-free, fully managed service.
               </p>
                 <div className="flex flex-col gap-y-2">
                 <input
                   type="text"
                   placeholder="what is your email?"
                   className=" rounded-lg p-2 border border-gray-400  "
                 />
                 <button className=" bg-orange-600 text-white rounded-lg outline-none p-2 hover:bg-orange-500 ">
                   Enquire about Managed Lettings
                 </button>
               </div>
               <h1 className="pt-4 font-semibold ">Service includes:</h1>
              
              <div className="flex items-center gap-2 py-1"> <MdCheck /><p className="font-light">Rent paid on time, every month</p></div>
              <div className="flex items-center gap-2 py-1">  <MdCheck /> <p className="font-light">Professional photography</p></div>
              <div className="flex items-center gap-2 py-1">  <MdCheck /> <p className="font-light">Viewings Monday to Saturday</p></div>
              <div className="flex items-center gap-2 py-1"><MdCheck /><p className="font-light ">Every step of the lettings process covered</p></div>
              <div className="flex items-center gap-2 py-1"><MdCheck /><p className="font-light">Full management service</p></div>
              </div>
             </div>
          </div>
          </section>
  )
}
export default LettingServices
