import React from 'react'
import LandlorfFaq from './LandlordFaq'
import LandlordFaq from './LandlordFaq'

function LandlordToRentify() {
  return (
    <>
     <section className=" flex flex-col items-center justify-center   relative pt-12 p-4 md:p-8  md:pt-12">
          <h1 className="font-semibold text-4xl text-center text-slate-700 pt-3 pb-6 " >Refer a Landlord or Agent to Rentify  </h1>
        <h2 className='font-bold text-slate-600  text-lg text-center'>It takes just 30 seconds and we’ll say thanks 
          with an Amazon voucher! </h2>
    <div className="flex  items-center justify-center gap-x-10 h-full">
       <div className=" flex flex-col justify-center gap-y-5  p-5 h-full md:w-1/2">
        <div>
            <hr className='my-8'></hr>
            <p className=' '>
           <span className="font-bold "> How it works:</span> you get a £50 voucher when you introduce and the landlord or agent lists a property with us. You receive a further £50 when that property is rented via us (they get £100 at this time as well).</p>

           <p  className='mt-3 pb-5'>
           <span className="font-bold "> How it refer:</span>automatically generate an introduction email by picking landlord or agent. Pop in the email of your landlord/agent, check you’re happy with the text and click send!</p>
           
           <div className='flex flex-col items-center mt-6 w-full  '>
           <button className=" bg-orange-600 text-white rounded-lg outline-none p-3 w-full max-w-[300px]  ">
             Introduce a landlord
            </button> 
            <button className=" bg-teal-600 text-white rounded-lg outline-none p-3 mt-2 w-full max-w-[300px] ">
            Introduce an agent
            </button>
             </div> 
             <hr className='my-8'></hr>
             <h3 className='mt-6 text-center text-lg font-bold'>
             How we work with landlords
             </h3>
             <ul className='mt-6'>
                <li className='list-disc'>Rentify offers a highly-rated lettings service
                </li>
                <li className='list-disc' >We find great tenants quickly and smoothly
                </li>
                <li className='list-disc'>Fair and transparent fees</li>
                <li className='list-disc'>Free rent and damage protection for every let</li>
                <li className='list-disc'>Friendly customer service team</li>
             </ul>
             <hr className='my-8'></hr>
             <h3 className='mt-6 text-center text-lg font-bold'>
             How we work with agents
             </h3>
             <ul className='mt-6'>
                <li className='list-disc'>We help agents find tenants quickly
                </li>
                <li className='list-disc' >We introduce tenants from our large database of current enquiries
                </li>
                <li className='list-disc'>Each let can come with free rent protection</li>
                 </ul>
                 <hr className='my-6'></hr>
             </div>
             <p className=' text-center'>Our referral programme is subject to T&Cs.</p>
      </div>
      </div>
    </section>
    <LandlordFaq/>
    </>
   
  )
}

export default LandlordToRentify
