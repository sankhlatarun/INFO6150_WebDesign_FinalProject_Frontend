import React, { useEffect, useState } from 'react';
import { getAllHotels } from '../../services/service';
import './../hotel/hotel.css';
import './../../App.css';
import { Navigate, useNavigate } from 'react-router-dom';
import defaultBackupImage from './../../assets/hotel/home-2.jpg';
import CustomCloudinaryImage from '../../components/CustomCloudinaryImage';

const AdminHotel = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const roles = [];

  data.map((item) => {
    if (roles.indexOf(item.type) === -1) {
      roles.push(item.type)
    }
  })
  console.log(roles);
  useEffect(() => {
    console.log('AdminHotel');
    getAllHotels(setData, setLoading, setError);
  }, []);
  return (
    <div className='page'>
      <h1 className='m-3 fw-900 uppercase'>Manage Hotels</h1>
    <button className='btn' style={{float:'right'}} onClick={() => {navigate('./../newhotel')}}>Add Hotel</button>
    <div className='flex flex-wrap p-4 center flex-space-evenly m-auto'>
            {data.map((item,index) => (


              <div key={item.id}
                className="card m-4 flex-grow-1 border-secondary-subtle rounded-top card-box-design"
                style={{ width: "25rem" }}
              >
                { item.photos.length == 0 ?
                 <img
                  src={defaultBackupImage}
                  style={{minHeight:'20rem'}}
                  className="card-img-top hotel-img"
                  alt="..."
                />:
                <CustomCloudinaryImage  myImage={item.photos[0]} />}
                <div
                  className="card-body mb-0 align-items-end d-flex justify-content-between g-col-6"
                >
                  <div className="card-text">
                    <b>{item.name}</b>
                    <div>{item.city}</div>
                    <b> ${item.rate ? item.rate : item._id[index] +item._id[index+1]}</b> <span>night</span>
                  </div>
                  <button
                    type="button"
                    className="btn btn-dark ps-4 pe-4 fw-semibold float-end m-2 fs-0-5"
           
                    onClick={()=>{navigate('./../updatehotel/'+item._id) }}
                  >
                    Update Details
                  </button>

                </div>
              </div>

            ))}
</div>
    </div>
  )
}

export default AdminHotel