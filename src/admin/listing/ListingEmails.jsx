import React from 'react'

function ListingEmails() {
  return (
   <section className="flex justify-center items-center p-8  w-full">
         <div className="flex   items-center p-5 w-[500px] border rounded-md shadow-md border-zinc-300">
           <form className="flex flex-col w-full">
             <h1 className="font-semibold text-2xl pb-3">Listing commission emails</h1>
             <h3 className=" font-light text-sm pb-3">Select all of the areas that you want to receive 
                commission opportunities for.</h3>
             <div className="flex flex-col gap-y-2">
             <input
               type="text"
               placeholder="Search for an area.eg.India"
               className=" rounded-lg p-2  border border-gray-400  text-sm "
             />
             <hr className='mt-2'></hr>
             <p className='text-md'>We will send you emails for the following areas:</p>
            
             </div>
                <div className='pt-2'>
                 <button className='bg-gray-200 rounded-md p-2 text-sm'>India</button>
                 </div>
   
     </form>
         </div>
       </section>
  )
}

export default ListingEmails
