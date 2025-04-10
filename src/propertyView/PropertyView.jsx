import React from "react";
import { RiSofaLine } from "react-icons/ri";
import SimilarProperties from "./SimilarProperties";
import Room from "./Room";


function PropertyView() {
  return (
    <section className="flex items-center p-8  pt-12">
      <div className="flex flex-col items-center">
        <div className="flex gap-x-2 p-8">
          <div className=" object-cover md:w-1/2">
            <img src="src/assets/bedroom.jpg" />
          </div>
          <div className="md:w-1/2">
            <div className="flex gap-x-2">
              <div className=" object-cover">
                <img src="src/assets/kitchen.jpg" />
              </div>
              <div className=" object-cover ">
                <img src="src/assets/bathroom.jpg" />
              </div>
            </div>
            <div className="flex gap-x-2 ">
              <div className=" object-cover ">
                <img src="src/assets/building.jpg" />
              </div>
              <div className=" object-cover ">
                <img src="src/assets/living area.jpg" />
              </div>
            </div>
          </div>
        </div>
        <div className=" p-8 w-full">
          <div className="flex gap-x-8">
            <span className="font-light p-4">Summary</span>
            <span className="font-light p-4">Payment</span>
            <span className="font-light p-4">Deposit</span>
            <span className="font-light p-4">360 tour</span>
            <span className="font-light p-4">Video tour</span>
            <span className="font-light p-4">Similar</span>
            <span className="font-light p-4">Rooms</span>
            <span className="font-light p-4">Loaction</span>
            <span className="font-light p-4">Street</span>
          </div>
          <div>
            <div className="flex gap-x-10">
              <div className="mt-5 w-[844px]">
                <h1 className="font-bold text-xl">
                  Studio to rent on Victoria Road, London
                </h1>
                <div className=" flex items-center  flex-wrap gap-3 mt-4">
                  <div className="flex items-center gap-x-5">
                    <RiSofaLine size={35} />
                    <span>Furnished</span>
                  </div>
                  <div className="flex items-center gap-x-5">
                    <RiSofaLine size={35} />
                    <span>Furnished</span>
                  </div>
                  <div className="flex items-center gap-x-5">
                    <RiSofaLine size={35} />
                    <span>Furnished</span>
                  </div>
                  <div className="flex items-center gap-x-5">
                    <RiSofaLine size={35} />
                    <span>Furnished</span>
                  </div>
                  <div className="flex items-center gap-x-5">
                    <RiSofaLine size={35} />
                    <span>Furnished</span>
                  </div>
                  <div className="flex items-center gap-x-5">
                    <RiSofaLine size={35} />
                    <span>Furnished</span>
                  </div>
                  <div className="flex items-center gap-x-5">
                    <RiSofaLine size={35} />
                    <span>Furnished</span>
                  </div>
                  <div className="flex items-center gap-x-5">
                    <RiSofaLine size={35} />
                    <span>Furnished</span>
                  </div>
                  <div className="flex items-center gap-x-5">
                    <RiSofaLine size={35} />
                    <span>Furnished</span>
                  </div>
                  <div className="flex items-center gap-x-5">
                    <RiSofaLine size={35} />
                    <span>Furnished</span>
                  </div>
                  <div className="flex items-center gap-x-5">
                    <RiSofaLine size={35} />
                    <span>Furnished</span>
                  </div>
                  <div className="flex items-center gap-x-5">
                    <RiSofaLine size={35} />
                    <span>Furnished</span>
                  </div>
                  <div className="flex items-center gap-x-5">
                    <RiSofaLine size={35} />
                    <span>Furnished</span>
                  </div>
                  <div className="flex items-center gap-x-5">
                    <RiSofaLine size={35} />
                    <span>Furnished</span>
                  </div>
                  <div className="flex items-center gap-x-5">
                    <RiSofaLine size={35} />
                    <span>Furnished</span>
                  </div>
                  <div className="flex items-center gap-x-5">
                    <RiSofaLine size={35} />
                    <span>Furnished</span>
                  </div>
                  <div className="flex items-center gap-x-5">
                    <RiSofaLine size={35} />
                    <span>Furnished</span>
                  </div>
                  <div className="flex items-center gap-x-5">
                    <RiSofaLine size={35} />
                    <span>Furnished</span>
                  </div>
                </div>
                <div className="mt-5">
                  <h2 className="font-bold text-lg">
                    About this flat on Olympic Way
                  </h2>
                  <p className="font-light pt-1">
                    Presenting a flat to rent in Madison East, Wembley. The
                    property is on Olympic Way and comprises 2 bedrooms, 1
                    bathroom and 1 WC.
                  </p>
                  <p className="font-light pt-4">
                    *Promotion - Please note the price shown only applies to
                    12-month tenancies with move-in dates in the next 30 days.
                    If the move-in is after 30 days, the rent will be £3,436
                    pcm.
                  </p>
                  <p className="font-light pt-4">
                    Available now, covering 913 sq ft in living space and
                    situated on the first floor, this modern property comes with
                    big windows, high ceilings and ample storage. The property
                    also benefits from a private balcony and communal terrace.
                    Residents can further enjoy a gym in the building, as well
                    as a video entry system.
                  </p>
                  <p className="font-light pt-4">
                    Further features and amenities include:
                  </p>
                  <p className="font-light">- Fully fitted kitchen</p>
                  <p className="font-light">- Freezer</p>
                  <p className="font-light">- Lift</p>
                  <p className="font-light">- Concierge</p>
                  <p className="font-light">- Superfast Wi-F</p>
                  <p className="font-light">- Dog park</p>
                  <p className="font-light">- Meeting rooms</p>
                  <p className="font-light">- Bike storage</p>
                  <p className="font-light">- Social spaces</p>
                  <p className="font-light">
                    - Pet-friendly, subject to the type of pet.
                  </p>
                  <p className="font-light pt-4">Please note:</p>
                  <p className="font-light">
                    - Utilities are billed at an average of £140pcm for a 2 bed.
                    Recalculated quarterly, should you use more than the
                    allotted amount of utilities you will receive a bill for the
                    difference and if you underuse, a credit will be issued.
                  </p>
                  <p className="font-light pt-4">
                    - Wi-Fi is included in the rent. Council tax not included.
                  </p>
                  <p className="font-light pt-4">
                    The flat is under the council tax band of D. The property is
                    located only moments away from Wembley Stadium Station.
                  </p>
                  <div className="flex flex-col">
                    <h2 className="font-bold text-lg pt-4">
                      Additional Information
                    </h2>
                    <p className="font-light">EPC rating: B</p>
                    <p className="text-orange-500 underline">
                      Listing Disclaimer
                    </p>
                    <p className="text-orange-500 underline">
                      How to Rent Guide
                    </p>
                  </div>
                  <div>
                    <h2 className="font-bold text-lg pt-4">Recent Activity</h2>
                    <div>
                      <div className="flex flex-row gap-x-16 pt-2">
                        <div className="font-bold text-sm">12 min ago</div>
                        <div className="text-sm">
                          Listing Availability confrimed
                        </div>
                      </div>
                      <div>
                        <div className="flex flex-row gap-x-16">
                          <div className="font-bold text-sm">12 min ago</div>
                          <div className="text-sm">
                            Listing Availability confrimed
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex flex-row gap-x-16">
                          <div className="font-bold text-sm">12 min ago</div>
                          <div className="text-sm">
                            Listing Availability confrimed
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex flex-row gap-x-16">
                          <div className="font-bold text-sm">12 min ago</div>
                          <div className="text-sm">
                            Listing Availability confrimed
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex flex-row gap-x-16">
                          <div className="font-bold text-sm">12 min ago</div>
                          <div className="text-sm">
                            Listing Availability confrimed
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class=" mt-4 mb-8 border-t border-solid border-slate-200 pt-8">
                  <h3 class="mb-8 text-center text-2xl font-bold">
                    Rent payment options
                  </h3>
                  <div class="">
                    <div>
                      <div class="flex min-h-12 flex-col items-center justify-between border-b-2 border-solid border-b-slate-200 py-1 md:flex-row">
                        <p class="w-full text-left font-bold md:w-[33%]"></p>
                        <div class="flex w-full">
                          <h5 class="w-[33%] text-center font-bold">
                            Pay monthly
                          </h5>
                          <h5 class="w-[33%] text-center font-bold">
                            Payment upfront
                          </h5>
                        </div>
                      </div>
                      <div class="flex min-h-12 flex-col items-center justify-between bg-slate-50 py-1 md:flex-row">
                        <p class="w-full pl-2 text-left text-lg font-bold md:w-[33%]">
                          Rent payment
                        </p>
                        <div class="flex w-full">
                          <p class="w-full text-center text-lg font-bold md:w-[33%]">
                            £4,800pcm
                          </p>
                          <p class="w-full text-center text-lg font-bold md:w-[33%]">
                            £28,800 for 6 months
                          </p>
                        </div>
                      </div>
                      <div class="flex min-h-12 flex-col items-center justify-between py-1 md:flex-row">
                        <p class="w-full pl-2 text-left font-bold md:w-[33%]">
                          Valid ID
                        </p>
                        <div class="flex w-full">
                          <p class="w-full text-center md:w-[33%]">Required</p>
                          <p class="w-full text-center md:w-[33%]">Required</p>
                        </div>
                      </div>
                      <div class="flex min-h-12 flex-col items-center justify-between bg-slate-50 py-1 md:flex-row">
                        <p class="w-full pl-2 text-left font-bold md:w-[33%]">
                          {" "}
                          Valid Right-to-Rent
                        </p>
                        <div class="flex w-full">
                          <p class="w-full text-center md:w-[33%]">Required</p>
                          <p class="w-full text-center md:w-[33%]">Required</p>
                        </div>
                      </div>
                      <div class="flex min-h-12 flex-col items-center justify-between py-1 md:flex-row">
                        <p class="w-full pl-2 text-left font-bold md:w-[33%]">
                          Proof of income or studies
                        </p>
                        <div class="flex w-full">
                          <p class="w-full text-center md:w-[33%]">Required</p>
                          <p class="w-full text-center md:w-[33%]">Required</p>
                        </div>
                      </div>
                      <div class="flex min-h-12 flex-col items-center justify-between bg-slate-50 py-1 md:flex-row">
                        <p class="w-full pl-2 text-left font-bold md:w-[33%]">
                          {" "}
                          UK-based income
                        </p>
                        <div class="flex w-full">
                          <p class="w-full text-center md:w-[33%]">
                            Either £144,000pa
                          </p>
                          <p class="w-full text-center md:w-[33%]">-</p>
                        </div>
                      </div>
                      <div class="flex min-h-12 flex-col items-center justify-between py-1 md:flex-row">
                        <p class="w-full pl-2 text-left font-bold md:w-[33%]">
                          {" "}
                          UK guarantor income
                        </p>
                        <div class="flex w-full">
                          <p class="w-full text-center md:w-[33%]">
                            or £172,800pa
                          </p>
                          <p class="w-full text-center md:w-[33%]">-</p>
                        </div>
                      </div>
                      <div class="flex min-h-12 flex-col items-center justify-between bg-slate-50 py-1 md:flex-row">
                        <p class="w-full pl-2 text-left font-bold md:w-[33%]">
                          Foreign guarantor income
                        </p>
                        <div class="flex w-full">
                          <p class="w-full text-center md:w-[33%]">
                            Not considered
                          </p>
                          <p class="w-full text-center md:w-[33%]">-</p>
                        </div>
                      </div>
                      <div class="flex min-h-12 flex-col items-center justify-between py-1 md:flex-row">
                        <p class="w-full pl-2 text-left font-bold md:w-[33%]">
                          Adverse credit
                        </p>
                        <div class="flex w-full">
                          <p class="w-full text-center md:w-[33%]">
                            No active CCJ
                          </p>
                          <p class="w-full text-center md:w-[33%]">-</p>
                        </div>
                      </div>
                    </div>
                    <p class="p-1 text-slate-400">
                      The Scraye Guarantor service incurs a fee of £2,304 (12
                      months tenancy).{" "}
                      <span class="hover:underline">Learn more.</span>
                    </p>
                  </div>
                </div>
                <div class="mb-8 border-t border-solid border-slate-200 pt-8">
                  <h3 class="mb-8 text-center text-2xl font-bold">
                    Security deposit
                  </h3>
                  <div class="mt-4 grid w-full grid-cols-1 gap-8 md:grid-cols-2">
                    <div class="rounded-md border border-solid border-slate-200 p-4">
                      <h3 class="text-center text-lg font-bold">
                        Standard Deposit
                      </h3>
                      <p class="mt-2 text-center text-lg font-bold">
                        £5,538.46
                      </p>
                      <h5 class="mt-4 font-bold">How it works:</h5>
                      <ul class="list-inside list-disc text-slate-400 ">
                        <li>Free for tenant</li>
                        <li>Security deposit of £5,538.46 paid by tenant</li>
                        <li>Deposit refunded to tenant at tenancy end</li>
                        <li>Refund subject to any deductions</li>
                      </ul>
                    </div>
                    <div class="relative rounded-md border border-solid border-slate-200 p-4">
                      <span class="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-md bg-green-500 px-4 py-0.5 text-xs text-white">
                        35% lower move-in costs
                      </span>
                      <h3 class="text-center text-lg font-bold">
                        Deposit Free
                      </h3>
                      <p class="mt-2 text-center text-lg font-bold">
                        £1,971.69
                      </p>
                      <h5 class="mt-4 font-bold">How it works:</h5>
                      <ul class="list-inside list-disc text-slate-400 ">
                        <li>Fee of £1,971.69 instead of £5,538.46 deposit</li>
                        <li>Security deposit of £5,538.46 paid by Rentify</li>
                        <li>Rentify receives its deposit back at tenancy end</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <SimilarProperties/>
                <Room/>
              </div>
              <div>
              <div className="sticky top-20 block ">
                <div class="relative mb-8 w-full rounded-xl border border-solid border-slate-300 p-4 md:max-w-[340px]">
                  <div class="flex flex-col gap-4">
                    <div class="flex flex-col">
                      <div class="flex flex-row flex-wrap justify-between">
                        <p class="text-lg font-bold">Price</p>
                        <p class="text-lg font-bold">£4,800pcm</p>
                      </div>
                      <div class="flex flex-row flex-wrap justify-between">
                        <p>Available</p>
                        <p>April 18, 2025</p>
                      </div>
                    </div>
                    <hr />
                    <div class="flex flex-row gap-1 rounded-md border border-solid border-slate-300 p-1">
                      <div class="flex flex-1 justify-center">
                        <button class="w-full rounded p-2 text-center font-bold text-gray-500 hover:bg-gray-100">
                          With Deposit
                        </button>
                      </div>
                      <div class="flex flex-1 justify-center">
                        <button class="w-full rounded p-2 text-center font-bold hover:bg-gray-100 bg-[#00769a1f] text-[#00769a]">
                          Deposit Free
                        </button>
                      </div>
                    </div>
                    <p class="flex flex-col gap-1">
                      <div class="flex flex-row flex-wrap justify-between">
                        <p>Deposit Free fee</p>
                        <p>£1,971.69</p>
                      </div>
                      <div class="flex flex-row flex-wrap justify-between">
                        <p class="text-base font-bold">
                          Security deposit from tenant
                        </p>
                        <p class="text-base font-bold">£0</p>
                      </div>
                      <hr class="my-2" />
                      <div class="flex flex-row flex-wrap justify-between">
                        <p>Security deposit from Renitfy</p>
                        <p>£5,538.46</p>
                      </div>
                    </p>
                  </div>
                  <div class="mt-2 flex flex-col gap-1">
                    <hr class="my-2 w-full" />
                    <span>
                      To arrange a viewing, please contact us at{" "}
                      <a class="underline" href="tel:+442038354300">
                        +442038354300
                      </a>{" "}
                      or{" "}
                      <a class="underline" href="mailto:hello@scraye.com">
                        hello@rentify.com
                      </a>
                      .
                    </span>
                    <hr class="my-2 w-full" />
                    <span
                      class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium 
                    transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border
                     border-solid  border-orange-700
                 bg-white text-orange-700 shadow-sm hover:bg-red-50 active:text-scraye-orange disabled:border-slate-300
                  disabled:text-slate-900
                   cursor-pointer   h-9 px-3 py-2"
                    >
                      Make an offer
                    </span>
                  </div>
                </div>
              </div>
              </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PropertyView;
