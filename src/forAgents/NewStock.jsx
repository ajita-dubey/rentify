import React from 'react'
import NewListing from './NewListing'
import SellYourStock from './SellYourStock'
import LettingProtect from './LettingProtect'
import LatestCommission from './LatestCommission'


function NewStock() {
  return (
    <>
        <section className=" flex items-center justify-center  relative p-24 pt-12">
    <div className="flex  items-center  h-full">
      <div className=" flex flex-col justify-center gap-y-5  p-5 h-full w-1/2">
        <div>
            <h1 className="font-semibold text-5xl pt-3 ">
              Your one-stop shop for 
            </h1>
            <h1 className="font-semibold text-5xl  pb-6 ">
              new stock
            </h1>
            <p className='font-light'>Access thounds of fee-paying listings to rent and for sale in</p>
            <p className='font-light pb-8'>London.Each commission is guaranteed.Agent accounts are free.</p>
            <button className=" bg-red-700 text-white rounded-lg outline-none  p-3  ">
              Get started in minutes
            </button>
          </div>
      </div>
      <div className="w-1/2">
        <img src="src/assets/client-img.png" className="rounded-lg" />
      </div>
    </div>
  </section>
     <NewListing/>
     <SellYourStock/>
     <LettingProtect/>
     <LatestCommission/>
     

    </>

  )
}

export default NewStock

