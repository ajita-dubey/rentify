import React from 'react'
import FastLettings from './FastLettings'
import LettingServices from './LettingServices'
import ReceiveRent from './ReceiveRent'
import LettingManagement from './LettingManagement'
import FaqSection from './FaqSection'

function SeamlessLetting() {
  return (
    <>
    <section className=" flex items-center justify-center p-4 md:p-8  md:pt-12 max-w-[1265px] ">
     <div className="flex justify-between h-full md:gap-x-7 md:flex-row flex-col">
       <div className=" flex flex-col justify-center gap-y-7 md:w-1/2 h-full p-2">
         <div>
         <h2 className='text-green-700 text-base font-bold md:text-left text-center'>2025 UPGRADE — on-time rent payments</h2>
             <h1 className="font-semibold md:text-5xl text-4xl text-center md:text-left  pb-6">
             Seamless lettings with rent paid on time</h1>
            <p className='text-lg md:text-left text-center text-slate-600'>Rentify helps landlords let 1,000+ properties per year in a simple and safe way.</p>
           </div>
           <div className=" flex md:block justify-center items-center w-full">
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
       <div className=" md:p-0  md:w-1/2">
         <img src="src/assets/landlords.jpg" />
       </div>
     </div>
   </section>
<FastLettings/>
<LettingServices/>
<ReceiveRent/>
<FaqSection/>
<LettingManagement/>

   
   </>
  )
}

export default SeamlessLetting
