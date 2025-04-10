import React from "react";
import { MdCheck } from "react-icons/md";

function SellYourStock() {
  return (
    <section className="flex items-center justify-center md:p-8  md:pt-12 relative m-auto w-full max-w-[1265px] p-4">
      <div className="flex flex-col items-center ">
        <h1 className="font-semibold text-5xl pt-3 pb-5 text-center ">
          Plus,let or sell your stock via Rentify
        </h1>
        <div className="flex  pt-5 gap-5 rounded-lg pb-20 md:flex-row flex-col">
          <div className="border p-4 shadow-md rounded-md border-gray-300 max-w-[350px]">
            <h1 className="text-2xl  text-center font-bold">Lettings</h1>
            <h1 className="text-xl  pb-3 text-center">
              2.5%
              <span className="font-light text-sm"> + VAT</span>
            </h1>
            <p className="font-light pb-4 text-center">
              Everything you need to let fast.No let =no fee.
            </p>
            <div className="flex flex-col gap-y-2">
              <input
                type="text"
                placeholder="What is your email?"
                className=" rounded-lg p-2 border border-gray-400  "/>
              <button className=" bg-orange-600 text-white rounded-lg outline-none p-2  ">
                Enquire about Lettings
              </button>
            </div>
            <h1 className="pt-4 font-semibold ">Pick and mix any or all of the below:</h1>
            <div className="flex items-center gap-2 py-1"><MdCheck /><p className="font-light">Free professional phtotgraphy</p></div>
            <div className="flex items-center gap-2 py-1"><MdCheck /><p className="font-light">Viewings Monday-saturday</p></div>
            <div className="flex items-center gap-2 py-1"><MdCheck /><p className="font-light">Offer negotiation</p></div>
            <div className="flex items-center gap-2 py-1"><MdCheck /><p className="font-light ">Tennacy progression</p>
          </div>
          </div>
         <div className="border p-4 shadow-md rounded-md border-gray-300 max-w-[350px]">
            <h1 className="text-2xl text-center font-bold">Lettings Protect</h1>
            <h1 className="text-xl  pb-5 text-center">
              3.5%
              <span className="font-light text-sm"> + VAT</span>
            </h1>
            <p className="font-light text-center pb-4">
             Lettings plus up to 12 months rent
             gurarantee and 100k in legal expense cover.
            </p>
             <div className="flex flex-col gap-y-2">
              <input
                type="text"
                placeholder="What is your email?"
                className=" rounded-lg p-2 border border-gray-400  "/>
              <button className=" bg-orange-600 text-white rounded-lg outline-none p-2  ">
                Enquire about Protect
              </button>
            </div>
            <h1 className="pt-4 font-semibold ">Pick and mix any or all of the below:</h1>
            <div className="flex items-center gap-2 py-1"><MdCheck /><p className="font-light">Free professional phtotgraphy</p></div>
            <div className="flex items-center gap-2 py-1"><MdCheck /><p className="font-light">Viewings Monday-saturday</p></div>
             <div className="flex items-center gap-2 py-1"><MdCheck /><p className="font-light">Offer negotiation</p></div>
            <div className="flex items-center gap-2 py-1"><MdCheck /><p className="font-light ">Rent collection</p></div>
          <div className="flex items-center gap-2 py-1"><MdCheck /><p className="font-light ">12 months rent gurarantee</p></div>
          <div className="flex items-center gap-2 py-1"><MdCheck /><p className="font-light ">100k evictin legal expenses</p></div>
          <div className="flex items-center gap-2 py-1"><MdCheck /><p className="font-light ">Tennacy progression</p></div>
          <p className="font-light text-center pt-3">Subject to T&Cs </p></div>

          <div className="border p-4 shadow-md rounded-md border-gray-300 max-w-[350px]">
            <h1 className="text-2xl   font-bold text-center">Sales</h1>
            <h1 className="text-xl  pb-5 text-center"> 0.75%
              <span className="font-light text-sm"> + VAT</span>
            </h1>
            <p className="font-light text-center pb-4">
            Find a buyer via our extensive introducing agent network
            </p>
              <div className="flex flex-col gap-y-2">
              <input
                type="text"
                placeholder="What is your email?"
                className=" rounded-lg p-2 border border-gray-400  "
              />
              <button className=" bg-orange-600 text-white rounded-lg outline-none p-2  ">
                Enquire about Sales
              </button>
            </div>
            <h1 className="pt-4 font-semibold ">Pick and mix any or all of the below:</h1>
           
           <div className="flex items-center gap-2 py-1"> <MdCheck /><p className="font-light">Free professional phtotgraphy</p></div>
           <div className="flex items-center gap-2 py-1">  <MdCheck /> <p className="font-light">Viewings Monday-saturday</p></div>
           <div className="flex items-center gap-2 py-1">  <MdCheck /> <p className="font-light">Offer negotiation</p></div></div>
           </div>
        <button className=" bg-orange-600 text-white rounded-lg outline-none p-3  ">
          Get started in minutes
        </button>
        </div>
       </section>
  );
}

export default SellYourStock;
