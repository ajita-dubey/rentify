import React from "react";

function Navbar() {
  return (
    <nav
      className="flex border justify-between font-outfit  py-6 px-10  w-full  
    bg-white bg-opacity-80 shadow-lg top-0 shadow-black/[0.03] 
    backdrop-blur-[0.5rem] border-opacity-30" >
      <div className="flex gap-x-7">
        <div>
          <span className="text-xl font-medium uppercase">Rentify</span>
        </div>

        <div className=" flex gap-x-9">
          <select>
            <option>Search properties </option>
            <option>Properties to rent</option>
            <option>Properties for sale</option>
          </select>
          <select>
            <option>For landlords</option>
            <option>Lettings</option>
            <option>Advanced rent</option>
          </select>
          <span>For sellers</span>
          <select>
            <option>Tenant services</option>
            <option>Deposit free renting</option>
            <option>Rent gaurantor</option>
            <option>Refer your Landlords</option>
          </select>
          <span>For Agents</span>
          
        </div>
      </div>
      <div className="flex gap-x-5">
        <span>Agent sign in</span>
        <span>Sign in</span>
      </div>
    </nav>
  );
}

export default Navbar;
