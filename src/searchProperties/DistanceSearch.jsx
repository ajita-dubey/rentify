import React, { useState } from 'react'
import { GiPathDistance } from 'react-icons/gi';
import { LuChevronsUpDown } from 'react-icons/lu';

function DistanceSearch() {
    const [optionOpen,setoptionOpen] = useState(false);
  return (

       <div className='relative w-full'>
        <div className=' flex items-center justify-between h-9 font-medium rounded-md p-2 w-full border border-solid border-gray-400'
         onClick={()=> setoptionOpen(!optionOpen)}>
            <div className='flex items-center gap-x-2'>
            <span ><GiPathDistance /></span>
            <span >0 km</span>
           </div>
            <div>
            <LuChevronsUpDown />
            </div>
           
        </div>
        { optionOpen? <div className='font-medium rounded-md p-2 w-full px-3 border border-solid border-gray-400 bg-white'>
           <div className=' flex flex-col w-full'>
               <span className='py-6 px-2 hover:bg-gray-200 text-center text-sm'>5 km </span>
               <span className='py-6  px-2 hover:bg-gray-200  text-center text-sm'>10 km </span>
               <span className='py-6 px-2 hover:bg-gray-200 text-center text-sm'>15 km </span>
               <span className='py-6 px-2 hover:bg-gray-200 text-center text-sm'>20 km </span>
               <span className='py-6  px-2 hover:bg-gray-200   text-center text-sm'>25 km </span>
               <span className='py-6  px-2 hover:bg-gray-200 text-center text-sm'>30 km </span>
   
           </div>
         </div>:null}
       </div>
  )
}

export default DistanceSearch
