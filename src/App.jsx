import { Routes, Route } from 'react-router-dom'



/*Maneth*/
import Home from './pages/onlineStore/Home.jsx';
import ProductPage from './pages/onlineStore/ProductPage.jsx';
import Catalogue from './pages/onlineStore/Catalogue.jsx';
import StoreManagerDashboard from './pages/onlineStoreManager/StoreManagerDashboard.jsx';











/*Sandithi*/














/*Hiranya*/
import AddBodyMeasurement from './pages/model/AddBodyMeasurements.jsx';
import EditBodyMeasurement from './pages/model/EditBodyMeasurement.jsx';
import DeleteBodyMeasurement from './pages/model/DeleteBodyMeasurement.jsx';
import ViewBodyMeasurement from './pages/model/ViewBodyMeasurement.jsx';
import MeasurementsTable from './pages/model/MeasurementsTable.jsx';












/*Ridmi*/














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
      <Route path='/measurements/create' element={<AddBodyMeasurement/>} />
      <Route path='/measurements/edit/:id' element={<EditBodyMeasurement/>} />
      <Route path='/measurements/delete/:id' element={<DeleteBodyMeasurement/>}/>
      <Route path='/measurements/view/:id' element={<ViewBodyMeasurement/>}/>
      <Route path='/measurements/view' element={<MeasurementsTable/>}/>













      {/*Ridmi*/}














    </Routes>

  );
};

export default App;