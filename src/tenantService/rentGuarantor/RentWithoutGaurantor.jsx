import React from "react";
import DoesItWork from "./DoesItWork";
import HowMuchCost from "./HowMuchCost";
import RentGuarantorFaq from "./RentGuarantorFaq";

function RentWithoutGaurantor() {
  return (
    <>
      <section className=" flex items-center justify-center bg-green-200 relative p-4 md:p-8  md:pt-12">
        <div className=" max-w-[1265px]">
          <div className="flex md:flex-row flex-col w-full  gap-x-10 h-full ">
            <div className=" flex flex-col justify-center gap-y-5  p-5 h-full md:w-1/2 ">
              <div>
                <h1 className="font-semibold text-4xl pb-6 md:text-left text-center">
                  Renting without a guarantor? We can help.{" "}
                </h1>
                <p className="font-light pb-8 md:text-left text-center">
                  Rentify can act as your guarantor so you can rent the property
                  you love.{" "}
                </p>
                <div className="w-full md:w-auto ">
                  <button className=" bg-orange-600 text-white rounded-lg outline-none p-3 w-full md:w-auto">
                    Search properties
                  </button>
                </div>
              </div>
            </div>
            <div className=" pt-4 md:w-1/2">
              <img src="src/assets/banner.jpg" className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>
      <DoesItWork />
      <HowMuchCost />
      <RentGuarantorFaq />
    </>
  );
}

export default RentWithoutGaurantor;
