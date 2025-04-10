import React from 'react';
import { FaAngleDown } from 'react-icons/fa6';

function NavbarDropDown(props) {
  return (
    <div className="relative">
      {/* Hidden Checkbox to Control Visibility */}
      <input type="checkbox" id={`toggle-search-${props.dropDownNumber}`} className="peer hidden" />

      {/* Label (Button) to Toggle Dropdown */}
      <label
        htmlFor={`toggle-search-${props.dropDownNumber}`}
        className=" flex items-center  cursor-pointer gap-x-2 decoration-2 capitalize decoration-black underline-offset-4 hover:underline
                     hover:decoration-slate-400"
      >
        {props.title}
        <FaAngleDown />
      </label>

      {/* Dropdown Content (Visible when checkbox is checked) */}
      <div
        className="absolute left-0 w-40 p-2 bg-white cursor-pointer rounded-lg shadow-lg z-20
         hidden peer-checked:flex flex-col gap-2"
      >
        {props.option.map((ele, i) => (
          <p key={i}  className="decoration-2 decoration-black underline-offset-4 hover:underline 
                   capitalize  hover:decoration-slate-400">
            {ele}
          </p>
        ))}
      </div>
    </div>
  );
}

export default NavbarDropDown;