import React from 'react'
import { MdCheck } from 'react-icons/md'

function TenantFind() {
  return (
    <section className=" flex items-center justify-center p-4 md:p-8  md:pt-12  ">
            <div className="flex flex-col items-center ">
              <h1 className="font-semibold text-3xl pt-3 pb-2 text-center ">
              Tenant find and management services in Archway </h1>
              <p className='text-slate-500 font-semibold'>Rentify offers lettings agent services in Archway with full rent and damage cover on every tenancy</p>
              <div className="flex  md:flex-row flex-col pt-5 gap-5 rounded-lg pb-20">
                <div className="border  border-gray-300 shadow-md rounded-xl p-4 max-w-[350px]">
                  <h1 className="text-2xl  text-center">Lettings </h1>
                  <h1 className="text-2xl  pb-3 text-center">
                    6.0%
                    <span className="font-light text-sm"> + VAT</span>
                  </h1>
                  <p className="font-light pb-4 text-center">
                  Let only service that finds tenants fast and comes with rent and damage cover.</p>
                  <div className="flex flex-col gap-y-2">
                    <input
                      type="text"
                      placeholder="Enter your email"
                      className=" rounded-lg p-2 border border-gray-400  "/>
                    <button className=" bg-orange-600 text-white rounded-lg outline-none p-2 hover:bg-orange-500 ">
                      Enquire about Lettings for BTR
                    </button>
                  </div>
                  <h1 className="pt-4 font-semibold ">Lettings features:
                  </h1>
                  <div className="flex items-center gap-2 py-1"><MdCheck /><p className="font-light">12 months rent guarantee</p></div>
                  <div className="flex items-center gap-2 py-1"><MdCheck /><p className="font-light">£100k legal cover for evictions</p></div>
                  <div className="flex items-center gap-2 py-1"><MdCheck /><p className="font-light">Viewings </p></div>
                  <div className="flex items-center gap-2 py-1"><MdCheck /><p className="font-light ">Referencing and contracts</p>
                </div>
                </div>
                <div className="border border-gray-300 shadow-md  rounded-xl p-5 max-w-[350px]">
                  <h1 className="text-2xl text-center"> Managed Lettings</h1>
                  <h1 className="text-2xl  pb-2 text-center"> 10.0%
                    <span className="font-light text-sm"> + VAT</span>
                  </h1>
                  <p className="font-light text-center pb-4">
                  Our lettings service plus simple and reliable property management.
                 </p>
                   <div className="flex flex-col gap-y-2">
                    <input
                      type="text"
                      placeholder="what is your email?"
                      className=" rounded-lg p-2 border border-gray-400  "/>
                    <button className=" bg-orange-600 text-white rounded-lg outline-none p-2 hover:bg-orange-500 ">
                      Enquire about Managed Lettings
                    </button>
                  </div>
                  <h1 className="pt-4 font-semibold ">Lettings features:</h1>
                  <div className="flex items-center gap-2 py-1"><MdCheck /><p className="font-light">12 months rent guarantee</p></div>
                  <div className="flex items-center gap-2 py-1"><MdCheck /><p className="font-light">£100k legal cover for evictions</p></div>
                   <div className="flex items-center gap-2 py-1"><MdCheck /><p className="font-light">Viewings</p></div>
                  <div className="flex items-center gap-2 py-1"><MdCheck /><p className="font-light ">Referencing and contracts</p></div>
                  <div className="flex items-center gap-2 py-1"><MdCheck /><p className="font-light ">Full management service</p></div>
                  </div>
      
                {/* <div className="border  border-gray-300 shadow-md  rounded-xl p-5 max-w-[350px]">
                  <h1 className="text-2xl    text-center">Managed Lettings</h1>
                  <h1 className="text-2xl  pb-5 text-center"> 10.0%
                    <span className="font-light text-sm"> + VAT</span>
                  </h1>
                  <p className="font-light pb-4">
                  For landlords looking for a hassle-free, fully managed service.
                  </p>
                    <div className="flex flex-col gap-y-2">
                    <input
                      type="text"
                      placeholder="what is your email?"
                      className=" rounded-lg p-2 border border-gray-400  "
                    />
                    <button className=" bg-orange-600 text-white rounded-lg outline-none p-2  ">
                      Enquire about Managed Lettings
                    </button>
                  </div>
                  <h1 className="pt-4 font-semibold ">Service includes:</h1>
                 
                 <div className="flex items-center gap-2 py-1"> <MdCheck /><p className="font-light">Rent paid on time, every month</p></div>
                 <div className="flex items-center gap-2 py-1">  <MdCheck /> <p className="font-light">Professional photography</p></div>
                 <div className="flex items-center gap-2 py-1">  <MdCheck /> <p className="font-light">Viewings Monday to Saturday</p></div>
                 <div className="flex items-center gap-2 py-1"><MdCheck /><p className="font-light ">Every step of the lettings process covered</p></div>
                 <div className="flex items-center gap-2 py-1"><MdCheck /><p className="font-light">Full management service</p></div>
                 </div> */}
                </div>
             </div>
             </section>
  )
}

export default TenantFind
