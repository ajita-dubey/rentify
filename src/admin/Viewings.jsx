import React from 'react'

function Viewings() {
  return (
    <section className='flex p-8 pt-8 '>
        <div className='flex flex-col w-full '>
            <h1 className='font-bold text-xl'>
            Viewings
            </h1>
            <div className='flex items-center'>
                <div className='flex  gap-x-10 pt-2'>
                    <button className='rounded-md text-orange-500 border border-orange-500 p-1'>Require Action
                    </button>
                    <button className='rounded-md text-orange-500 border border-orange-500 p-1'>Upcoming
                    </button>
                    <button className='rounded-md text-white border border-orange-500 bg-orange-500 p-1 '>Completed
                    </button>
                    <button className='rounded-md text-orange-500 border border-orange-500 p-1'>Cancelled
                    </button>
                 </div>
            </div>
            <div>
                <div className='flex  flex-col pt-5'>
                    <div className='flex gap-x-5 p-5 justify-around'>
                    <p className='font-bold text-lg pb-4'>Date</p>
                    <p className='font-bold text-lg pb-4'>Time</p>
                    <p className='font-bold text-lg pb-4'>Status</p>
                    <p className='font-bold text-lg pb-4'>Address</p>
                  </div>
                  <div className='font-light  text-center'>
                    <p>No viewings to show</p>
                  </div>
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default Viewings
