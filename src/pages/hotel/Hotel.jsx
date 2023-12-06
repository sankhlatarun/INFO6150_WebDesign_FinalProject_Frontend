import React, { useMemo, useState } from 'react'
import logo from './../../assets/hotel/HotelBooking.svg';
import './../hotel/hotel.css';
import './../../App.css';
import CustomCloudinaryUpload from '../../components/CustomCloudinaryUpload';
import CustomCloudinaryImage from '../../components/CustomCloudinaryImage';
import { getServicesForStripePayment } from '../../services/service';
import { Elements } from '@stripe/react-stripe-js';
import { CheckoutForm } from '../../components/CheckoutForm';
const Hotel = () => {
  const [myImage, setImagePublicId] = useState('');
  const [options, stripePromise] = getServicesForStripePayment(100);
  const appearance = {
    theme: "stripe",
  };
  const clientSecret = 'pi_3OKBOsEub5KRjd221k41UF96_secret_yQxyVrC4vVakkwTCnYNoLLzZ2';

  const elementsOptions = useMemo(() => {
    return {
      stripe: stripePromise,
      options: {
        clientSecret:
        clientSecret,
        appearance,
      },
    };
  }, [stripePromise, clientSecret, appearance]);
  return (


    <div className='layout_full main_page_hotels'>
      <div className='page'>
        <h1 className='runner'>Welcome!!</h1>
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
      <div className='page'>
        <Elements
        //  stripe={stripePromise} options={options}
          {...elementsOptions}>
          <CheckoutForm />
        </Elements>
      </div>
      <div className='page black'>
        <CustomCloudinaryUpload setImagePublicId={setImagePublicId} />
        {myImage && <CustomCloudinaryImage myImage={myImage} />}
      </div>
    </div>

  )
}

export default Hotel