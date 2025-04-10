import React from 'react'
import { IoIosInformationCircleOutline } from 'react-icons/io'

function AgencySetup() {
  return (
<section className="flex  justify-center items-center p-8  pt-20">
      <div className="flex   items-center p-5 w-[500px] border rounded-md shadow-md border-zinc-300">
        <form className="flex flex-col w-full">
          <h1 className="font-semibold text-2xl pb-3">Agency setup</h1>
          <h3 className="font-bold text-lg text-slate-600  pb-3">Agency details</h3>
          <div className="flex flex-col gap-y-2">
          <input
            type="text"
            placeholder="Business Name"
            className=" rounded-lg p-2  border border-gray-400  text-sm "
          />
          <input
            type="number"
            placeholder="Phone Number"
            className=" rounded-lg p-2  border border-gray-400 text-sm "
          />
          <div>
          <h3 className="font-bold text-md text-slate-600  pb-3">What areas do you operate in?</h3>
           <input
            type="text"
            placeholder="Search an area.eg.India"
            className=" rounded-lg p-2  border border-gray-400 text-sm  w-full"
          />
          </div>
          <hr className='mt-2'></hr>
          <p className='text-md'>Selected areas:</p>
          <p className='text-sm'>No areas selected</p>
          <div className=''>
              <div className='flex gap-x-2 pb-2 items-center'>
              <input
               type="checkbox"  className='accent-blue-600 h-4 w-4'/>
               <span className='text-md font-light'>Earn commission by introducing applicants</span>
                </div>
                </div>
                <div className= 'flex  gap-x-2 bg-cyan-50 border border-cyan-200 p-3 rounded-lg'>
                    <div>
                    <IoIosInformationCircleOutline className='text-cyan-500' size={25} />  
                    </div>
                    <div>
                    <p className=' font-bold text-sm'>This will create a new agency and set you as the manager</p>
                    <p className='text-sm font-light'>To join an existing agency, contact us at agents@rentify.com</p>
                    </div>

                </div>
                <div className='pt-2'>
                <button className=" bg-orange-600 text-white  w-full rounded-lg outline-none p-2 text-sm ">
                Save
                 </button>
                </div>

        


          </div>
  </form>
      </div>
    </section>
  )
}

export default AgencySetup
