import React, { useState } from 'react'
import { LuChevronsUpDown } from 'react-icons/lu';
import { MdOutlineBathtub } from 'react-icons/md';

function BathRoom() {
    const [optionOpen,setoptionOpen] = useState(false);
    const [Max,setMax] = useState(false);
    const [Min,setMin] = useState(false);
  return (
   
          <div className='relative w-full'>
           <div className=' flex items-center h-9 font-medium rounded-md p-2 w-full border border-solid border-gray-400' 
           onClick={()=> setoptionOpen(!optionOpen)}>
              <div className='flex items-center gap-x-2'>
              <span><MdOutlineBathtub /></span>
              <span>Bathroom</span>
              </div>
             </div>
           { optionOpen? <div className='font-medium rounded-md p-2 w-full px-3 border border-solid border-gray-400 bg-white'>
               <div className=' flex items-center  font-medium rounded-md p-2 pt-0 w-full'>
              <div className='flex items-center gap-x-2'>
              {/* <span ><IoBedOutline /></span> */}
              <span>Bathroom</span>
              </div>
             </div>
           <div className='flex items-center gap-x-2'>
           <div className=' flex items-center justify-between h-9 font-medium rounded-md p-2 w-full border border-solid border-gray-400' 
           onClick={()=> setMin(!Min)}>
              <div className='flex items-center gap-x-2'>
              {/* <span ><IoBedOutline /></span> */}
              <span className='text-sm'> Min bedroom</span>
              </div>
              <div>
              <LuChevronsUpDown />
              </div>
             </div>
         <div className=' flex items-center justify-between h-9 font-medium rounded-md p-2 w-full border border-solid border-gray-400' 
           onClick={()=> setMax(!Max)}>
              <div className='flex items-center gap-x-2'>
              {/* <span ><IoBedOutline /></span> */}
              <span className='text-sm'> Max bedroom</span>
              </div>
              <div><LuChevronsUpDown /></div>
             </div>
           </div>
            </div>:null}
          </div>
  )
}

export default BathRoom
