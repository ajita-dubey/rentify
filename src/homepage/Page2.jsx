import React from 'react'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { IoGiftOutline } from "react-icons/io5";
import { MdOutlineCelebration } from "react-icons/md";


function Page2() {
  return (
    <section className='flex items-center justify-center p-8 pt-12'>
        <div className="flex flex-col items-center ">

            <h1 className='font-semibold text-5xl pt-3'>Fly,shop or dine just from</h1>
            <h1 className='font-semibold text-5xl  pb-4'>pying rent</h1>
            <p className='font-light'>Rent Rewards is the only programme that rewards you every time you to pay your rent, </p>
            <p className='font-light pb-5'>on any property in the India</p>

            <div className='flex  pt-5 gap-5 rounded-lg pb-4' >

                <div className='border p-5'>
                <IoGiftOutline className='  m-1 ' size={30} />

                    <h1 className='text-2xl pb-5'>Get points for every rent payment</h1>
                    <p className='font-light'>Pay your rent via Rentify at most homes and earn</p> 
                       <p className='font-light'> points.Redeem points for air miels,gift cards,</p> 
                       <p className='font-light pb-5'>discounts and more</p> 
                    <button className='text-red-500 flex gap-2 items-center '> <span>Learn more</span>
                        <span><FaRegArrowAltCircleRight /></span>
                    </button>
                     </div>

                 <div className='border p-5'>
                 <MdOutlineCelebration   className='  m-1 ' size={30}/>

                     <h1 className='text-2xl'>Boost your points when renting via</h1>
                     <h1 className='text-2xl pb-5'>Rentify</h1>
                     <p className='font-light'>Earn 50% more points when you rent via Rentify and</p>
                     <p className='font-light pb-5'>get rewarded even faster</p> 
                     <button className='text-red-500 flex gap-2 items-center'> <span>Learn more</span>
                     <span><FaRegArrowAltCircleRight /></span>
                     </button>
                 </div>
               
            </div>
            <button className=' bg-red-700 text-white rounded-lg outline-none p-3 ml-3  '>Open an account for free</button>
        </div>
      
    </section>
  )
}

export default Page2
