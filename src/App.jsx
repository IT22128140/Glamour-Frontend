import { Routes, Route } from 'react-router-dom'



/*Maneth*/
import Home from './pages/onlineStore/Home.jsx';
import ProductPage from './pages/onlineStore/ProductPage.jsx';
import Catalogue from './pages/onlineStore/Catalogue.jsx';
import StoreManagerDashboard from './pages/onlineStoreManager/StoreManagerDashboard.jsx';
import StoreItemsList from './pages/onlineStoreManager/StoreItemsList.jsx';










/*Sandithi*/














/*Hiranya*/














/*Ridmi*/
import Checkout from './pages/onlineStore/Checkout.jsx';
import CusAddresses from './pages/onlineStore/CusAddresses.jsx';
import Order from './pages/onlineStore/Order.jsx';
import Payment from './pages/onlineStore/Payment.jsx';










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














      {/*Hiranya*/}














      {/*Ridmi*/}
      <Route path="/Checkout" element={<Checkout/>}/>
      <Route path="/Addresses" element={<CusAddresses/>}/>
      <Route path="/Orders" element={<Order/>}/>
      <Route path="/Payment" element={<Payment/>}/>










    </Routes>

  );
};

export default App;