import React, { useState } from "react";
import { AiOutlineTeam } from "react-icons/ai";
import { CiCircleInfo } from "react-icons/ci";
import { GoArrowDownLeft } from "react-icons/go";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosLogOut,
  IoIosSearch,
  IoMdClose,
} from "react-icons/io";
import { IoCalendarOutline } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdFormatListBulleted } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

function AsideNavbar() {
  const [isListingOpen, setListingOpen] = useState(false);
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <aside className="w-full lg:w-[300px] lg:h-screen lg:sticky top-0 flex items-center border-b lg:border-b-0 lg:border-r
     border-slate-200 shadow-md lg:flex-col">
      <div className="w-full flex justify-between items-center py-3 px-3 lg:flex-col h-full">
        {/* Logo */}
        <div className="flex items-center gap-2 lg:pt-5">
          <img src="./assets/logo.jpeg" className="h-10 w-10 aspect-square" />
          <span className="text-xl font-medium uppercase">Rentify</span>
        </div>

        {/* Hamburger Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileNavOpen(!isMobileNavOpen)}
            className="text-2xl"
          >
            {!isMobileNavOpen ? <RxHamburgerMenu /> : <IoMdClose />}
          </button>
        </div>
         {/* Navigation */}
        <div
          className={`${
            isMobileNavOpen ? "flex flex-col " : "hidden"
          } lg:flex flex-col w-full absolute top-10 left-0 lg:static justify-between  h-full z-10 transition-all duration-300`}
        >
          <nav className="flex flex-col  py-5 px-3">
            <NavItem icon={<LuLayoutDashboard />} label="Dashboard" link="/admin/home"/>
            <NavItem icon={<IoIosSearch />} label="To rent"  link="/admin/rent"/>
            <NavItem icon={<IoIosSearch />} label="For sale"  link="/admin/sale"/>
            <div>
              <div
                className="flex items-center justify-between p-3 hover:bg-gray-200 cursor-pointer"
                onClick={() => setListingOpen(!isListingOpen)}
              >
                <div className="flex items-center gap-5">
                  <MdFormatListBulleted />
                  <span>Listing</span>
                </div>
                {isListingOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
              {isListingOpen && (
                <div className="flex flex-col ml-10 text-sm">
                  <Link to={"/admin/listings"} className="p-2 hover:bg-gray-100 cursor-pointer">
                    My listings
                  </Link>
                  <Link to={"/admin/listings/add"} className="p-2 hover:bg-gray-100 cursor-pointer">
                    Add listings
                  </Link>
                  <Link to={"/admin/listings/subscription"} className="p-2 hover:bg-gray-100 cursor-pointer">
                    Listing emails
                  </Link>
                </div>
              )}
            </div>
            <NavItem icon={<IoCalendarOutline />} label="Viewings"  link="/admin/viewings"/>
            <NavItem icon={<GoArrowDownLeft />} label="Offers"  link="/admin/offers"/>
            <NavItem icon={<AiOutlineTeam />} label="Team"  link="/admin/team"/>
            <NavItem icon={<IoIosLogOut />} label="Log out"/>
          </nav>

          {/* Profile */}
          <div className="border-t border-gray-300 p-3">
            <div className="flex items-center gap-4">
              <img
                src="https://ui-avatars.com/api/?name=AvikaDubey&bold=true&uppercase=false&rounded=true"
                className="h-10 w-10"
              />
              <div className="flex flex-col">
                <span className="capitalize font-bold">avika</span>
                <span className="capitalize">rentify</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

function NavItem({ icon, label, link}) {
  return (
    <Link to={link} className="flex items-center gap-5 p-3 hover:bg-gray-200 cursor-pointer">
      {icon}
      <span>{label}</span>
    </Link>
  );
}

export default AsideNavbar;
