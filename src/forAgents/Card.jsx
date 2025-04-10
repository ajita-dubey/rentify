import React from "react";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { LuBedDouble } from "react-icons/lu";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { RxDimensions } from "react-icons/rx";

function Card(props) {
  return (
    <div className="border border-gray-400 shadow-md rounded-xl relative">
      <img src={props.imgSrc} className="w-[370px] h-[200px] rounded-t-xl" />
      <div className=" flex flex-col gap-y-2 p-4">
        <p className="font-light">
          <span className="pr-2">Available now. {props.available}</span>
          {props.furnished ? "Furnished" : "unfurnished"}
        </p>
        <h1 className="text-xl font-bold">{props.location}</h1>
        <div className="flex items-center gap-x-3">
          <div className="flex items-center gap-x-1">
            <RxDimensions />
            <span> {props.size} ft</span>
          </div>
          <div className="flex items-center gap-x-1">
            <LuBedDouble />
            <span> {props.beds}</span>
          </div>
        </div>
        <div className="flex items-center text-lg gap-x-1">
          <FaIndianRupeeSign />
          <span className="font-bold ">{props.price}p.m</span>
        </div>
      </div>
      <div className="absolute top-[2px] right-1">
        <div className="flex items-center justify-center gap-x-1">
          {props.isVerified ? (
            <div class="flex flex-row items-center mb-0.5 h-[20px] rounded px-1 text-[11px] font-bold opacity-90 bg-sky-600 text-white">
              <div class="flex flex-row items-center pr-1">
                {" "}
                <RiVerifiedBadgeFill />
                Verified
              </div>
            </div>
          ) : null}
     { props.commission!=null?<div class="flex flex-row items-center mb-0.5 h-[20px] rounded px-1 text-[11px] font-bold opacity-90 bg-green-500 text-white">
            <div class="flex flex-row items-center pr-1">{props.commission}.00%Commission</div>
          </div>:null}
        </div>
      </div>
    </div>
  );
}

export default Card;
