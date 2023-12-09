import React from 'react'
import './../App.css';
import { useNavigate } from 'react-router';
import img from './../assets/hotel/booked_re_vtod.svg';
import Cookies from 'js-cookie';
const AdminDashboard = () => {
    const navigate = useNavigate();
    if(!Cookies.get("jwttoken")){
      navigate('./../signup');
  }

  return (
    <div className='page pt-5 main_page_hotels'>
        <div className='flex flex-wrap p-4 center flex-space-evenly m-auto'>
            <div className='child'>
                <img src={img} alt="login" style={{width:'100%',height:'300px'}}/>
                <h1 className='m-3 fw-900 uppercase'>Manage Hotels</h1>
                <button className='btn' onClick={() => {navigate('./../admin/hotels')}}>Manage Hotels</button>

            </div>
      
        </div>
    </div>
  )
}

export default AdminDashboard