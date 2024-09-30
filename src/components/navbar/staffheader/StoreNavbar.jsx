import { useEffect, useState } from "react";
import NavbarButton from "../NavbarButton";
import NavbarLogo from "../NavbarLogo";
import { Link } from "react-router-dom";
import NavbarUserProfile from "../NavbarUserProfile";
import PropTypes from "prop-types";
import axios from "axios";

const StoreNavbar = (props) => {
  const [profileInfo, setProfileInfo] = useState({});
  const [empID, setempID] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("emptoken");
    axios
      .post("http://localhost:3000/empLogin/empAuth", { token: token })
      .then((response) => {
        setempID(response.data.empID)
        if (!response.data.status) {
          window.location.href = "/EmpLogin";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  useEffect(() => {
    if (empID.length > 0) {
      axios.get(`http://localhost:3000/empLogin/${empID}`)
        .then((response) => {
          console.log(response.data)
          setProfileInfo(response.data);
        }).catch((error) => {
          console.error("Error fetching profile information:", error);
        });
    }
  }, [empID]);

  return (
    <div className="">
      <div className="flex h-fit flex-row justify-between bg-white mt-3 pb-3 ">
        <NavbarLogo />
        <NavbarUserProfile
          url2={"/EmpProfile"}
          source={"/emp.png"}
          username={profileInfo.firstName + " " + profileInfo.lastName}
          url={"/Store_Manager"}
        />
      </div>

      <div className="flex flex-row bg-secondary h-fit shadow-md">
        <NavbarButton
          active={props.home}
          button={"Home"}
          url={"/Store_Manager"}
        />
        <NavbarButton
          active={props.pro}
          button={"Products"}
          url={"/StoreItemsList"}
        />
        <NavbarButton
          active={props.models}
          button={"Model Sizes"}
          url={"/measurements/view"}
        />
        <NavbarButton
          active={props.ogo}
          button={"Ongoing Orders"}
          url={"/OngoingOrders"}
        />
        <NavbarButton
          active={props.coo}
          button={"Completed Orders"}
          url={"/CompletedOrders"}
        />
        <NavbarButton
          active={props.can}
          button={"Canceled Orders"}
          url={"/CanceledOrders"}
        />

      </div>
    </div>
  );
};

StoreNavbar.propTypes = {
  home: PropTypes.bool,
  ogo: PropTypes.bool,
  coo: PropTypes.bool,
  pro: PropTypes.bool,
  can: PropTypes.bool,
  models: PropTypes.bool,
};

export default StoreNavbar;
