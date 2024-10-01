//import React from 'react'
import PropTypes from "prop-types";
import { LuChevronDown } from "react-icons/lu";
import { Link } from "react-router-dom";

const DropDownButton = (props) => {
  return (
    <div className="group relative cursor-pointer">
      <div className="flex items-center justify-between space-x-5 px-4">
        <a className=" text-base font-bold text-primary lg:mx-4 font-BreeSerif">
          {props.title}
        </a>
        <LuChevronDown />
      </div>
      <div className="invisible absolute font-BreeSerif z-50 flex w-full flex-col bg-primary rounded-md text-ternary shadow-xl group-hover:visible">
        {props.options.map((opt) => (
          <Link
            onClick={props.onClick}
            key={opt.id}
            className="rounded-md p-1 m-2 block text-secondary hover:bg-secondary hover:text-primary"
            to={opt.url}
            state={opt.state}
          >
            {opt.option}
          </Link>
        ))}
      </div>
    </div>
  );
};

DropDownButton.propTypes = {
  title: PropTypes.string,
  options: PropTypes.array,
  onClick: PropTypes.func,
};

export default DropDownButton;
