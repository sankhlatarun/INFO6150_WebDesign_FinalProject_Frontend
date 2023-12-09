import React, { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getAllHotels } from '../../services/service';
import defaultBackupImage from './../../assets/hotel/home-2.jpg';
import './../hotel/hotel.css';
import './../../App.css';
// import defaultBackupImag1 from './../../assets/hotel/';
import CustomCloudinaryImage from '../../components/CustomCloudinaryImage';
import Map from './Map';
import CustomToast from '../../components/CustomToast';


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
      if (element._id == par.id) {
        setHotel(element);
      }
    });
    data.some((item) => item._id == par.id) ? console.log('found') : navigate('./../../notfound');
  }, [data]);


  function bookHotel() {
    const notify = CustomToast("Added to Bookings");
    notify();
  }
  return (
    <div className='page flex-col pt-4'>
      <button className='btn' style={{float:'right'}} onClick={() => { navigate('./../../hotels') }}>Back to Dashboard</button>
      <h1>{hotel.name}</h1>
      {loading
        ? <div>Loading...</div>
        : <div className='flex flex-wrap parent p-3'>
        
          <div className='child' style={{justifyContent:'start'}}>
            {hotel.photos && (hotel.photos.length == 0 ?
              <img
                src={defaultBackupImage}
                class="card-img-top hotel-img"
                
              /> :
              <>
                {hotel.photos.map((item) => (
                  <div className='img'>
                    <CustomCloudinaryImage myImage={item} />
                  </div>
                ))}  </>
            )}
            <Map />
          </div>
          <div className='child child_data p-5' style={{    textAlign: 'justify'}}>
           
            <h5>Description: </h5>
            <span> {hotel.description}</span>
            <h5>Address:
            <span className="fs_2"> {hotel.address}</span> </h5>
            <h5>City:
            <span className="fs_2"> {hotel.city}</span> </h5>
            <h5>Country:
            <span className="fs_2"> {hotel.country}</span> </h5>
            <h5>Rate: 
            <span className="fs_2"> {hotel.rate}</span></h5>
            <h5>Cost: 
            <span className="fs_2"> {hotel.rooms}</span></h5>
            <h5> Number of Photos Available:
            <span className="fs_2"> {hotel.photos && hotel.photos.length}</span> </h5>
            <h5>Email to conteact: 
            <span className="fs_2"> {hotel.email}</span></h5>
 
            <h5>Services:
            <span className="fs_2"> {hotel.roomService}</span> </h5>
            <h5>Facilities: 
            <span className="fs_2"> {hotel.facilities}</span></h5>
            <h5>Internet:
            <span className="fs_2"> {hotel.internet}</span> </h5>
            <h5>Rules: 
            <span className="fs_2"> {hotel.rules}</span></h5>
            <h5>Kids policies:
            <span className="fs_2"> {hotel.kids}</span> </h5>
            <h5>Amenities: 
            <span className="fs_2"> {hotel.amenities}</span></h5>
            <h5>Other Details:
            <span className="fs_2"> {hotel.other}</span> </h5>
            <h5>Parking Policy:
            <span className="fs_2"> {hotel.parking}</span> </h5>
            <h5>Pets:
            <span className="fs_2"> {hotel.pets}</span> </h5>
            <h5>Phone Contact:
            <span className="fs_2"> {hotel.phone}</span>
            </h5>
            <h5>
              Policies:
              <span className="fs_2">{hotel.policies}</span>
            </h5>
            <h5>Room Service:
              <span className="fs_2">{hotel.roomService}</span>
            </h5>
            <h5>TollFree:
              <span className="fs_2">{hotel.tollFree}</span>
            </h5>
            <h5>
              Website:
              <span className="fs_2">{hotel.website}</span>
            </h5>
            <h5>Reviews: 
            <span className="fs_2"> {hotel.reviews}</span></h5>
            <h5>Rating: 
            <span className="fs_2"> {hotel.rating}</span></h5>
        
            <button className='btn' onClick={()=>{
              bookHotel();
            }}>
              Book Hotel
            </button>

                  
            
          </div>

        </div>
      }
    </div>
  )
}

export default IndividualHotelPage;