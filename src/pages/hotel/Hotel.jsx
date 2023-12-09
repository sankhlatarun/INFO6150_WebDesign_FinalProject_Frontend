import React, { useEffect, useMemo, useState } from 'react'
import logo from './../../assets/hotel/HotelBooking.svg';
import './../hotel/hotel.css';
import './../../App.css';
import CustomCloudinaryUpload from '../../components/CustomCloudinaryUpload';
import CustomCloudinaryImage from '../../components/CustomCloudinaryImage';
import { getAllHotels, getServicesForStripePayment } from '../../services/service';
import { Elements } from '@stripe/react-stripe-js';
import { CheckoutForm } from '../../components/CheckoutForm';
import { useNavigate } from 'react-router-dom';
import { Tab, Tabs } from 'react-bootstrap';
import defaultBackupImage from './../../assets/hotel/home-2.jpg';

const Hotel = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [error, setError] = useState('');

  useEffect(() => {
    console.log('AdminHotel');
    getAllHotels(setData, setLoading, setError);
  }, []);
  return (


    <div className='layout_full main_page_hotels'>
      <div className='page'>
        <h3 className='runner' style={{ color: '#5d4f97' }}>Indulge in Unforgettable Moments: Where Comfort Meets Elegance!!</h3>
        <img className='logo pointer' src={logo} />
        <span className="content">
          <div className="content__container">
            <ul className="content__container__list">
              <li className="content__container__list__item"> Hotel</li>
              <li className="content__container__list__item" data-lang='Japan'> ホテル</li>
              <li className="content__container__list__item" data-lang='Russian'> Отели </li>
              <li className="content__container__list__item" data-lang="Chinese"> 酒店 </li>
              <li className="content__container__list__item" data-lang="Chinese"> Alberghi </li>
            </ul>
          </div>
        </span>
      </div>
      <div className=' mt-5'>
        <Tabs
          defaultActiveKey="cabin"
          id="uncontrolled-tab-example"
          className="mb-3 flex-space-evenly fw-700"
          style={{fontSize:'1.25rem'}}
        >
          <Tab eventKey="cabin" title="Cabin">
            <div className='flex flex-wrap p-4 center flex-space-evenly m-auto'>
            {data.map((item,index) => (


              <div key={item.id}
                class="card m-4 flex-grow-1 border-secondary-subtle rounded-top card-box-design"
                style={{ width: "25rem" }}
              >
                { item.photos.length == 0 ?
                 <img
                  src={defaultBackupImage}
                  class="card-img-top hotel-img"
                  alt="..."
                />:
                <CustomCloudinaryImage myImage={item.photos[0]} />}
                <div
                  class="card-body mb-0 align-items-end d-flex justify-content-between g-col-6"
                >
                  <div class="card-text">
                    <b>{item.name}</b>
                    <div>{item.city}</div>
                    <b> ${item.rate ? item.rate : item._id[index] +item._id[index+1]}</b> <span>night</span>
                  </div>
                  <button
                    type="button"
                    class="btn btn-dark ps-4 pe-4 fw-semibold float-end m-2"
                    data-bs-target="#exampleModal"
                    data-toggle="tooltip"
                    data-bs-toggle="modal"
                    data-placement="top" title="Reserve Booking"
                    onClick={()=>{navigate('./../hotel/'+item._id) }}
                  >
                    View Details
                  </button>

                </div>
              </div>

            ))}
</div>
          </Tab>
          <Tab eventKey="tree house" title="Tree House">
            Tab content for Profile
          </Tab>
          <Tab eventKey="mansion" title="Mansion">
            Tab content for Contact
          </Tab>
          <Tab eventKey="island" title="Island">
            Tab content for Contact
          </Tab>
          <Tab eventKey="hotel" title="Hotel">
            Tab content for Contact
          </Tab>
          <Tab eventKey="resort" title="Resort">
            Tab content for Contact
          </Tab>
        </Tabs>

      </div>
      <div className='page black' style={{   zIndex: '-1',position: 'absolute',height: '100px',width: '100%',top: '200%'}}>

      </div>
    </div>

  )
}

export default Hotel