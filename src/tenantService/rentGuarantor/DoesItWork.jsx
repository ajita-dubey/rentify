import React from 'react'

function DoesItWork() {
  return (
    <section className="flex items-center justify-center  pt-12 p-4 md:p-8  md:pt-12">
      <div className="flex flex-col items-center  ">
        <h1 className="font-semibold text-5xl pt-3 pb-7 text-center">How does it work?
        </h1>
        <p className="font-light text-center">
        Rentify can act as your India guarantor and help you rent a property you love. </p>

        <div className="flex md:flex-row flex-col  gap-x-6 pt-10  rounded-lg pb-20 ">
          <div className=" flex flex-col items-center   mt-2 md:mt-0 ">
            <div className=" flex items-center justify-center border-2 bg-gray-100 border-black rounded-full h-20 w-20">
              <span className="text-3xl">1</span>
            </div>
            <h1 className="text-2xl pt-3 pb-2 text-center">
            Make an offer on Rentify
            </h1>
            <p className="font-light text-center">
            When making an offer, you’ll have the option to select Rentify as your guarantor. </p>
            </div>
          <div className=" flex flex-col items-center mt-2 md:mt-0">
            <div className=" flex items-center justify-center border-2 bg-gray-100 border-black rounded-full h-20 w-20">
              <span className="text-3xl">2</span>
            </div>
            <h1 className="text-2xl pt-3 pb-2 text-center">
            Rentify guarantees your tenancy</h1>
          <p className="font-light  text-center">
          After you pass referencing, Rentify acts as the India guarantor for your tenancy.</p>
 </div>
          <div className=" flex flex-col items-center mt-2 md:mt-0">
            <div className=" flex items-center justify-center border-2 bg-gray-100 border-black rounded-full h-20 w-20">
              <span className="text-3xl">3</span>
            </div>
            <h1 className="text-2xl pt-3 pb-2 text-center">
            Pay a low, affordable fee instead
            </h1>
          <p className="font-light text-center">
          You pay a one-off fee.
            </p>
          </div>
         
        </div>
      </div>
    </section>
  )
}

export default DoesItWork
