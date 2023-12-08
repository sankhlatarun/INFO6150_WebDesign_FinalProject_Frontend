import React, { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getAllHotels } from '../../services/service';
import defaultBackupImage from './../../assets/hotel/home-2.jpg';
import CustomCloudinaryImage from '../../components/CustomCloudinaryImage';


const IndividualHotelPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [hotel, setHotel] = useState({});

  const par = useParams();
  console.log(par.id);

  useEffect(() => {
    getAllHotels(setData, setLoading, setError);
  }, []);

  useMemo(() => {
    data.forEach(element => {
      console.log(element._id);
      if (element._id == par.id) {
        setHotel(element);
      }
    });
    data.some((item) => item._id == par.id) ? console.log('found') : navigate('./../../notfound');
  }, [data]);

  return (
    <div className='page flex-col'>
      {loading 
        ? <div>Loading...</div>
        : <div className='flex flex-wrap'>
            <div className='flex flex-wrap' style={{width:'360px'}}>
              {hotel.photos && (hotel.photos.length == 0 ?
                <img
                  src={defaultBackupImage}
                  class="card-img-top hotel-img"
                  alt="..."
                /> :
                <>
                  {hotel.photos.map((item) => (
                    <div style={{Width:'300px',margin:'20px',flexGrow:'1'}}>
                    <CustomCloudinaryImage myImage={item} />
                    </div>
                  ))}
                </>
              )}
            </div>
            <div className='flex flex-wrap '>
              <h3>{hotel.name}</h3>
              <p>{hotel.description}</p>
            </div>
        </div>
      }
    </div>
  )
}

export default IndividualHotelPage;