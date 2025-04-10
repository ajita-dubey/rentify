import React, { useState } from "react";
import NavbarDropDown from "./NavbarDropDown";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [isMobileNavOpen, setMobileNavOpen] = useState(true);
  return (
    <>
      <nav
        className="flex border font-outfit justify-between bg-white md:py-6 py-3 md:px-10 px-2  w-full  items-center
    bg-opacity-80 shadow-lg top-0 shadow-black/[0.03] 
    backdrop-blur-[0.5rem] border-opacity-30"
      >
        <div className="flex md:flex-row flex-col relative md:items-center gap-x-7">
          <div className="flex items-center gap-x-2 ">
            <img
              src="src/assets/logo.jpeg"
              className="h-10 w-10 aspect-square"
            />
            <span className="text-xl font-medium uppercase">Rentify</span>
          </div>
          <div className={`${!isMobileNavOpen?'flex':'hidden '} md:flex-row md:flex flex-col absolute md:relative md:justify-between top-14 md:top-0 h-screen md:h-full 
          left-0 gap-y-5  bg-white md:items-center w-full`}>
            <div className="flex md:flex-row flex-col gap-y-5  gap-x-9 md:items-center ">
              <NavbarDropDown
                title="Search properties"
                option={["properties to rent", "properties for sale"]}
                dropDownNumber="1"
              />
              <NavbarDropDown
                title="For landlords"
                option={["Lettings", "Advanced Rent"]}
                dropDownNumber="2"
              />
              <span
                className="decoration-2 capitalize decoration-black underline-offset-4 hover:underline
                    cursor-pointer hover:decoration-slate-400"
              >
                For sellers
              </span>
              <NavbarDropDown
                title="Tenant services"
                option={[
                  "Deposit free renting",
                  "Rent guarantor",
                  "Refer your landlord",
                ]}
                dropDownNumber="3"
              />
              <span
                className="decoration-2 capitalize decoration-black underline-offset-4 hover:underline
                  cursor-pointer   hover:decoration-slate-400"
              >
                For agents
              </span>
            </div>
            <div className="  flex md:flex-row flex-col gap-y-5 md:gap-x-5   md:items-center ">
              <span
                className="decoration-2 capitalize decoration-black underline-offset-4 hover:underline
                  cursor-pointer   hover:decoration-slate-400"
              >
                Agent sign in
              </span>
              <span
                className="decoration-2 capitalize decoration-black underline-offset-4 hover:underline
                  cursor-pointer   hover:decoration-slate-400"
              >
                Sign in
              </span>
            </div>
          </div>
        </div>

        <div className="flex md:hidden items-center">
          {isMobileNavOpen ? (
            <div
              className="flex items-center justify-center"
              onClick={() => setMobileNavOpen(!isMobileNavOpen)}
            >
              <RxHamburgerMenu size={30} />
            </div>
          ) : (
            <div
              className="flex items-center justify-center"
              onClick={() => setMobileNavOpen(!isMobileNavOpen)}
            >
              <IoMdClose size={30} />
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
