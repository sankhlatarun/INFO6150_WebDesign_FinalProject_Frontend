import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Hotel from './pages/hotel/Hotel';
import AdminHotel from './pages/hotel/AdminHotel';
import AdminLayout from './pages/AdminLayout';
import AllRoutes from "./Routes/AllRoutes";
import { ToastContainer } from "react-toastify";
import AppProvider from './Redux/store/store'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <AllRoutes />
      <ToastContainer autoClose={3000} />
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path="/hotels" element={<Hotel />} />
        <Route path="admin/hotels" element={<AdminHotel />} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;
