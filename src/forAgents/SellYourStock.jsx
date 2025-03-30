import React from "react";
import { MdCheck } from "react-icons/md";

function SellYourStock() {
  return (
    <section className="flex items-center justify-center  p-8 pt-12">
      <div className="flex flex-col items-center ">
        <h1 className="font-semibold text-5xl pt-3 ">
          Plus,let or sell your stock via
        </h1>
        <h1 className="font-semibold text-5xl  pb-5">Rentify</h1>
        <div className="flex  pt-5 gap-5 rounded-lg pb-20">
          <div className="border p-5">
            <h1 className="text-2xl  text-center">Lettings</h1>
            <h1 className="text-2xl  pb-3 text-center">
              2.5%
              <span className="font-light text-sm"> + VAT</span>
            </h1>
            <p className="font-light">
              Everything you need to let fast.No let =no
            </p>
            <p className="font-light text-center pb-4">fee.</p>
            <div className="flex flex-col gap-y-2">
              <input
                type="text"
                placeholder="what is your email?"
                className=" rounded-lg p-2 border border-gray-400  "/>
              <button className=" bg-red-700 text-white rounded-lg outline-none p-2  ">
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

          <div className="border p-5">
            <h1 className="text-2xl text-center">Lettings Protect</h1>
            <h1 className="text-2xl  pb-5 text-center">
              3.5%
              <span className="font-light text-sm"> + VAT</span>
            </h1>
            <p className="font-light text-center">
             Lettings plus up to 12 months rent
            </p>
            <p className="font-light pb-4 ">
              gurarantee and 100k in legal expense cover.
            </p>
             <div className="flex flex-col gap-y-2">
              <input
                type="text"
                placeholder="what is your email?"
                className=" rounded-lg p-2 border border-gray-400  "/>
              <button className=" bg-red-700 text-white rounded-lg outline-none p-2  ">
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

          <div className="border p-5">
            <h1 className="text-2xl    text-center">Sales</h1>
            <h1 className="text-2xl  pb-5 text-center"> 0.75%
              <span className="font-light text-sm"> + VAT</span>
            </h1>
            <p className="font-light">
             Find a buyer via our extensive introducing
            </p>
            <p className="font-light text-center pb-4">
             agent network
            </p>
              <div className="flex flex-col gap-y-2">
              <input
                type="text"
                placeholder="what is your email?"
                className=" rounded-lg p-2 border border-gray-400  "
              />
              <button className=" bg-red-700 text-white rounded-lg outline-none p-2  ">
                Enquire about Sales
              </button>
            </div>
            <h1 className="pt-4 font-semibold ">Pick and mix any or all of the below:</h1>
           
           <div className="flex items-center gap-2 py-1"> <MdCheck /><p className="font-light">Free professional phtotgraphy</p></div>
           <div className="flex items-center gap-2 py-1">  <MdCheck /> <p className="font-light">Viewings Monday-saturday</p></div>
           <div className="flex items-center gap-2 py-1">  <MdCheck /> <p className="font-light">Offer negotiation</p></div></div>
           </div>
        <button className=" bg-red-700 text-white rounded-lg outline-none p-3  ">
          Get started in minutes
        </button>
        </div>
       </section>
  );
}

export default SellYourStock;
