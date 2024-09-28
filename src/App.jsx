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











/*Hiranya*/
import AddBodyMeasurement from './pages/model/AddBodyMeasurements.jsx';
import EditBodyMeasurement from './pages/model/EditBodyMeasurement.jsx';
import DeleteBodyMeasurement from './pages/model/DeleteBodyMeasurement.jsx';
import ViewBodyMeasurement from './pages/model/ViewBodyMeasurement.jsx';
import MeasurementsTable from './pages/model/MeasurementsTable.jsx';
import Register from './pages/users/Register.jsx';
import Login from './pages/users/LoginUser.jsx';
import CusProfile from './pages/users/CusProfile.jsx';
import EditCusProfile from './pages/users/EditCusProfile.jsx';











/*Ridmi*/














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











      {/*Hiranya*/}
      <Route path='/measurements/create' element={<AddBodyMeasurement/>} />
      <Route path='/measurements/edit/:id' element={<EditBodyMeasurement/>} />
      <Route path='/measurements/delete/:id' element={<DeleteBodyMeasurement/>}/>
      <Route path='/measurements/view/:id' element={<ViewBodyMeasurement/>}/>
      <Route path='/measurements/view' element={<MeasurementsTable/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/cusProfile' element={<CusProfile/>}/>
      <Route path='/EditCusProfile' element={<EditCusProfile/>}/>













      {/*Ridmi*/}














    </Routes>

  );
};

export default App;