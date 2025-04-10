import React from 'react'
import { FaCircleCheck } from 'react-icons/fa6'

function HowToQualify() {
  return (
    <section className="relative m-auto w-full max-w-[1265px] p-4">
      <div  class="py-10 md:py-20">
      <div>
        <h1 class="m-auto mb-6 max-w-[22ch] text-center text-4xl font-bold md:text-5xl">
              How to qualify
        </h1>
        <h2 class="text-center text-lg text-slate-700">
          Have the peace of mind of getting paid reliably, even if your tenant
          doesn’t pay on time. T&amp;Cs apply.
        </h2>
        <div class="py-12">
          <h3 class="mb-2 text-2xl font-bold">How do we do this?</h3>
          <div class="relative mx-auto mb-5 grid w-full grid-cols-1 gap-10  md:grid-cols-2">
            <div>
              <li class=" flex relative mt-2 list-none">
                <FaCircleCheck className="text-green-400" size={30} />
                <div class="pl-2">
                  <h5 class="mb-1 text-xl font-bold">
                    We thoroughly reference every tenant
                  </h5>
                  <span class="text-gray-700">
                    We ensure each tenant passes comprehensive referencing so
                    you can make an informed choice regarding who to let to.
                  </span>
                </div>
              </li>
              <li class=" flex relative mt-2 list-none">
                <FaCircleCheck className="text-green-400" size={30} />
                <div class="pl-2">
                  <h5 class="mb-1 text-xl font-bold">
                    We pay rent if your tenant hasn’t paid by the due date
                  </h5>
                  <span class="text-gray-700">
                    We remind your tenant to pay on time. If they miss the due
                    date, we pay on their behalf and then recoup the rent
                    directly from them.
                  </span>
                </div>
              </li>
              <li class="flex relative mt-2 list-none">
                <FaCircleCheck className="text-green-400" size={50} />
                <div class="pl-2">
                  <h5 class="mb-1 text-xl font-bold">
                    Insurance, just in case
                  </h5>
                  <span class="text-gray-700">
                    Most arrears are temporary and resolvable. In the rare case
                    where your tenant stops paying rent entirely, your tenancy
                    is protected with rent insurance for up to 12 months plus
                    legal expense cover from a top-tier insurer.
                  </span>
                </div>
              </li>
            </div>
            <div>
              <img
                alt=""
                class="ml-auto w-full rounded-md object-cover marker:max-w-full md:max-h-[300px]"
                src="src/assets/void-payments.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default HowToQualify
