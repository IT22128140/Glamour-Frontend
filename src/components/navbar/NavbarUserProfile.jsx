// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const NavbarUserProfile = (props) => {
  return (
    <div className="flex flex-row w-fit mr-2">
      <div className="flex flex-col items-end pr-5">
        <p className="font-BreeSerif mb-2 text-primary">{props.username}</p>
        <button className=" bg-primary w-fit p-2 px-4 font-BreeSerif text-white rounded-3xl"
          onClick={
            () => {
              sessionStorage.removeItem("token");
              window.location = "/EmpLogin";
            }
          }>Logout</button>
      </div>
      <Link to={props.url2}>
        <img src={props.source} className="w-[4rem] h-[4rem]" alt="Profile" />
      </Link>
    </div>
  );
};

NavbarUserProfile.propTypes = {
  source: PropTypes.string,
  username: PropTypes.string,
  url2: PropTypes.string,
};

export default NavbarUserProfile;
