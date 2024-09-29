//import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios';

import Logo from "./NavbarLogo.jsx";
import DropDownButton from "../button/DropDownButton.jsx";
import { mens, womens } from "../../utils/arrays.js";
// import { CiSearch } from "react-icons/ci";
import Search from "./Search.jsx";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

const CustomerNavbar = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  return (
    <div className="h-[70px] flex-row justify-between bg-white mt-3 shadow-md hidden md:flex">
      <Logo />
      <div className="flex flex-row p-5">
        <DropDownButton title="Men's" options={mens} />
        <DropDownButton title="Women's" options={womens} />
      </div>
      <div className="flex flex-row h-[70px] justify-between">
        <Search />
        <Link to="/Cart">
          <MdOutlineShoppingCart className="text-[50px] text-primary mt-2 lg:ml-4" />
        </Link>
        <div className="group relative cursor-pointer w-28 py-2 mr-3">
          <div className="flex items-center">
            <IoPersonCircleOutline className=" menu-hover lg:mx-4 text-[50px] text-primary" />
          </div>
          <div className="invisible absolute z-50 flex w-full flex-col p-2 bg-primary rounded-md text-c shadow-xl group-hover:visible">
            <Link className="rounded-md p-1 mb-2 block font-semibold text-secondary  hover:bg-secondary hover:text-primary" to="/cusProfile">
              Profile
            </Link>
            <Link
              className="rounded-md p-1 my-2 block font-semibold text-secondary  hover:bg-secondary hover:text-primary "
              to="/Orders"
            >
              Orders
            </Link>
            <Link
              className="rounded-md p-1 my-2 block font-semibold text-secondary  hover:bg-secondary hover:text-primary"
              to="/Addresses"
            >
              Addresses
            </Link>
            {token && (
              <button
                className="rounded-md p-1 my-2 block font-semibold text-secondary  hover:bg-secondary hover:text-primary"
                onClick={() => {
                  localStorage.removeItem("token");
                  navigate("/login");
                }}
              >
                Logout
              </button>
            )}
            {!token && (
              <Link
                to="/LoginCus"
                className="rounded-md p-2 my-2 block font-semibold text-secondary  hover:bg-secondary hover:text-primary"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerNavbar;
