import React from 'react';
import { FaAngleDown } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function NavbarDropDown(props) {
  return (
    <div className="relative z-50 bg-white">
      {/* Hidden Checkbox to Control Visibility */}
      <input
        type="checkbox"
        id={`toggle-search-${props.dropDownNumber}`}
        className="peer hidden"
      />

      {/* Label (Button) to Toggle Dropdown */}
      <label
        htmlFor={`toggle-search-${props.dropDownNumber}`}
        className="flex items-center cursor-pointer gap-x-2 decoration-2 capitalize decoration-black underline-offset-4 
        hover:underline hover:decoration-slate-400"
      >
        {props.title}
        <FaAngleDown />
      </label>

      {/* Dropdown Content (Visible when checkbox is checked) */}
      <div
        className="absolute left-0 w-44 p-2 bg-white rounded-lg shadow-lg 
        hidden peer-checked:flex flex-col gap-2 z-[999]"
      >
        {props.option.map((ele, i) => (
          <Link
            to={props.optionLinks[i]}
            key={i}
            className="capitalize decoration-2 decoration-black underline-offset-4 hover:underline hover:decoration-slate-400"
          >
            {ele}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NavbarDropDown;