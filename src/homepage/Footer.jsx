import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";


function Footer() {
  return (
    <section className=" p-8 pt-12  bg-slate-100">
      <div className="flex flex-col items-start">
        <div className="flex   justify-center  w-full gap-x-32 ">
          <div className="flex flex-col">
            <div className="flex justify-start  gap-x-11 pb-4 h-full">
              <div>
                <h1 className="font-semibold text-xl">Rentify</h1>
                <p className="hover:outline">The better way to rent .Explore clear</p>
                <p className="hover:outline">proflies.Book viewings instantly.simple</p>
                <p className="hover:outline">from search to move on-in.</p>
              </div>
              <div>
                <h1 className="font-semibold text-xl">Contact Us</h1>
                <div className="flex gap-x-1 items-center"> <FaRegEnvelope />
                <span className="hover:outline">hello@rentify.com</span></div>
                <div  className="flex gap-x-1 items-center"> <IoCallOutline />
               <span className="hover:outline"> +9134576872334</span></div>
              </div>
            </div>
            <p>registered in india</p>
          </div>

          <div className="flex  justify-start gap-x-11  pb-4 h-full ">
            <div>
              <h1 className="font-semibold text-xl">Our Sevices</h1>
              <p className="hover:outline">Agents</p>
              <p className="hover:outline">Let | Sell</p>
              <p className="hover:outline">Advanced Rent</p>
              <p className="hover:outline">Option for deposit free renting</p>
              <p className="hover:outline">Rewards</p>
              <p className="hover:outline">Refer</p>
            </div>
            <div>
              <h1 className="font-semibold text-xl">Information</h1>
              <p className="hover:outline">Privacy Policy</p>
              <p className="hover:outline">terms of Service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
