import React from 'react'
import NewListing from './NewListing'
import SellYourStock from './SellYourStock'
import LettingProtect from './LettingProtect'
import LatestCommission from './LatestCommission'
import ForAgentFaq from './ForAgentFaq'

function NewStock() {
  return (
    <>
        <section className=" flex items-center justify-center  md:p-8  md:pt-12 m-auto w-full max-w-[1265px] p-4 ">
    <div className="flex gap-x-10 h-full md:flex-row flex-col">
      <div className=" flex flex-col justify-center gap-y-5  p-5 h-full md:w-1/2">
        <div>
            <h1 className="font-semibold md:text-left text-center text-5xl pb-6 ">
              Your one-stop shop for new stock
            </h1>
        <p className='font-light pb-8 md:text-left text-center'>Access thounds of fee-paying listings to rent and for sale in 
            London.Each commission is guaranteed.Agent accounts are free.
            </p>
            <div className='w-full md:w-auto'>
            <button className=" bg-orange-600 text-white rounded-lg outline-none  p-3  w-full md:w-auto hover:bg-orange-500 ">
              Get started in minutes
            </button>
            </div>
           
          </div>
      </div>
      <div className="  pt-3 md:w-1/2">
        <img src="src/assets/client-img.png" className="rounded-lg" />
      </div>
    </div>
  </section>
     <NewListing/>
     <SellYourStock/>
     <LettingProtect/>
     <LatestCommission/>
     <ForAgentFaq/>
      </>

  )
}

export default NewStock

