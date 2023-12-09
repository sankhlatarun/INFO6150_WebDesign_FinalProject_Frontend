import { Elements } from '@stripe/react-stripe-js'
import React, { useEffect, useMemo, useState } from 'react'
import { CheckoutForm } from '../components/CheckoutForm'
import { getServicesForStripePayment } from '../services/service';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';

const CheckoutPage = ({type,dataArray,amount}) => {
    const param = useParams();
    console.log(param);
    const clientSecret = param.clientSecret;
    if(!clientSecret){
      return <div>Please Go back</div>
    }
    // const [cs,setCS] = useState('');
    // const [options, setOptions] = useState({
    //   mode: "payment",
    //   amount: 100,
    //   currency: "usd",
    //   clientSecret: clientSecret,
    //   // Fully customizable with appearance API.
    //   appearance: {
    //     /*...*/
    //   },
    // });
    const stripePromise  = loadStripe(
      "pk_test_51OK217Eub5KRjd22doJowfB4O3E0jIuekmGqDRXxtT15ECnkevRwCKwyknyMutwRgg9u1F05BNCC4pWuvwOhyVeQ00tncQ8Srl"
    );

     
    const appearance = {
      theme: "stripe",
    };
    // const clientSecret = options.clientSecret;
  
    const elementsOptions =  {
        stripe: stripePromise,
        options: {
          clientSecret:
          clientSecret,
          appearance,
        },
      };

  return (
    <div className='page mt-5'>
      <h1 className='pb-5'>Checkout</h1>
      <div className='flex flex-wrap p-4 center flex-space-evenly m-auto'>
          <Elements
        //  stripe={stripePromise} options={options}
          {...elementsOptions}>
          <CheckoutForm />
        </Elements>
        </div>
    </div>
  )
}

export default CheckoutPage