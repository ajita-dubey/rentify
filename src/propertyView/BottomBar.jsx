import React from 'react';
import { MdOutlineVerified } from 'react-icons/md';
import { Link } from 'react-scroll';

const BottomBar = (props) => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-10 bg-slate-50 md:hidden">
      <div className="relative border-t border-solid border-slate-200 px-4 py-2">
        {/* Verified badge */}
      {props.isVerified?  <span className="absolute left-1/2 top-0 py-1 flex -translate-x-1/2 -translate-y-1/2 items-center
       justify-center rounded-md bg-green-300 px-2 text-xs font-bold text-green-800">
          <MdOutlineVerified />
          <span>Verified</span>
        </span> :null}

        {/* Price */}
        <h3 className="pb-1 my-2 text-lg font-bold">Rs.{props.price}per month</h3>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-2">
            <Link to='price-viewing' className='w-full'>
            <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium 
            transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-orange-500
             text-white hover:bg-orange-600 hover:text-white active:text-white disabled:bg-slate-300 disabled:text-slate-900
              h-9 px-3 py-2"
            type="button"
          >
            Viewing
          </button>
            </Link>
            <a
            href="/listings/66864d0d4a232c58a398f2bf/offer"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-solid border-orange-500 bg-white text-orange-500 shadow-sm hover:bg-orange-50 active:text-orange-500 disabled:border-slate-300 disabled:text-slate-900 h-9 px-3 py-2"
          >
            Offer
          </a>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;