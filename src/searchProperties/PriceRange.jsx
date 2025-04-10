import React, { useState } from 'react'
import { FaIndianRupeeSign } from 'react-icons/fa6';
import { IoSearchSharp } from 'react-icons/io5';
import { LuChevronsUpDown } from 'react-icons/lu';

function PriceRange() {
    const [optionOpen,setoptionOpen] = useState(false);
  return (
<div className='relative w-full'>
     <div className=' flex items-center justify-between h-9 font-medium rounded-md p-2 w-full 
     border border-solid border-gray-400' onClick={()=> setoptionOpen(!optionOpen)}>
        <div className='flex items-center gap-x-2'>
        <span><FaIndianRupeeSign /></span>
        <span >Price</span>
        </div>
        <div>
        <LuChevronsUpDown />
        </div>

     </div>
     { optionOpen? <div className='font-medium rounded-md p-2 w-full px-3 border border-solid border-gray-400 bg-white'>
        <div className='flex items-center border-b  gap-x-2'>
        <IoSearchSharp size={20} className='' />
        <input type='text' placeholder='Search loaction...' className='flex h-10 w-full rounded-md bg-transparent
         outline-none placeholder:text-slate-500'/>
        </div>
        <div className='w-full'>
            <span className='py-6 text-center text-sm'>No location found

        </span>

        </div>
      </div>:null}
    </div>
   
  )
}

export default PriceRange

