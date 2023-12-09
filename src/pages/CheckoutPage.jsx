import { Elements } from '@stripe/react-stripe-js'
import React, { useEffect, useMemo, useState } from 'react'
import { CheckoutForm } from '../components/CheckoutForm'
import { getServicesForStripePayment } from '../services/service';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';

const CheckoutPage = ({type,dataArray,amount}) => {
    const param = useParams();
    const [options, setOptions] = useState({
      mode: "payment",
      amount: 100,
      currency: "usd",
      clientSecret: 'pi_3OLSq4Eub5KRjd220zZQvpEW_secret_QsSDGq7HEzI9Nx3jnkZJUt3UW',
      // Fully customizable with appearance API.
      appearance: {
        /*...*/
      },
    });
    const [stripePromise, setStripePromise] = useState(loadStripe(
      "pk_test_51OK217Eub5KRjd22doJowfB4O3E0jIuekmGqDRXxtT15ECnkevRwCKwyknyMutwRgg9u1F05BNCC4pWuvwOhyVeQ00tncQ8Srl"
    ));
   
    useEffect(() => {
      const stripePromise = loadStripe(
        "pk_test_51OK217Eub5KRjd22doJowfB4O3E0jIuekmGqDRXxtT15ECnkevRwCKwyknyMutwRgg9u1F05BNCC4pWuvwOhyVeQ00tncQ8Srl"
      );
    
      let clientSecret = '';
    
    
      const postData ={
        "amount": amount ? amount : 100,
        "currency": "usd",
        "automatic_payment_methods": {
          "enabled": true
        }
      }
      fetch('https://dream-travels.onrender.com/secret', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(postData),
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log('Secret Data:', data);
                        clientSecret = data.client_secret;
    
                        const options = {
                          mode: "payment",
                          amount: amount,
                          currency: "usd",
                          clientSecret: clientSecret,
                          // Fully customizable with appearance API.
                          appearance: {
                            /*...*/
                          },
                        };
                        setOptions(options);
                        setStripePromise(stripePromise);
                        // return [options, stripePromise];
                    })
                    .catch(error => console.error('Error adding hotel:', error));
      
    }, []);
     
    const appearance = {
      theme: "stripe",
    };
    // const clientSecret = 'pi_3OLNKREub5KRjd220BB0JDJZ_secret_8E1FmnDE84jpkiQN3jXjetlVY';
    const clientSecret = options.clientSecret;
  
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