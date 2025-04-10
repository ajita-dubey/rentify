import React from 'react'

function Team() {
  return (
    <section className='flex p-8 pt-8 gap-x-5'>
        <div className='flex flex-col w-full '>
            <h1 className='font-bold text-xl'>
            Team members
            </h1>
            <div className='flex flex-col'>
            <div className='flex  flex-col items-center w-full '>
                <div className='flex  gap-x-2 pt-2 w-full'>
                    <button className='rounded-md text-white bg-orange-500 border border-orange-500 p-1 w-full'>Active
                    </button>
                    <button className='rounded-md text-orange-500 border border-orange-500 p-1 w-full'>Inactive
                    </button>
                   </div>
            </div>
            <div className='pt-2'>
                <div className='flex  flex-col   shadow-md'>
                    <div className='flex gap-x-5 p-2 justify-around'>
                    <p className='font-bold text-lg pb-4'>Date</p>
                    <p className='font-bold text-lg pb-4'>Time</p>
                    <p className='font-bold text-lg pb-4'>Status</p>
                    <p className='font-bold text-lg pb-4'>Address</p>
                  </div>
              </div>
             </div>
           </div>
        </div>
        <div className= 'flex flex-col w-[600px] p-2'>
            <h1 className='font-semibold text-xl'>Invited team members</h1>
            <p className='font-light pt-2'>To invite a team member,enter their eamil address below.</p>
            <div className='flex flex-col pt-2 gap-y-2'>
            <input
            type="email"
            placeholder="Email address"
            className=" rounded-lg p-2  border border-gray-400 text-sm pt-2 "/>
            <button className=" bg-orange-600 text-white rounded-lg outline-none p-2 text-sm ">
                Send invitation
            </button>
            </div>

        </div>
     </section>
  )
}

export default Team
