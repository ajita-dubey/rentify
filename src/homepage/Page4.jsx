import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { LuClock4 } from "react-icons/lu";
import { MdCurrencyPound } from "react-icons/md";
import { GoVerified } from "react-icons/go";

function Page4(props) {
  return (
    <section className="flex items-center justify-center p-8 pt-12">
      <div className="flex flex-col items-center justify-center ">
      { props.optionTrue ?  <h1 className="font-semibold text-4xl pt-3 text-center max-w-[22ch]">Making renting simple</h1>:null}
        <div className="flex  pt-5 gap-5 rounded-lg pb-4 md:flex-row flex-col">
          <div className="border p-5">
            <GoVerified size={25} />
           <h1 className="text-2xl pb-5">Verified and uniques listings</h1>
            <p className="font-light">
              Look our for the Verified badge-photos,video tour </p>
            <p className="font-light">
              and floor plans for checked for reliability.One listing per </p>
            <p className="font-light">property.</p>
          </div>

          <div className="border p-5">
            <LuClock4 size={25} />
            <h1 className="text-2xl pb-5">Book viewings with a click</h1>
            <p className="font-light">
              Schedule viewings online in seconds.Book instantly
            </p>
            <p className="font-light pb-5">
              and same-day for properties with the lightning badge.
            </p>
          </div>

          <div className="border p-5">
            <MdCurrencyPound size={25} />
           <h1 className="text-2xl pb-5">Option for deposite free renting</h1>
            <p className="font-light">
              Lower your cost of renting by having Rentify pay the</p>
            <p className="font-light">
              security deposit to the landlord.You pay a simple, </p>
            <p className="font-light pb-5">affordable fee instead</p>
            <button className="text-red-500 flex gap-2 items-center cursor-pointer ">
              <span>Learn more</span>
              <span>
                <FaRegArrowAltCircleRight />
              </span>
            </button>
          </div>
        </div>
     <button className=" bg-orange-600 text-white rounded-lg outline-none p-3 ml-3 cursor-pointer ">
          Search properties for rent
        </button>
      </div>
    </section>
  );
}

export default Page4;
