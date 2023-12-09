import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomHeader from './components/CustomHeader';
import CustomFooter from './components/CustomFooter';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import LoginScreen from './components/LoginScreen';
import SignUpScreen from './components/SignUpScreen';
import { useState } from 'react';
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
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, toast } from 'react-toastify';

function App() {
  const defaultUser = {
    "email": "",
    "email_verified": false,
    "name": "",
    "nickname": "",
    "picture": "",
    "sub": "",
    "updated_at": ""
  }
  const [user, setUser] = useState(defaultUser)
  return (
    <div className="App">
      <CustomHeader setUser={setUser} />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='/login' element={<LoginScreen />} />
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
      <ToastContainer />
    </div>
  );
}

export default App;
