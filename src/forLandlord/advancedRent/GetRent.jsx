import React from 'react'
import RentPaidSoon from './RentPaidSoon'
import PaymentOption from './PaymentOption'
import InstantQuote from './InstantQuote'
import HowToQualify from './HowToQualify'
import AdvanceRentFaq from './AdvanceRentFaq'

function GetRent() {
  return (
    <>
    <section className=" flex items-center justify-center p-4 md:p-8  md:pt-12 ">
<div className="flex md:flex-row flex-col h-full gap-x-10">
  <div className=" flex flex-col justify-center gap-y-5  p-5 h-full md:w-1/2">
    <div>
        <h2  className=" text-xl text-green-600  md:text-left text-center">Rentify Advanced Rent</h2>
        <h1 className="font-semibold text-5xl md:text-left text-center pt-3 pb-6">
        Get rent upfront on any tenancy
        </h1>
        <p className='font-light pb-5  md:text-left text-center'>With Rentify Advanced Rent, landlords get paid upfront
           whilst tenants still pay monthly.</p>
           <div className='md:max-w-[250px] md:block flex items-center justify-center w-full'>
           <button className=" bg-orange-600 text-white rounded-lg outline-none  p-3  ">
          Get started in minutes
        </button>
           </div>
       
      </div>
  </div>
  <div className= " md:w-1/2">
    <img src="src/assets/landlords-advanced-rent.jpg" className="rounded-lg" />
  </div>
</div>
</section>
<RentPaidSoon/>
<PaymentOption/>
<InstantQuote/>
<HowToQualify/>
<AdvanceRentFaq/>

</>

  )
}

export default GetRent
