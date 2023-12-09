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
import Cookies from 'js-cookie';

const Hotel = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [allData, setAllData] = useState([]);
  const roles = [];

  if(!Cookies.get("jwttoken")){
      navigate('./../signup');
  }

  // data.map((item) => {
  //   if (roles.indexOf(item.type) === -1) {
  //     roles.push(item.type)
  //   }
  // })
  // console.log(roles);
  // const All = ['hotel', 'homestay', 'guest-house', 'resort', 'hostel', 'apartment', 'cabin', 'motel', 'holiday-home', 'country-house'];

  const Cabin = ['cabin', 'guest-house', 'apartment'];
  const Hotel = ['hotel', 'motel'];
  const TreeHouse = ['country-house', 'holiday-home', 'cabin'];
  const Mansion = ['homestay', 'apartment'];
  const Island = ['holiday-home', 'guest-house', 'resort'];
  const Resort = ['holiday-home', 'hotel','cabin'];
  useEffect(() => {
    console.log('AdminHotel');
    getAllHotels(setData, setLoading, setError);
    (async ()=>{
    try {
      const data = await fetch("https://dream-travels.onrender.com/hotels/getHotels");
      const response = await data.json();
      setAllData(response);
      setData(response);
      setLoading(false);
      console.log(response);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  })();
  }, []);

  function searchContent() {
    console.log('search');
    
    console.log([...allData.filter((item, index) => {
      if (item?.name.toLowerCase().includes(search.toLowerCase()) || item.city.toLowerCase().includes(search.toLowerCase())
        || item.address.toLowerCase().includes(search.toLowerCase()) || item.description.toLowerCase().includes(search.toLowerCase())
        || item.state.toLowerCase().includes(search.toLowerCase()) || item.amenities.toLowerCase().includes(search.toLowerCase())) {
        console.log('found');
        return item;
      }
    })]);
    setData([...allData.map((item, index) => {
      if (item.name.toLowerCase().includes(search.toLowerCase()) || item.city.toLowerCase().includes(search.toLowerCase())
        || item.address.toLowerCase().includes(search.toLowerCase()) || item.description.toLowerCase().includes(search.toLowerCase())
        || item.state.toLowerCase().includes(search.toLowerCase()) || item.amenities.toLowerCase().includes(search.toLowerCase())) {
        console.log('found');
        return item;
      }
    })]);
  }
  return (


    <div className='layout_full main_page_hotels pt-7'>
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
        <div className="container mt-3">
          <div className="row justify-content-center" style={{border: '2px solid',
    borderColor: 'pink',
    borderRadius: '70px'}}>
            <input
              type="text"
              onChange={(e) => {
                setSearch(e.target.value);

              }}
              className="form-control bg-transparent rounded-0 border-bottom border-0 ps-3 pt-0 pb-1 m-3 search-input"
              style={{
                outline: 'none',
                display: 'inline',
                maxWidth: '600px',
                minWidth: '200px'
              }}
              placeholder="Destination, hotel, or keyword"
            />
            <span style={{ padding: '0', margin: '0', marginTop: '10px' }} onClick={() => {
              console.log('search');
              searchContent();
            }} className='search_btn'>🔍</span>
          </div>
        </div>
        <Tabs
          defaultActiveKey="hotel"
          id="uncontrolled-tab-example"
          className="mb-3 flex-space-evenly fw-700 mt-4"
          style={{ fontSize: '1.25rem' }}
        >
          <Tab eventKey="hotel" title="Hotel">

            {data.length == 0 ?
              (<div className='flex flex-wrap p-4 center flex-space-evenly m-auto h-100'>
                <h1>No Hotels Found</h1>
              </div>)
              :
              <div className='flex flex-wrap p-4 center flex-space-evenly m-auto h-100'>

                {data?.map((item, index) => (

                  Hotel.includes(item?.type) &&
                  <div key={item.id}
                    className="card m-4 flex-grow-1 border-secondary-subtle rounded-top card-box-design"
                    style={{ width: "25rem" }}
                  >
                    {item.photos.length == 0 ?
                      <img
                        src={defaultBackupImage}
                        style={{ minHeight: '20rem' }}
                        className="card-img-top hotel-img"
                        alt="..."
                      /> :
                      <CustomCloudinaryImage myImage={item.photos[0]} />}
                    <div
                      className="card-body mb-0 align-items-end d-flex justify-content-between g-col-6"
                    >
                      <div className="card-text">
                        <b>{item.name}</b>
                        <div>{item.city}</div>
                        <b> ${item.rate ? item.rate : item._id[1] + item._id[1]}</b> <span>night</span>
                      </div>
                      <button
                        type="button"
                        className="btn btn-dark ps-4 pe-4 fw-semibold float-end m-2  fs-0-5"
                      
                        onClick={() => { navigate('./../hotel/' + item._id) }}
                      >
                        View Details
                      </button>

                    </div>
                  </div>
                ))

                }
              </div>
            }

          </Tab>
          <Tab eventKey="cabin" title="Cabin">

            {data.length == 0 ?
              (<div className='flex flex-wrap p-4 center flex-space-evenly m-auto h-100'>
                <h1>No Hotels Found</h1>
              </div>)
              : <div className='flex flex-wrap p-4 center flex-space-evenly m-auto h-100'>

                {data?.map((item, index) => (

                  Cabin.includes(item?.type) &&
                  <div key={item.id}
                    className="card m-4 flex-grow-1 border-secondary-subtle rounded-top card-box-design"
                    style={{ width: "25rem" }}
                  >
                    {item.photos.length == 0 ?
                      <img
                        src={defaultBackupImage}
                        style={{ minHeight: '20rem' }}
                        className="card-img-top hotel-img"
                        alt="..."
                      /> :
                      <CustomCloudinaryImage myImage={item.photos[0]} />}
                    <div
                      className="card-body mb-0 align-items-end d-flex justify-content-between g-col-6"
                    >
                      <div className="card-text">
                        <b>{item.name}</b>
                        <div>{item.city}</div>
                        <b> ${item.rate ? item.rate : item._id[index] + item._id[index + 1]}</b> <span>night</span>
                      </div>
                      <button
                        type="button"
                        className="btn btn-dark ps-4 pe-4 fw-semibold float-end m-2  fs-0-5 fs-0-5"
                      
                        onClick={() => { navigate('./../hotel/' + item._id) }}
                      >
                        View Details
                      </button>

                    </div>
                  </div>
                ))

                }
              </div>
            }
          </Tab>
          <Tab eventKey="tree house" title="Tree House">
            {data.length == 0 ?
              (<div className='flex flex-wrap p-4 center flex-space-evenly m-auto h-100'>
                <h1>No Hotels Found</h1>
              </div>)
              : <div className='flex flex-wrap p-4 center flex-space-evenly m-auto h-100'>

                {data?.map((item, index) => (

                  TreeHouse.includes(item?.type) &&
                  <div key={item.id}
                    className="card m-4 flex-grow-1 border-secondary-subtle rounded-top card-box-design"
                    style={{ width: "25rem" }}
                  >
                    {item.photos.length == 0 ?
                      <img
                        src={defaultBackupImage}
                        style={{ minHeight: '20rem' }}
                        className="card-img-top hotel-img"
                        alt="..."
                      /> :
                      <CustomCloudinaryImage myImage={item.photos[0]} />}
                    <div
                      className="card-body mb-0 align-items-end d-flex justify-content-between g-col-6"
                    >
                      <div className="card-text">
                        <b>{item.name}</b>
                        <div>{item.city}</div>
                        <b> ${item.rate ? item.rate : item._id[index] + item._id[index + 1]}</b> <span>night</span>
                      </div>
                      <button
                        type="button"
                        className="btn btn-dark ps-4 pe-4 fw-semibold float-end m-2  fs-0-5"
                      
                        onClick={() => { navigate('./../hotel/' + item._id) }}
                      >
                        View Details
                      </button>

                    </div>
                  </div>
                ))

                }
              </div>
            }
          </Tab>
          <Tab eventKey="mansion" title="Mansion">


            {data.length == 0 ?
              (<div className='flex flex-wrap p-4 center flex-space-evenly m-auto h-100'>
                <h1>No Hotels Found</h1>
              </div>)
              : <div className='flex flex-wrap p-4 center flex-space-evenly m-auto h-100'>

                {data?.map((item, index) => (

                  Mansion.includes(item?.type) &&
                  <div key={item.id}
                    className="card m-4 flex-grow-1 border-secondary-subtle rounded-top card-box-design"
                    style={{ width: "25rem" }}
                  >
                    {item.photos.length == 0 ?
                      <img
                        src={defaultBackupImage}
                        style={{ minHeight: '20rem' }}
                        className="card-img-top hotel-img"
                        alt="..."
                      /> :
                      <CustomCloudinaryImage myImage={item.photos[0]} />}
                    <div
                      className="card-body mb-0 align-items-end d-flex justify-content-between g-col-6"
                    >
                      <div className="card-text">
                        <b>{item.name}</b>
                        <div>{item.city}</div>
                        <b> ${item.rate ? item.rate : item._id[index] + item._id[index + 1]}</b> <span>night</span>
                      </div>
                      <button
                        type="button"
                        className="btn btn-dark ps-4 pe-4 fw-semibold float-end m-2  fs-0-5"
                      
                        onClick={() => { navigate('./../hotel/' + item._id) }}
                      >
                        View Details
                      </button>

                    </div>
                  </div>
                ))

                }
              </div>
            }
          </Tab>
          <Tab eventKey="island" title="Island">

            {data.length == 0 ?
              (<div className='flex flex-wrap p-4 center flex-space-evenly m-auto h-100'>
                <h1>No Hotels Found</h1>
              </div>)
              : <div className='flex flex-wrap p-4 center flex-space-evenly m-auto h-100'>

                {data?.map((item, index) => (

                  Island.includes(item?.type) &&
                  <div key={item.id}
                    className="card m-4 flex-grow-1 border-secondary-subtle rounded-top card-box-design"
                    style={{ width: "25rem" }}
                  >
                    {item.photos.length == 0 ?
                      <img
                        src={defaultBackupImage}
                        style={{ minHeight: '20rem' }}
                        className="card-img-top hotel-img"
                        alt="..."
                      /> :
                      <CustomCloudinaryImage myImage={item.photos[0]} />}
                    <div
                      className="card-body mb-0 align-items-end d-flex justify-content-between g-col-6"
                    >
                      <div className="card-text">
                        <b>{item.name}</b>
                        <div>{item.city}</div>
                        <b> ${item.rate ? item.rate : item._id[index] + item._id[index + 1]}</b> <span>night</span>
                      </div>
                      <button
                        type="button"
                        className="btn btn-dark ps-4 pe-4 fw-semibold float-end m-2  fs-0-5"
                      
                        onClick={() => { navigate('./../hotel/' + item._id) }}
                      >
                        View Details
                      </button>

                    </div>
                  </div>
                ))

                }
              </div>
            }
          </Tab>

          <Tab eventKey="resort" title="Resort">

            {data.length == 0 ?
              (<div className='flex flex-wrap p-4 center flex-space-evenly m-auto h-100'>
                <h1>No Hotels Found</h1>
              </div>)
              : <div className='flex flex-wrap p-4 center flex-space-evenly m-auto h-100'>

                {data?.map((item, index) => (

Resort.includes(item?.type) &&
                  <div key={item.id}
                    className="card m-4 flex-grow-1 border-secondary-subtle rounded-top card-box-design"
                    style={{ width: "25rem" }}
                  >
                    {item.photos.length == 0 ?
                      <img
                        src={defaultBackupImage}
                        style={{ minHeight: '20rem' }}
                        className="card-img-top hotel-img"
                        alt="..."
                      /> :
                      <CustomCloudinaryImage myImage={item.photos[0]} />}
                    <div
                      className="card-body mb-0 align-items-end d-flex justify-content-between g-col-6"
                    >
                      <div className="card-text">
                        <b>{item.name}</b>
                        <div>{item.city}</div>
                        <b> ${item.rate ? item.rate : item._id[index] + item._id[index + 1]}</b> <span>night</span>
                      </div>
                      <button
                        type="button"
                        className="btn btn-dark ps-4 pe-4 fw-semibold float-end m-2  fs-0-5 fs-0-5"
                      
                        onClick={() => { navigate('./../hotel/' + item._id) }}
                      >
                        View Details
                      </button>

                    </div>
                  </div>
                ))

                }
              </div>
            }
          </Tab>
        </Tabs>

      </div>
      <div className='page black' style={{ zIndex: '-1', position: 'absolute', maxHeight: '100px', width: '100%', top: '200%' }}>

      </div>
    </div>

  )
}

export default Hotel