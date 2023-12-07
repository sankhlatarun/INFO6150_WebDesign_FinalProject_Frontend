import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomHeader from './components/CustomHeader';
import CustomFooter from './components/CustomFooter';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import LoginScreen from './components/LoginScreen';
import SignUpScreen from './components/SignUpScreen';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Hotel from './pages/hotel/Hotel';
import AdminHotel from './pages/hotel/AdminHotel';
import AdminLayout from './pages/AdminLayout';

function App() {
  const defaultUser ={"email":"",
"email_verified": false,
"name": "",
"nickname":  "",
"picture": "",
"sub": "",
"updated_at": ""
  }
  const [user,setUser] = useState(defaultUser)
  return (
    <div className="App">
    {/* <BrowserRouter> */}


        <CustomHeader setUser={setUser} />
        <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Dashboard/>}/>
        <Route path='/login' element = {<LoginScreen/>}/>
        <Route path='/signup' element = {<SignUpScreen/>}/>

        {/* <Route path = '/flight' >
          <Route index element={ <FlightDashBoard/>} />
          <Route path='/flight/search' element={<SearchFlights/>}/>
          
        </Route> */}
       
        <Route path="/hotels" element={<Hotel />} />
        <Route path="admin/hotels" element={<AdminHotel />} />
        </Route>
     </Routes>
        <CustomFooter/>


    
    {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
