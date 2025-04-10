import React from 'react'

function SearchTerms() {
  return (
     <section className=" flex  flex-col justify-center  md:p-8 p-2 ">
       <div className="flex  md:pb-6 py-3">
         <div className=" flex  gap-y-5  h-full md:w-1/2 px-2">
           <div>
             <h1 className='font-bold'>Other Search Terms</h1>
              <p className="font-light underline">Student-friendly flats and properties to rent in India</p>
               <p className="font-light underline">Pet-friendly flats and properties to rent in India</p>
              <p className="font-light underline">Flats and properties to rent for sharers in India</p>
              <p className="font-light underline">Flats and properties to rent in India with all bills included</p>
              <p className="font-light underline">Flats and properties with option for deposit free renting in India</p>
          </div>
         </div>
       </div>
  </section>
  )
}
export default SearchTerms
