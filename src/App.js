import logo from './logo.svg';
import './App.css';
import './assets/flights.css';
import CustomHeader from './components/CustomHeader';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
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
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import BusHome from './pages/BusHome';
import { Private } from './Routes/Private';
import Bookseat from './pages/Bookseat';
import Details from './pages/Details';
import Myticket from './pages/Myticket';
import SelectBus from './pages/SelectBus';
import AdminDashboard from './pages/AdminDashboard';
import AdminBus from './pages/AdminBus';
import FlightDashBoard from './components/flights/FlightDashboard';
import SearchFlights from './components/flights/SearchFlights';
import UserBookings from './components/flights/UserBookings';
import 'bootstrap/dist/css/bootstrap.min.css';



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
          <Route path="/hotels" element={<Hotel />} />
          <Route path="admin/hotels" element={<AdminHotel />} />
          <Route path="admin/newhotel" element={<AddNewHotel />} />
          <Route path="checkout/:amount/:clientSecret" element={<CheckoutPage />} />
          <Route path='hotel/:id' element={<IndividualHotelPage />} />
          <Route path="admin/updatehotel/:id" element={<UpdateHotel />} />



          <Route path="signin" element={<Signin />}></Route>
          <Route path="signup" element={<Signup />}></Route>

          <Route path="/hotels" element={<Hotel />} />
          <Route path="/bus" element={<BusHome />}></Route>
          <Route path="/bus/selectbus" element={<SelectBus />} />
          <Route path="/bus/bookticket/:id" element={
            <Private>
              <Bookseat />
            </Private>
          }
          />
          <Route path="/bus/details/:id" element={
            <Private>
              <Details />
            </Private>
          }
          />
          <Route path="/bus/myticket" element={
            <Private>
              <Myticket />
            </Private>
          }
          />
          <Route path="admin/hotels" element={<AdminHotel />} />
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/bus" element={<AdminBus />} />
    
   
      
          <Route path='flight' element={ <FlightDashBoard/>} />
          <Route path='flight/search' element={<SearchFlights/>}/>
          <Route path='flight/bookings' element={<UserBookings/>}/>
          <Route path="/notfound" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Route>

      </Routes>

      <ToastContainer autoClose={3000} />

    </div>
  );
}

export default App;
