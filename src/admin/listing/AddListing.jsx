import React from 'react'

function AddListing() {
  return (
    <section className='flex items-center justify-center p-5  w-full '>
        <div className='flex flex-col items-center w-[500px]  bg-gray-100 p-5  rounded-md shadow-md border-zinc-300'>
            <h1 className='font-bold text-xl'>What kind of listing would you like to add?</h1>
            <div className='flex  pt-5 gap-x-2  w-full'>
            <button className='rounded-md text-white w-full border bg-orange-600 p-2 hover:bg-orange-500'>Rental</button>
            <button className='rounded-md text-white w-full border bg-orange-600 p-2 hover:bg-orange-500'>Sale</button>
            </div>
        </div>
       </section>
  )
}

export default AddListing
