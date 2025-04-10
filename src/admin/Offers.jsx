import React from 'react'

function Offers() {
  return (
    <section className='flex p-8 pt-8 '>
        <div className='flex flex-col w-full '>
            <h1 className='font-bold text-xl'>
            Offers
            </h1>
            <div className='flex items-center'>
                <div className='flex  gap-x-2 pt-2'>
                    <button className='rounded-md text-orange-500 border border-orange-500 p-1'>Peniding
                    </button>
                    <button className='rounded-md text-orange-500 border border-orange-500 p-1'>Accepted
                    </button>
                    <button className='rounded-md text-white border border-orange-500 bg-orange-500 p-1'>Declined
                    </button>
                   
                 </div>
            </div>
            <div>
                <div className='flex  flex-col pt-5'>
                    <div className='flex gap-x-10 p-5 justify-between'>
                    <p className='font-bold text-lg pb-4'>Status</p>
                    <p className='font-bold text-lg pb-4'>Time</p>
                    <p className='font-bold text-lg pb-4'>Listing</p>
                    <p className='font-bold text-lg pb-4'>Asking rent</p>
                    <p className='font-bold text-lg pb-4'>Rent offered</p>
                    <p className='font-bold text-lg pb-4'>Start date</p>
                    <p className='font-bold text-lg pb-4'>Term</p>
                    <p className='font-bold text-lg pb-4'>Break</p>
                    <p className='font-bold text-lg pb-4'>Conditions</p>
                  </div>
                  <div className='font-light  text-center'>
                    <p>No offres to show</p>
                  </div>
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default Offers
