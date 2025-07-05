import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Offers() {
  return (
    <section className="flex p-8 pt-8 w-full ">
      <div className="flex flex-col w-full ">
        <h1 className="font-bold text-2xl">Offers </h1>
        <div className="flex items-center">
          <div className="flex  gap-x-2 pt-2">
            <button className="rounded-md text-orange-500 border border-orange-500 p-1">
              Pending
            </button>
            <button className="rounded-md text-orange-500 border border-orange-500 p-1">
              Accepted
            </button>
            <button className="rounded-md text-white border border-orange-500 bg-orange-500 p-1">
              Declined
            </button>
          </div>
        </div>
        <div>
          <div class="mt-4 w-full overflow-auto rounded-md border border-solid border-slate-200 bg-white">
            <table class="w-full text-left">
              <thead>
                <tr>
                  <th class="whitespace-nowrap p-2">Status</th>
                  <th class="whitespace-nowrap p-2">Time</th>
                  <th class="whitespace-nowrap p-2">Listing</th>
                  <th class="whitespace-nowrap p-2">Asking rent</th>
                  <th class="whitespace-nowrap p-2">Rent offered</th>
                  <th class="whitespace-nowrap p-2">Start date</th>
                  <th class="whitespace-nowrap p-2">Term</th>
                  <th class="whitespace-nowrap p-2">Break</th>
                  <th class="whitespace-nowrap p-2">Conditions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    colspan="9"
                    class="border-t border-solid border-slate-200 p-8 text-center"
                  >
                    No offers to show
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
    <button class="rounded-full bg-gray-200 p-2 hover:bg-sky-100 disabled:bg-transparent" >
        <IoIosArrowForward />
    </button>
</div>
        </div>
      </div>
    </section>
  );
}

export default Offers;
