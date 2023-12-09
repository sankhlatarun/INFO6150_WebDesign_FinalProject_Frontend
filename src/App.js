import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Hotel from './pages/hotel/Hotel';
import AdminHotel from './pages/hotel/AdminHotel';
import AdminLayout from './pages/AdminLayout';
import AddNewHotel from './pages/hotel/AddNewHotel';
import CheckoutPage from './pages/CheckoutPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './pages/NotFound';
import IndividualHotelPage from './pages/hotel/IndividualHotelPage';
import UpdateHotel from './pages/hotel/UpdateHotel';


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path="/hotels" element={<Hotel />} />
        <Route path="admin/hotels" element={<AdminHotel />} />
        <Route path="admin/newhotel" element={<AddNewHotel />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path='hotel/:id' element={<IndividualHotelPage />} />
        <Route path="admin/updatehotel/:id" element={<UpdateHotel />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;
