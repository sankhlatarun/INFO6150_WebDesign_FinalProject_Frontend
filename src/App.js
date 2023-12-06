import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Hotel from './pages/hotel/Hotel';
import AdminHotel from './pages/hotel/AdminHotel';
import AdminLayout from './pages/AdminLayout';

function App() {
  return (
    <div className="App">
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
