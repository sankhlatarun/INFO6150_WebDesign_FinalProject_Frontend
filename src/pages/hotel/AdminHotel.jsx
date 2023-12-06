import React, { useEffect, useState } from 'react';
import { getAllHotels } from '../../services/service';

const AdminHotel = () => {
  const [data,setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log('AdminHotel');
    getAllHotels(setData,setLoading);

  }, []);
  return (
    <div className='page'>AdminHotel
    <button onClick={() => console.log(data)}>Click</button>
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