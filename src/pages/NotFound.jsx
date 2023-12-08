import React from 'react'
import img from './../assets/hotel/booked_re_vtod.svg';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

  return (
    <div className='flex center page flex-column mtb-lr-auto mt-6'>
        <h1 style={{fontFamily:'cursive', fontSize:'5rem'}}>404</h1>
        <h2>Page Not Found</h2>
        <button className='btn' onClick={()=>{
            navigate('/');
        }}>Go Back</button>
        <img src={img} alt="404" />
    </div>
  )
}

export default NotFound