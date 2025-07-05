import React, { useState } from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa6'

function Order() {
    const [optionOpen, setoptionOpen] = useState(false);
    const [order, setorder] = useState(false);
  return (
    <div>
       <div
              className=" flex items-center justify-between font-medium rounded-md w-full 
           border border-solid border-gray-400"
              onClick={() => setoptionOpen(!optionOpen)} >
              {optionOpen?<span className=' h-9 p-2' onClick={()=>setorder('ascen')}><FaArrowDown /></span>:
                <span className='h-9 p-2' onClick={()=>setorder('descen')}><FaArrowUp /></span>}
           </div>
    </div>
  )
}

export default Order
