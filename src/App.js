import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomHeader from './components/CustomHeader';
import CustomFooter from './components/CustomFooter';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import { useState } from 'react';
import Layout from './pages/Layout';
import Hotel from './pages/hotel/Hotel';
import AdminHotel from './pages/hotel/AdminHotel';
import AdminLayout from './pages/AdminLayout';
import AllRoutes from "./Routes/AllRoutes";
import { ToastContainer } from "react-toastify";
import AppProvider from './Redux/store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Home from './pages/BusHome';
import BusHome from './pages/BusHome';
import { Private } from './Routes/Private';
import Bookseat from './pages/Bookseat';
import Details from './pages/Details';
import Myticket from './pages/Myticket';
import SelectBus from './pages/SelectBus';

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
      <ToastContainer autoClose={3000} />


      <CustomHeader setUser={setUser} />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Dashboard />} />
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
            <Route path="/bus/details/:id"  element={
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

        </Route>
      </Routes>

    </div>
  );
}

export default App;
