import { Elements } from '@stripe/react-stripe-js'
import React, { useMemo } from 'react'
import { CheckoutForm } from '../components/CheckoutForm'
import { getServicesForStripePayment } from '../services/service';

const CheckoutPage = ({type,dataArray,amount}) => {
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
    <div>CheckoutPage

<Elements
        //  stripe={stripePromise} options={options}
          {...elementsOptions}>
          <CheckoutForm />
        </Elements>
    </div>
  )
}

export default CheckoutPage