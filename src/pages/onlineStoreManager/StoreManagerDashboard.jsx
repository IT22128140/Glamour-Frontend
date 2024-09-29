// eslint-disable-next-line no-unused-vars
import React from "react";
import StoreNavbar from "../../components/navbar/staffheader/StoreNavbar.jsx";
import StaffFooter from "../../components/footer/stafffooter/StaffFooter.jsx";
import { Link } from "react-router-dom";
import ViewButton from "../../components/button/ViewButton.jsx";

const HrDashboard = () => {
  // const token = /*sessionStorage.getItem("token");*/ 123;
  // if(!token){
  //   window.location = "/LoginEmp";
  // }

  return (
    <div
      className="w-full h-full bg-fixed bg-no-repeat bg-bgform"
      style={{ backgroundPosition: "top right", backgroundSize: "cover" }}
    >
      <StoreNavbar home={true} />

      <div className="p-4">
        <center>
          <h1 className="text-6xl my-8 font-Philosopher text-primary font-semibold">
            Dashboard
          </h1>
        </center>
      </div>

      <div className="flex flex-row justify-evenly">
        <div>
          <div className="px-14 py-8">
            <div className="border border-black rounded-xl w-[800px] h-fit  flex flex-col items-center font-BreeSerif p-6 bg-white">
              <h1 className="text-3xl font-Philosopher text-ternary">
                Order Management
              </h1>

              <div className="border border-black rounded-xl w-100% h-fit bg-ternary flex flex-col items-center font-BreeSerif p-2 m-8">
                <h2 className="text-xl text black pb-2">
                  View Monthly Order Report
                </h2>
                <p className="text-md text-black pb-2">
                  lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>

                <Link to="/ViewOrderReport">
                  <ViewButton />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <StaffFooter />
    </div>
  );
};

export default HrDashboard;
