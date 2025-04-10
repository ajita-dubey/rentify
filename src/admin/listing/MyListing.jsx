import React from 'react'

function MyListing() {
  return (
    <section className='flex p-8 pt-11 '>
        <div className='flex flex-col w-full'>
            <h1 className='font-bold text-xl'>
            Listing properties
            </h1>
            <div className='flex items-center justify-between p-4'>
                <div className='flex '>
                    <button className='rounded-md text-orange-500 border border-orange-500 p-2'>Add listing
                    </button>
                    <span>

                    </span>

                    </div>
                <div className=' flex gap-x-2'>
                    <button className='rounded-md text-slate-600 border border-gray-500 p-1'>
                       Rental
                    </button>
                    <button className='rounded-md text-slate-600 border border-gray-500 p-1'>
                       Show pending
                    </button>

                </div>
            </div>
            <div>
                <div className='flex  flex-col items-center justify-center pt-12'>
                    <h1 className='text-center font-bold text-xl pb-4'> It looks like there are no listings to show!</h1>
                    <button className='rounded-md text-orange-500 border border-orange-500 p-2'>Add listings

                    </button>

                </div>
            </div>
        </div>
      
    </section>
  )
}

export default MyListing
