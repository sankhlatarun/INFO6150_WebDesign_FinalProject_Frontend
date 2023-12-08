import React, { useEffect, useState } from 'react';
import { getAllHotels } from '../../services/service';
import './../hotel/hotel.css';
import './../../App.css';
import { Navigate, useNavigate } from 'react-router-dom';

const AdminHotel = () => {
  const [data,setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [error,setError] = useState('');

  useEffect(() => {
    console.log('AdminHotel');
    getAllHotels(setData,setLoading,setError);

  }, []);
  return (
    <div className='page black'>AdminHotel
    <button className='btn' onClick={() => {navigate('./../newhotel')}}>Add Hotel</button>
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      
      ))}
    </div>
    </div>
  )
}

export default AdminHotel