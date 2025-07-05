import React from "react";
import Chart from "react-google-charts";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosArrowRoundForward,
} from "react-icons/io";

function AgentHomePage() {
  const data = [
    ["Element", "Density", { role: "style" }],
    ["Copper", 8.94, "#b87333"], // RGB value
    ["Silver", 10.49, "silver"], // English color name
    ["Gold", 19.3, "gold"],
    ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
  ];

  // Material chart options
  const options = {
    chart: {
      title: "Company Performance",
      subtitle: "Sales and Expenses over the Years",
    },
  };
  return (
    <section className="flex  items-center md:p-8  p-4 w-full md:flex-row flex-col">
      <div className=" flex flex-col justify-center items-center w-full h-full ">
        <h1 className="font-bold text-2xl w-full pb-4">Hello,Avika!</h1>

        <div className=" flex justify-center gap-x-2  pt-5 w-full h-full md:flex-row flex-col">
          <div className=" p-2 rounded-md h-full shadow-md md:w-[40%] w-full bg-white border border-solid border-slate-200">
            <p className="font-bold text-lg">Your April earnings</p>
            <div className="flex flex-col items-center gap-4">
              <div className="mt-4">
                <Chart
                  // Note the usage of Bar and not BarChart for the material version
                  chartType="ColumnChart"
                  data={data}
                />
              </div>
              <div class="mb-2 flex flex-col w-full px-2">
                <div class="flex flex-row justify-between">
                  <p class="text-sm">Income earned</p>
                  <p class="text-sm">£0.00</p>
                </div>
                <div class="flex flex-row justify-between">
                  <p class="text-sm">+ Income accrued</p>
                  <p class="text-sm underline">£0.00</p>
                </div>
                <div class="flex flex-row justify-between">
                  <p class="text-sm">April potential earnings</p>
                  <p class="text-sm">£0.00</p>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-3 w-full">
                <div>
                  <button
                    class="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors
         focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border-solid bg-orange-600 text-white
          hover:bg-orange-highlight hover:text-white active:text-white disabled:bg-slate-300 disabled:text-slate-900 
          flex size-full flex-col p-1"
                  >
                    <span class="text-sm font-bold">£0.00</span>
                    <span class="text-xs">Daily check-in</span>
                  </button>
                </div>
                <div>
                  <div class="flex flex-col rounded-md bg-slate-300 p-1 text-center opacity-50">
                    <p class="text-sm font-bold">£0.00</p>
                    <p class="text-xs">Viewings</p>
                  </div>
                </div>
                <div>
                  <div class="flex flex-col rounded-md bg-slate-300 p-1 text-center opacity-50">
                    <p class="text-sm font-bold">£0.00</p>
                    <p class="text-xs">Deals completed</p>
                  </div>
                </div>
                <div>
                  <div class="flex flex-col rounded-md bg-slate-300 p-1 text-center opacity-50">
                    <p class="text-sm font-bold">£0.00</p>
                    <p class="text-xs">Deals pending</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="font-light mt-4">
              Next payout on 31 May or next business day.Earnings subject to
              final confirmation.
            </p>
            <button
              class="w-full mt-6 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium 
              transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border-solid
             bg-orange-600 text-white hover:bg-scraye-orange-highlight hover:text-white active:text-white
              disabled:bg-slate-300 disabled:text-slate-900 h-9 px-3 py-2 hover:bg-orange-500"
            >
              View full earnings
            </button>
          </div>
          <div className=" flex flex-col gap-y-2  w-full shadow-md">
            <div class="flex flex-col overflow-x-auto rounded-md border border-solid border-slate-200 bg-white p-4 shadow-md">
              <h3 class="text-lg font-bold">Recent Deals</h3>
              <h5></h5>
              <div class="mt-4">
                <table class="w-full max-w-full overflow-x-auto text-[13px]">
                  <tbody>
                    <tr class="mb-2">
                      <th class="max-w-[220px] pb-2 text-left">Address</th>
                      <th class="max-w-[200px] pb-2 text-left">Applicant</th>
                      <th class="max-w-[100px] pb-2 text-left">Role</th>
                      <th class="max-w-[100px] pb-2 text-left">Commission</th>
                      <th class="max-w-[200px] pb-2 text-left">Status</th>
                    </tr>
                    <tr>
                      <td colspan="5">
                        <p class="mt-4 px-4 py-2 text-center text-base font-bold text-slate-500">
                          No deals
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="mt-4">
                <button
                  class="inline-flex h-8 items-center justify-center gap-1 whitespace-nowrap rounded-md bg-orange-600 hover:bg-orange-500
                 px-3 text-sm font-medium text-white transition-colors hover:text-white focus-visible:outline-none active:text-white"
                >
                  All deals
                  <IoIosArrowRoundForward />
                </button>
              </div>
            </div>
            <div class="w-full">
              <div
                class="flex flex-col gap-2 rounded-lg border border-slate-200 bg-white p-4"
                id="news-feed"
              >
                <p class="mb-2 text-xl font-bold">News Feed</p>
                <p>No notifications.</p>
                <div class="mt-2 flex flex-row items-center justify-center gap-4">
                  <button class="rounded-full bg-gray-200 p-2 hover:bg-sky-100 disabled:bg-transparent">
                    <IoIosArrowBack />
                  </button>
                  <div>1</div>
                  <button
                    class="rounded-full bg-gray-200 p-2 hover:bg-sky-100 disabled:bg-transparent"
                    disabled=""
                    hx-get="https://api.scraye.com/agents/index/partials/news-feed?page=1"
                    hx-target="#news-feed"
                    hx-swap="outerHTML"
                  >
                    <IoIosArrowForward />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AgentHomePage;
