import { Routes, Route } from 'react-router-dom'



/*Maneth*/
import Home from './pages/onlineStore/Home.jsx';
import ProductPage from './pages/onlineStore/ProductPage.jsx';
import Catalogue from './pages/onlineStore/Catalogue.jsx';
import StoreManagerDashboard from './pages/onlineStoreManager/StoreManagerDashboard.jsx';











/*Sandithi*/














/*Hiranya*/














/*Ridmi*/
import Checkout from './pages/onlineStore/Checkout.jsx';
import CusAddresses from './pages/onlineStore/CusAddresses.jsx';
import Order from './pages/onlineStore/Order.jsx';











const App = () => {
  return (
    <Routes>

      {/*Maneth*/}
      <Route path="/HomeCus" element={<Home />} />
      <Route path="/ProductPage/:id" element={<ProductPage />} />
      <Route path='/Catalogue' element={<Catalogue/>} />
      <Route path='/Store_Manager' element={<StoreManagerDashboard/>} />











      {/*Sandithi*/}














      {/*Hiranya*/}














      {/*Ridmi*/}
      <Route path="/Checkout" element={<Checkout/>}/>
      <Route path="/Addresses" element={<CusAddresses/>}/>
      <Route path="/Orders" element={<Order/>}/>











    </Routes>

  );
};

export default App;