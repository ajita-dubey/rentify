import React from 'react'
import { AiOutlineThunderbolt } from 'react-icons/ai'
import { BsHouseCheck } from 'react-icons/bs'
import { SiCoinmarketcap } from 'react-icons/si'

function SellWithRentify() {
  return (
<section className="flex items-center justify-center  relative p-4 md:p-8  md:pt-12">
      <div className="flex flex-col items-center  ">
     <h1 className="font-semibold text-5xl pt-3 text-center pb-7"> Why sell with Rentify?</h1>

        <div className="flex md:flex-row flex-col pt-5 gap-5 rounded-lg pb-20">
          <div className=" flex flex-col items-center p-5 ">
            <BsHouseCheck  size={80}/>
            <h1 className="text-2xl pt-3 pb-2 text-center">
            More buyers via 3,000+ agents </h1>
            <p className="font-light text-center">
            Marketing tailored to your property and supported by best-in- class materials. </p>
          </div>
         <div className=" flex flex-col items-center p-5">
            <AiOutlineThunderbolt size={80} />
           <h1 className="text-2xl pt-3 pb-2 text-center">Proactive marketing strategy </h1>
            <p className="font-light text-center">
            Get exposure to our 3,000+ partner agents as well as leading portals. </p>
          </div>
          <div className=" flex flex-col items-center   p-5">
             <SiCoinmarketcap size={80} />
             <h1 className="text-2xl pt-3 pb-2 text-center">
            Proactive marketing strategy </h1>
            <p className="font-light text-center">
            We’re by your side from marketing to completion.
            </p>
          </div>
        </div>
         </div>
    </section>
    
  )
}

export default SellWithRentify
