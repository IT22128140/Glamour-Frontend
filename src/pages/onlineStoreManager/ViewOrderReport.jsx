// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
import axios from "axios";
import StoreNavbar from "../../components/navbar/staffheader/StoreNavbar.jsx";
import StaffFooter from "../../components/footer/stafffooter/StaffFooter.jsx";
import Spinner from "../../components/Spinner";
import TableView from "../../components/table/TableView";
// import { enqueueSnackbar } from "notistack";

const ViewOrderReport = () => {
    const [loading, setLoading] = useState(false);
    const [orders, setOrders] = useState([]);

    const headers = [];
    

  return (
    <div
      className="w-full h-full bg-fixed bg-no-repeat bg-bgform"
      style={{ backgroundPosition: "top right", backgroundSize: "cover" }}
    >
      <StoreNavbar home={true} />
      ViewOrderReport
      <StaffFooter />
    </div>
  );
};

export default ViewOrderReport;
