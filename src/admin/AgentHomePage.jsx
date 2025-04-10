import React from 'react'

function AgentHomePage() {
  return (
    <section className="flex  items-center  p-8  pt-10">
        < div className=' flex flex-col justify-center items-center'>
            <h1 className="font-bold text-2xl  pb-4">Hello,Ajita!</h1>

            <div className=' flex justify-center items-center gap-x-2 p-5 bg-purple-300 pt-5'>
             <div className='bg-yellow-100 p-2 rounded-md'>
                <p className='font-bold'>Your April earnings</p>
                <div className='flex gap-x-2'>
                    <div className='flex flex-col gap-y-2'>
                    <button className=" bg-orange-600 text-white rounded-lg outline-none p-1 text-sm ">
                    <p className=''>000</p>
                    <p>Daily check in</p>
                </button>
                <button className=" bg-orange-600 text-white rounded-lg outline-none p-1 text-sm ">
                    <p className=''>0.00</p>
                    <p>Daily check-in</p>
                </button>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                    <button className=" bg-orange-600 text-white rounded-lg outline-none p-1 text-sm ">
                    <p className=''>0.00</p>
                    <p>Viewings</p>
                </button>
                <button className=" bg-orange-600 text-white rounded-lg outline-none p-1 text-sm ">
                    <p className=''>0.00</p>
                    <p>Deals completed</p>
                </button>
                    </div>
                </div>
                <p className='font-light'>Next payout on 31 May or next business day.Earnings subject to final confirmation.</p>
               
             </div>
             <div className=' flex flex-col gap-y-2  w-full'>
             <div className='bg-cyan-200 p-2 rounded-md '>
             <p className='font-bold'>Deals pending</p>
             <button className=" bg-orange-600 text-white rounded-lg outline-none p-2 text-sm ">
                    All deals
                </button>
             </div>
             <div className='bg-pink-300 p-2 rounded-md'>
             <p className='font-bold'>News Feed</p>
             <p className='font-light pt-3'>No notifications.</p>
             </div>
             </div>

            </div>
        </div>
      
    </section>
  )
}

export default AgentHomePage
