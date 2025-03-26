import React from 'react'

function Front() {
  return (
    <section className=' flex items-center justify-center p-8 pt-12'> 
    <div className='flex justify-between items-center h-full'>
         <div className=' flex flex-col justify-center gap-y-7   p-2 h-full w-1/2'>
            <div className='flex gap-x-5'>
            <button className='text-red-700 bg-red-300 rounded-md text-lg p-2 px-3' >Rent</button>
            <button className='text-red-700 rounded-sm text-lg p-2 px-3'>Buy</button>
            </div>
           <div>
           <h1 className='font-semibold text-5xl pt-3 pb-6'>The rewarding</h1>
            <h1 className='font-semibold text-5xl pt-3 pb-6 -mt-3'>way to rent</h1> 
           </div>
            
           <div className='w-full'>
           <input type='text' placeholder='Select area' className=' rounded-lg p-3 border border-gray-400 '/>
            <button className=' bg-red-700 text-white rounded-lg outline-none p-3 ml-3 '>Search</button>
            <div className='flex gap-x-2 mt-2'>
           <span className='bg-blue-300 px-1 py-[0.5px] rounded  text-sm font-light' >Delhi</span>
            <span  className='bg-blue-300 p-1 py-[0.5px] rounded text-sm font-light' >Kolkata</span>
            <span  className='bg-blue-300 p-1 py-[0.5px] rounded text-sm font-light' >Mumbai</span>
           </div>
           </div>
           </div>
         <div className='w-1/2'>
          <img src='src/assets/image.png' className='rounded-lg'/>
         </div>
    </div>
      
      
    </section>

  )
}

export default Front
