import React from 'react'
import { IoGiftOutline } from "react-icons/io5";
import { MdOutlineCelebration } from "react-icons/md";
import { MdOutlineDeliveryDining } from "react-icons/md";

function Page3() {
  return (
    <section className='flex items-center justify-center p-8 pt-12'>
           <div className="flex flex-col items-center justify-center ">
               <h2 className='mx-auto max-w-[26ch] text-center text-4xl font-bold'>Get rewarded on any tennacy,anywhere in the India</h2>
               <p className='font-light mt-2 text-center max-w-[48ch]'>Earn points to redeem on a variety of benefits. </p>

              <div className='flex  pt-5 gap-5 rounded-lg pb-4 md:flex-row flex-col' >
                 <div className='border p-5'>
                   <IoGiftOutline className='  m-1 ' size={30} />
                     <h1 className='text-2xl pb-5'>Air miles</h1>
                       <p className='font-light'>Redeem your points to help fund </p> 
                          <p className='font-light'> your next holiday</p> 
                     </div>
   
                    <div className='border p-5'>
                    <MdOutlineCelebration   className='  m-1 ' size={30}/>
   
                        <h1 className='text-2xl pb-5'>Gift vouchers</h1>
                        <p className='font-light'>Pick among Apple,Amazon and </p>
                        <p className='font-light pb-5'>a variety of other vouchers</p> 
                      </div>

                    <div className='border p-5'>
                    <MdOutlineDeliveryDining  size={25}/>
                        <h1 className='text-2xl pb-5'>Food delivery</h1>
                        <p className='font-light'>Pamper yourself with your</p>
                        <p className='font-light'>favourite meal delivered straight</p> 
                        <p className='font-light pb-5'>to your home,on us.</p>
                      </div>
                   </div>
               <button className=' bg-orange-600 text-white rounded-lg outline-none p-3 ml-3 cursor-pointer '>Open an account for free</button>
           </div>
           </section>
  )
}

export default Page3
