import React from "react";
import { RiSofaLine } from "react-icons/ri";
import SimilarProperties from "./SimilarProperties";
import Room from "./Room";
import { Link, Element } from 'react-scroll';
import BottomBar from "./BottomBar";

function PropertyView() {
  return (
    <section className="flex items-center md:p-8  p-2  pt-4 w-full">
      <div className="flex flex-col items-center w-full">
        <div className="flex gap-x-2 md:flex-row flex-col w-full">
          <div className=" object-cover md:w-1/2 w-full">
            <img src="https://assets.scraye.com/photos/original-1024/67f69ba565bec4e49d7cb0a9_5f8aa959120ac22356242d7b2e7df23aba2f1aa7d150d7869b708fc6d3913153.jpg" />
          </div>
          <div className="md:w-1/2 w-full">
            <div className="flex gap-x-2">
              <div className=" object-cover">
                <img src="https://assets.scraye.com/photos/original-1024/67f69ba565bec4e49d7cb0a9_097779f775e90f4d120cebb20c0ab22914bc7cb38e6d504ff9dc4d5c02129201.jpg" />
              </div>
              <div className=" object-cover ">
                <img src="https://assets.scraye.com/photos/original-1024/67f69ba565bec4e49d7cb0a9_3552a95b7d224336a300eb965081d2a76c10570432f733bdfb0218cfc16fbf64.jpg" />
              </div>
            </div>
            <div className="flex gap-x-2 ">
              <div className=" object-cover ">
                <img src="https://assets.scraye.com/photos/original-1024/67f69ba565bec4e49d7cb0a9_b08c7786b33e3ea1ae5d00d4c240bd52265fc7587e109f8570f63b6eb0aea467.jpg" />
              </div>
              <div className=" object-cover ">
                <img src="https://assets.scraye.com/photos/original-1024/67f69ba565bec4e49d7cb0a9_175d41d6c7e3a277510f4b3e7efccb774f7aa7a89c649f195ebffcd8d3e8eadf.jpg" />
              </div>
            </div>
          </div>
        </div>
        <div className=" p-4 w-full">
          <div className="flex sticky top-0 bg-white p-4 pl-0 z-10 h-16 overflow-x-auto">
            <Link
              className="font-light p-4 py-2 pl-0"
              activeClass="text-orange-600 font-semibold border-b-2 border-orange-600"
              to="summary"
              spy={true}
              smooth={true}
              duration={500}
              offset={-64}
            >
              Summary
            </Link>
            <Link
              className="font-light p-4 py-2"
              activeClass="text-orange-600 font-semibold border-b-2 border-orange-600"
              to="payment"
              spy={true}
              smooth={true}
              duration={500}
              offset={-64}
            >
              Payment
            </Link>
            <Link
              className="font-light p-4 py-2"
              activeClass="text-orange-600 font-semibold border-b-2 border-orange-600"
              to="deposit"
              spy={true}
              smooth={true}
              duration={500}
              offset={-64}
            >
              Deposit
            </Link>
            {/* <Link
              className="font-light p-4 py-2"
              activeClass="text-orange-600 font-semibold border-b-2 border-orange-600"
              to="tour360"
              spy={true}
              smooth={true}
              duration={500}
            >
              360 tour
            </Link>
            <Link
              className="font-light p-4 py-2"
              activeClass="text-orange-600 font-semibold border-b-2 border-orange-600"
              to="videotour"
              spy={true}
              smooth={true}
              duration={500}
            >
              Video tour
            </Link> */}
            <Link
              className="font-light p-4 py-2"
              activeClass="text-orange-600 font-semibold border-b-2 border-orange-600"
              to="similar"
              spy={true}
              smooth={true}
              duration={500}
              offset={-64}
            >
              Similar
            </Link>
            <Link
              className="font-light p-4 py-2"
              activeClass="text-orange-600 font-semibold border-b-2 border-orange-600"
              to="rooms"
              spy={true}
              smooth={true}
              duration={500}
              offset={-64}
            >
              Rooms
            </Link>
            {/* <Link
              className="font-light p-4 py-2"
              activeClass="text-orange-600 font-semibold border-b-2 border-orange-600"
              to="location"
              spy={true}
              smooth={true}
              duration={500}
            >
              Location
            </Link>
            <Link
              className="font-light p-4 py-2"
              activeClass="text-orange-600 font-semibold border-b-2 border-orange-600"
              to="street"
              spy={true}
              smooth={true}
              duration={500}
            >
              Street
            </Link> */}
          </div>
          <div className=" ">
            <div className="flex md:gap-x-10 ">
              <div className="mt-5 md:w-[844px] w-full
              ">
                <Element name="summary">
                <h1 className="font-bold text-2xl text-wrap w-full">
                  Studio to rent on Victoria Road, London
                </h1>
                <div className=" flex items-center justify-around w-full flex-wrap mt-4">
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
                </Element>
                <Element name="payment" class=" mt-4 mb-8 border-t border-solid border-slate-200 pt-8">
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
                </Element>
                <Element name="deposit">
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
                        <li>
                          Rentify receives its deposit back at tenancy end
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                </Element>
                <Element name="price-viewing">
                <div className="md:hidden block">
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
                </Element>
                           
            <Element name="similar"> <SimilarProperties /></Element> 
            <Element name="rooms"> <Room /></Element>  
               
              </div>
              <div>
                <div className="sticky top-20 md:block hidden z-50 ">
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
      <BottomBar isVerified={true} price="1200"/>
    </section>
  );
}

export default PropertyView;
