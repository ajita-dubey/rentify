import React, { useState } from 'react'
import { LuMinus } from 'react-icons/lu'
import { MdOutlineAdd } from 'react-icons/md'

function Faq(props) {
    const [faqOpen,setfaqOpen] =useState(false);
  return (
    <div className=' lg:w-[1265px] md:w-[600px] sm:w-full '>
        <div class="mb-4 w-full ">
    <div class="flex items-center justify-between bg-gray-200 pl-3 pr-2 py-3 w-full rounded text-gray-600 text-lg cursor-pointer
     hover:bg-gray-300">
      {props.question}
      { !faqOpen?   <span class="h-6 w-6 flex items-center justify-center" onClick={()=>setfaqOpen(!faqOpen)}>
      <MdOutlineAdd />
      </span>:
      <span class="h-6 w-6 flex items-center justify-center"  onClick={()=>setfaqOpen(!faqOpen)}>
      <LuMinus />
      </span>}
    </div>
   {faqOpen?
    <div class="p-3">
  <p class=" font-light text-gray-600">{props.answer}</p>
</div>:null
   } 
  </div>
      
    </div>
  )
}

export default Faq
