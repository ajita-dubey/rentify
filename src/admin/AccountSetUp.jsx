import React from 'react'

function AccountSetUp() {
  return (
    <section className="flex  justify-center items-center p-8  pt-8">
         <div className="flex   items-center p-5   border rounded-md shadow-md border-zinc-300">
           <form className="flex flex-col w-full">
             <h1 className="font-bold text-2xl pb-4">Account setup</h1>
             <div className="flex flex-col gap-y-2">
              <div>
              <h3 className="font-bold text-lg">Personal details</h3>
              <p className='font-light text-sm'>Tell us about yourself in case we need to get in touch.</p>
              </div>

             <input
               type="text"
               placeholder="First name"
               className=" rounded-lg p-2  border border-gray-400  text-sm "
             />
             <input
               type="password"
               placeholder="Last name"
               className=" rounded-lg p-2  border border-gray-400 text-sm "
             />
              <input
               type="number"
               placeholder="Phone number"
               className=" rounded-lg p-2  border border-gray-400 text-sm "
             />
             <div>
             <h3 className="font-bold text-lg ">About you</h3>
             <p className='font-light text-sm'>Tell us about your business so that we may personalies your experience.</p>
             </div>

              <p className='font-semibold text-md'>What brought you to Rentify?</p>
              <div className=''>
              <div className='flex gap-x-2 gap-y-5 items-center'>
              <input
               type="checkbox"  className='accent-blue-600 h-4 w-4'/>
               <span className='text-md font-light'>Earn commission by introducing applicants</span>
                </div>
             <div className='flex gap-x-2  pt-2 items-center'>
             <input
               type="checkbox"  className='accent-blue-600 h-4 w-4'/>
               <span className='text-md font-light'>List my properties and get help letting them</span>
             </div>
             <div className='flex gap-x-2 pt-2 items-center'>
             <input
               type="checkbox"  className='accent-blue-600 h-4 w-4'/>
               <span className='text-md font-light'>Earn by hosting viewing on Rentify's behalf</span>
             </div>
             <div className='flex gap-x-2 pt-2 items-center'>
             <input
               type="checkbox"  className='accent-blue-600 h-4 w-4'/>
               <span className='text-md font-light'>Other (please specify)</span>
             </div>
          </div>
          <p className='font-semibold text-md pt-3'>How did you hear about Rentify</p>
          <div className=''>
              <div className='flex gap-x-2 gap-y-5 items-center'>
              <input
               type="checkbox"  className='accent-blue-600 h-4 w-4'/>
               <span className='text-md font-light'>Referral form another agent (please specify)</span>
                </div>
             <div className='flex gap-x-2  pt-2 items-center'>
             <input
               type="checkbox"  className='accent-blue-600 h-4 w-4'/>
               <span className='text-md font-light'>Referral form a colleague at my agency</span>
             </div>
             <div className='flex gap-x-2 pt-2 items-center'>
             <input
               type="checkbox"  className='accent-blue-600 h-4 w-4'/>
               <span className='text-md font-light'>Email from Rentify</span>
             </div>
             <div className='flex gap-x-2 pt-2 items-center'>
             <input
               type="checkbox"  className='accent-blue-600 h-4 w-4'/>
               <span className='text-md font-light'>Social media</span>
             </div>
             <div className='flex gap-x-2 pt-2 items-center'>
             <input
               type="checkbox"  className='accent-blue-600 h-4 w-4'/>
               <span className='text-md font-light'>Search engine</span>
             </div>
             <div className='flex gap-x-2 pt-2 items-center'>
             <input
               type="checkbox"  className='accent-blue-600 h-4 w-4'/>
               <span className='text-md font-light'>Other (please specify)</span>
             </div>
          </div>
               <div className="flex items-center pt-2 gap-x-2">
               <div className='flex gap-x-2 pt-2 pb-2 items-center'>
             <input
               type="checkbox"  className='accent-blue-600 h-4 w-4'/>
               <span className='text-md font-light'>I have read and agree to the <span className="text-orange-500 text-md">Terms of Service </span>
               and <span className="text-orange-500 text-md">Privacy Policy</span>
               </span>
             </div>
                   </div>
             <button className=" bg-orange-600 text-white rounded-lg outline-none p-2 text-sm hover:bg-orange-500">
                   Continue
                    </button>
                   </div>
     </form>
         </div>
       </section>
  )
}

export default AccountSetUp
