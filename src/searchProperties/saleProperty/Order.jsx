import React, { useState } from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa6'

function Order() {
    const [optionOpen, setoptionOpen] = useState(false);
  return (
    <div>
       <div
              className=" flex items-center justify-between h-9 font-medium rounded-md p-2 w-full 
           border border-solid border-gray-400"
              onClick={() => setoptionOpen(!optionOpen)} >
              {optionOpen?<span><FaArrowDown /></span>:
                <span><FaArrowUp /></span>}

            </div>
    </div>
  )
}

export default Order
