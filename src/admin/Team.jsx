import React from "react";
import { FaRegEnvelope } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";

function Team() {
  return (
    <section className=" pt-8  gap-x-5 w-full md:p-8 p-4">
       <div className="flex flex-col-reverse md:flex-row w-full gap-3">
        <div className="flex flex-col w-full">
        <h1 className="font-bold text-xl">Team members</h1>
          <div className="flex  flex-col items-center w-full">
            <div className="flex  gap-x-2 pt-2 w-full">
              <button className="rounded-md text-white bg-orange-600 border border-orange-500 p-1 w-full hover:bg-orange-500">
                Active
              </button>
              <button className="rounded-md text-orange-500 border border-orange-500 p-1 w-full hover:bg-orange-500 hover:text-white">
                Inactive
              </button>
            </div>
          </div>
          <div className="pt-2">
            <div className="flex justify-between shadow-md p-3 m-2 bg-white rounded-md">
              <div className="flex flex-col">
                <div className="flex items-center gap-x-1">
                  {" "}
                  <p className="font-bold text-sm ">Avika</p>
                  <div class="hidden md:flex">
                    <p
                      class="flex h-6 flex-row items-center gap-1 rounded-md px-2 py-0.5 text-xs 
                font-bold text-white bg-sky-500"
                    >
                      Agency owner
                    </p>
                  </div>
                </div>
                <p>Online: 0 Sec Ago</p>
              </div>
              <div className="flex items-center md:gap-x-10 gap-3">
                <span className="text-orange-600">
                  <FaRegEnvelope />
                </span>
                <span className="text-orange-600">
                  <IoCallOutline />
                </span>
                <span className="text-orange-600">Disable</span>
              </div>
            </div>
          </div>
        </div>
      <div className="flex flex-col md:w-[600px] p-2 ">
        <h1 className="font-semibold text-xl">Invited team members</h1>
        <p className="font-light pt-2">
          To invite a team member,enter their eamil address below.
        </p>
        <div className="flex flex-col pt-2 gap-y-2">
          <input
            type="email"
            placeholder="Email address"
            className=" rounded-lg p-2  border border-gray-400 text-sm pt-2 "
          />
          <button className=" bg-orange-600 text-white rounded-lg outline-none p-2 text-sm  hover:bg-orange-500">
            Send invitation
          </button>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Team;
