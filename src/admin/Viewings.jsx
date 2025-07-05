import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Viewings() {
  return (
    <section className="flex p-8 pt-8 ">
      <div className="flex flex-col w-full ">
        <h1 className="font-bold text-xl">Viewings</h1>
        <div className="flex items-center">
          <div className="flex  flex-wrap md:gap-x-10 gap-x-3  gap-y-3 pt-2">
            <button className="rounded-md text-orange-500 border border-orange-500 p-1 hover:bg-orange-500 hover:text-white">
              Require Action
            </button>
            <button className="rounded-md text-orange-500 border border-orange-500 p-1 hover:bg-orange-500 hover:text-white">
              Upcoming
            </button>
            <button className="rounded-md text-white border border-orange-500 bg-orange-500 p-1 hover:bg-orange-500 ">
              Completed
            </button>
            <button className="rounded-md text-orange-500 border border-orange-500 p-1 hover:bg-orange-500 hover:text-white">
              Cancelled
            </button>
          </div>
        </div>
        <div class="mt-4 w-full overflow-auto rounded-md border border-solid border-slate-200 bg-white">
          <table class="w-full text-left">
            <thead>
              <tr>
                <th class="w-6"></th>
                <th class="p-2">Date</th>
                <th class="p-2">Time</th>
                <th class="p-2">Status</th>
                <th class="p-2">Address</th>
                <th class="p-2"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  colspan="6"
                  class="border-t border-solid border-slate-200 p-8 text-center"
                >
                  No viewings to show
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="mt-2 flex flex-row items-center justify-center gap-4">
          <button class="rounded-full bg-gray-200 p-2 hover:bg-sky-100 disabled:bg-transparent">
            <IoIosArrowBack />
          </button>
          <div>1</div>
          <button class="rounded-full bg-gray-200 p-2 hover:bg-sky-100 disabled:bg-transparent">
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Viewings;
