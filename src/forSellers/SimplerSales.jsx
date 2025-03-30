import React from 'react'
import SellWithRentify from './SellWithRentify'
import WhatIncluded from './WhatIncluded'
import MoreBuyers from './MoreBuyers'

function SimplerSales() {
  return (
    <>
       <section className=" flex items-center justify-center  relative p-24 pt-12">
    <div className="flex  items-center w-full  h-full">
      <div className=" flex flex-col justify-center gap-y-5  p-5 h-full w-1/2">
        <div>
            <h1 className="font-semibold text-5xl pt-3 ">
            Simpler sales.
            </h1>
            <h1 className="font-semibold text-5xl  pb-6 ">
              new stock
            </h1>
            <p className='font-light'>Sell your property at the best possible price with personalised 
            </p>
            <p className='font-light pb-8'>service.</p>
            <button className=" bg-red-700 text-white rounded-lg outline-none  p-3  ">
            Free valuation
            </button>
          </div>
      </div>
      <div className="w-1/2">
        <img src="src/assets/simpler-sales.jpg" className="rounded-lg" />
      </div>
    </div>
  </section>
  <SellWithRentify/>
  <WhatIncluded/>
  <MoreBuyers/>
    </>
 
  )
}

export default SimplerSales
