import React from 'react'
import SellWithRentify from './SellWithRentify'
import WhatIncluded from './WhatIncluded'
import MoreBuyers from './MoreBuyers'
import ForSellersFaq from './ForSellersFaq'

function SimplerSales() {
  return (
    <>
       <section className=" flex items-center justify-center p-4 md:p-8  md:pt-12 ">
    <div className="flex md:flex-row flex-col w-full  gap-x-10 h-full">
      <div className=" flex flex-col justify-center gap-y-5  p-5 h-full md:w-1/2">
        <div>
            <h1 className="font-semibold text-5xl pb-6 md:text-left text-center ">
            Simpler sales
            </h1>
          <p className='font-light pb-8 md:text-left text-center'>Sell your property at the best possible price with personalised service.
            </p>
            <div className='w-full md:w-auto'>
            <button className=" bg-orange-600 text-white rounded-lg outline-none  p-3  w-full md:w-auto hover:bg-orange-500">
            Free valuation
            </button>
            </div>
             </div>
      </div>
      <div className="pt-3 md:w-1/2">
        <img src="./assets/simpler-sales.jpg" className="rounded-lg" />
      </div>
    </div>
  </section>
  <SellWithRentify/>
  <WhatIncluded/>
  <MoreBuyers/>
  <ForSellersFaq/>
    </>
 
  )
}

export default SimplerSales
