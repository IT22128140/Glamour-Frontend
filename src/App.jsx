import { Routes, Route } from 'react-router-dom'



/*Maneth*/
import Home from './pages/onlineStore/Home.jsx';
import ProductPage from './pages/onlineStore/ProductPage.jsx';
import Catalogue from './pages/onlineStore/Catalogue.jsx';
import StoreManagerDashboard from './pages/onlineStoreManager/StoreManagerDashboard.jsx';
import StoreItemsList from './pages/onlineStoreManager/StoreItemsList.jsx';










/*Sandithi*/
import Cart from './pages/onlineStore/Cart.jsx';
import OngoingOrders from "./pages/onlineStoreManager/OngoingOrders.jsx";
import CompletedOrders from "./pages/onlineStoreManager/CompletedOrders.jsx";
import CanceledOrders from "./pages/onlineStoreManager/CanceledOrders.jsx";
import StoreManagerDB from './pages/onlineStoreManager/StoreManagerDashboard.jsx';
import ViewOrderReport from './pages/onlineStoreManager/ViewOrderReport.jsx';








/*Hiranya*/














/*Ridmi*/
import Checkout from './pages/onlineStore/Checkout.jsx';
import CusAddresses from './pages/onlineStore/CusAddresses.jsx';
import Order from './pages/onlineStore/Order.jsx';
import Payment from './pages/onlineStore/Payment.jsx';
import PaymentSuccessReport from './pages/onlineStore/PaymentSuccessReport.jsx';









const App = () => {
  return (
    <Routes>

      {/*Maneth*/}
      <Route path="/HomeCus" element={<Home />} />
      <Route path="/ProductPage/:id" element={<ProductPage />} />
      <Route path='/Catalogue' element={<Catalogue/>} />
      <Route path='/Store_Manager' element={<StoreManagerDashboard/>} />
      <Route path='/StoreItemsList' element={<StoreItemsList/>} />










      {/*Sandithi*/}
      <Route path="/Cart" element={<Cart />} />
      <Route path='/OngoingOrders' element={<OngoingOrders/>} />
      <Route path='/CompletedOrders' element={<CompletedOrders/>} />
      <Route path='/CanceledOrders' element={<CanceledOrders/>} />
      <Route path='/Store_Manager' element={<StoreManagerDB/>} />
      <Route path='/ViewOrderReport' element={<ViewOrderReport/>} />








      {/*Hiranya*/}














      {/*Ridmi*/}
      <Route path="/Checkout" element={<Checkout/>}/>
      <Route path="/Addresses" element={<CusAddresses/>}/>
      <Route path="/Orders" element={<Order/>}/>
      <Route path="/Payment" element={<Payment/>}/>
      <Route path="/SuccessPayment/:id" element={<PaymentSuccessReport/>}/>









    </Routes>

  );
};

export default App;