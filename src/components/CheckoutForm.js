import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {loadStripe} from '@stripe/stripe-js';
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import CustomToast from './CustomToast';

export const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  // const clientSecret ='pi_3OK6OVEub5KRjd220VDewgZb_secret_x3e3IaWEub0PjiXYhYN678Qm6';

  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {

    event.preventDefault();

    if (elements == null) {
      return;
    }

    // Trigger form validation and wallet collection
    const {error: submitError} = await elements.submit();
    if (submitError) {
      // Show error to your customer
      console.log("elements submit",submitError.message);
      setErrorMessage(submitError.message);
      return;
    }

    // Create the PaymentIntent and obtain clientSecret from your server endpoint
    // const res = await fetch('/create-intent', {
    //   method: 'POST',
    // });

    // const {client_secret: clientSecret} = await res.json();

    const response = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
    //   clientSecret,
      confirmParams: {
        return_url: 'http://localhost:3000/',
      },
    });
    console.log(response);
    const {error} = response;
    console.log(error); 
    if (error) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (for example, payment
      // details incomplete)
      setErrorMessage(error.message);
        console.log('Payment failed to complete!',error.message);
    } else {
        console.log('Payment completed successfully!');
        const notify = CustomToast("Payment completed successfully!");
        notify();
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{minWidth:'340px'}}>
      <PaymentElement />
      <button type="submit" className='btn' disabled={!stripe || !elements}>
        Pay
      </button>
      {/* Show error message to your customers */}
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

