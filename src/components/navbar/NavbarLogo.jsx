// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
      <Link to="/HomeCus" className="flex flex-row mt-2">
          <img
            src="/Logo1.png"
            alt="logo"
            className="w-[2rem] h-[3rem] ml-[1rem] mr-[1rem]"
          />
          <img src="/Logo2.png" alt="logo" className="w-[18rem] h-[2rem] hidden mt-2 lg:block" />
      </Link>
  );
};

export default Logo;
