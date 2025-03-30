import React from 'react'
import { IoMdCheckbox } from "react-icons/io";


function LettingProtect() {
  return (
    <section className=" flex  flex-col items-center justify-center  p-24 ">
    <div className="flex  items-center pb-6">
      <div className=" flex  justify-center gap-y-5  h-full w-1/2">
        <div>
            <h1 className="font-semibold text-4xl ">
             Lettings Protect-peace of mind 
            </h1>
            <h1 className="font-semibold text-4xl  pb-6 ">
             for you and your landlord
            </h1>
            <p className='font-light'>provide your landlord with a fast and seamless letting plus</p>
            <p className='font-light pb-8'>market-leading protection</p>

           <div className="flex items-center gap-2 py-1"><IoMdCheckbox  size={20}/>
           <p className="font-light">Full tenant find and tenancy progression service</p></div>
           <div className="flex items-center gap-2 py-1"><IoMdCheckbox size={20} />
           <p className="font-light">Let faster via demand of 3,000+ agents</p></div>
           <div className="flex items-center gap-2 py-1"><IoMdCheckbox size={20} />
           <p className="font-light">Up to 12 months rent cover and 100K in legal eviction cover</p></div>
           <div className="flex items-center gap-2 py- 1 pb-5"><IoMdCheckbox size={20} />
           <p className="font-light">Backing provided by a top tier insurer</p></div>
           <p className='font-light pt-8'>Subject to T&Cs</p>
          </div>
      </div>
      <div className="w-1/2">
        <img src="src/assets/group-img.png" className="rounded-lg" />
      </div>
 </div>
    <button className=" bg-red-700 text-white rounded-lg outline-none  p-3 mt-8 ">
              Get started in minutes
            </button>
  </section>
  )
}

export default LettingProtect
