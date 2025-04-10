import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { GrShieldSecurity } from 'react-icons/gr'
import { IoSettingsOutline } from 'react-icons/io5'
import { LuClock4 } from 'react-icons/lu'
import { MdCurrencyPound } from 'react-icons/md'

function RentPaidSoon() {
  return (
    <section className=" flex items-center justify-center relative m-auto w-full max-w-[1265px] p-4">
      <div className="flex flex-col items-center ">
        <div className="flex md:flex-row flex-col pt-5 gap-5 rounded-lg pb-20">
          <div className="border p-4 rounded-md border-gray-200 shadow-md">
            <LuClock4 size={25} />
           <h1 className="text-2xl pt-3 pb-5">
            Get your rent paid sooner </h1>
            <p className="font-light pt-2">
            Even when your tenant pays monthly, you can get paid
            3-, 6- or 12 months upfront. </p>
          </div>
         <div className="border p-4 rounded-md border-gray-200 shadow-md">
            <GrShieldSecurity size={25} />
            <h1 className="text-2xl pt-3 pb-5">Tenants continue to pay monthly </h1>
            <p className="font-light">
            Your tenants still pay monthly and won’t feel the
            difference whilst you receive rent upfront
            </p>
          </div>
       <div className="border p-4 rounded-md border-gray-200 shadow-md">
            <MdCurrencyPound size={25} />
              <h1 className="text-2xl  pt-3 pb-5">
              Available on both existing and new 
              <h1>tenancies</h1> </h1>
            <p className="font-light">
            Get Advanced Rent on any tenancy, existing or new,
            regardless of whether rented via Rentify.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RentPaidSoon
