import React from 'react'
import { BsFillEmojiSmileFill } from 'react-icons/bs'
import { FaRegSmile } from 'react-icons/fa'
import { GrShieldSecurity } from 'react-icons/gr'
import { IoSettingsOutline } from 'react-icons/io5'

function SpendLess() {
  return (
 <section className="flex items-center justify-center md:p-8  md:pt-12 relative m-auto w-full max-w-[1265px] p-4">
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="border rounded-xl p-5 border-gray-300 shadow-md">
          <FaRegSmile size={25} />
           <h1 className="text-2xl pt-3 pb-5">
            Spend 35% less when moving in
            </h1>
            <p className="font-light">
            You pay a fee that is over 60% lower than the 5 week
            cash deposit and spend 35% less in rent and deposit
            to move in.
            </p>
          </div>
        <div className="border rounded-xl p-5 border-gray-300 shadow-md">
            <GrShieldSecurity size={25} />
            <h1 className="text-2xl pt-3 pb-5">Rentify pays the 5 week security deposit to
               your landlord or agent</h1>
            <p className="font-light">
            Your landlord still receives a deposit so they remain
            protected. At the end of the tenancy, simply return the
            deposit to Rentify.
            </p>
          </div>
         <div className="border rounded-xl p-5 border-gray-300 shadow-md">
          <BsFillEmojiSmileFill size={25} />
            <h1 className="text-2xl pt-3 pb-5">
            Already renting? Unlock your
            existing deposit </h1>
            <p className="font-light">
            Release your existing deposit by replacing it with one
            paid by Rentify.
            </p>
          </div>
        </div>
        <div className='flex md:flex-row flex-col gap-y-2 mt-6 w-full md:w-auto'>
        <button className=" bg-orange-600 text-white rounded-lg outline-none  p-3 cursor-pointer w-full md:w-auto">
          Unlock existing deposit
        </button>
        <button className=" text-orange-600 border border-orange-600 rounded-lg outline-none  p-3 md:ml-3 cursor-pointer md:w-auto
         w-full">
         Search properties
        </button>
        </div>
        </div>
</section>
  )
}

export default SpendLess
