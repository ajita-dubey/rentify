import React from 'react'
import TenantFind from './TenantFind'
import PropertyArchway from './PropertyArchway'
import LettingsAndManagement from './LettingsAndManagement'

function AboutArchway() {
  return (
    <>
    <section className=" flex flex-col items-center justify-center -z-10  relative pt-12 p-4 md:p-8  md:pt-12">
         <h1 className="font-semibold text-5xl text-center pt-3 pb-3 " >Lettings in Archway </h1>
       <h2 className='font-bold text-slate-600  text-lg text-center pb-5'>Learn about our tenant find and management services in Archway.
         </h2>
   <div className="flex  items-center justify-center gap-x-10 h-full">
      <div className=" flex flex-col justify-center gap-y-5  p-5 h-full md:w-1/2">
       <div className=''>
          <h2 className="font-bold text-3xl text-center pb-2"> About Archway</h2> 
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam laboriosam et ad id est assumenda consequatur, dolor earum obcaecati pariatur doloribus magni enim dicta dignissimos recusandae unde voluptatibus amet quidem natus accusantium voluptatum commodi qui. Eligendi rerum error dolore. Commodi hic aspernatur quasi sapiente nam, numquam ut. Eius, facere quos.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda omnis recusandae porro voluptas sint, in excepturi quisquam repudiandae ab, rem sed? Illo et obcaecati a debitis odit eum consequuntur totam!
          </p>
         </div>

     </div>
     </div>
   </section>
   <TenantFind/>
   <PropertyArchway/>
   <LettingsAndManagement/>
   </>
  )
}

export default AboutArchway
