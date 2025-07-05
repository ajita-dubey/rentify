import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { GrShieldSecurity } from 'react-icons/gr'
import { IoSettingsOutline } from 'react-icons/io5'

function FastLettings() {
  return (
      <section className="flex items-center justify-center p-8 pt-12">
            <div className="flex flex-col items-center ">
              <div className="flex  pt-5 gap-5 rounded-lg pb-10 md:flex-row flex-col">
                <div className="border p-5">
                <GrShieldSecurity size={25} />
                <h1 className="text-2xl pt-3">
                  Rent paid on time every month, even </h1>
                  <h1 className="text-2xl pb-5">if your tenant is in arrears</h1> 
                  <p className="font-light">
                  Get your rent paid on time, every month. Our
                  <p>tenancies undergo thorough referencing and 
                    <p>are insured by a top-tier insurer.</p>
                  </p> </p>
                </div>
      
                <div className="border p-5">
                  <GrShieldSecurity size={25} />
                  <h1 className="text-2xl pt-3 pb-5">Fast lettings </h1>
                  <p className="font-light">
                  We market direct to tenants as well as sharing
                  <p>commission with our 3,000+ partner agents to let your
                    <p>property faster.</p> </p> </p>
                  </div>
      
                <div className="border p-5">
                  <IoSettingsOutline size={25} />
                <h1 className="text-2xl  pt-3 pb-5">
                  Clear and competitive fees </h1>
                  <p className="font-light">
                  In property, every pound matters. Earn more on your
                  <p>investment with our transparent fees.</p>
                  </p>
                 
                </div>
              </div>
         <div className="flex items-center">
           <input
             type="text"
             placeholder="Enter your email"
             className=" rounded-lg p-2 border border-gray-400 "
           />
           <button className=" bg-orange-600 text-white rounded-lg outline-none p-2 ml-3 hover:bg-orange-500 ">
             Enquire
           </button>
           </div>
            </div>
          </section>
  )
}

export default FastLettings
