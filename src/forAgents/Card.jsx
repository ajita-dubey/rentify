import React from "react";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { LuBedDouble } from "react-icons/lu";
import { RxDimensions } from "react-icons/rx";

function Card(props) {
  return (
     <div className="border border-gray-400 shadow-md rounded-xl">
        <img
        src= {props.imgSrc}
          className="w-[370px] h-[200px] rounded-t-xl"
        />
        <div className=" flex flex-col gap-y-2 p-4">
          <p className="font-light"><span className="pr-2">Available now. {props.available}</span>{props.furnished ? "Furnished": "unfurnished"}</p>
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
      </div>
  );
}

export default Card;
