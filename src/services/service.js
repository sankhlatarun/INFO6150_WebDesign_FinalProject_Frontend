import { loadStripe } from "@stripe/stripe-js";

function getServicesForStripePayment(amount){
    const stripePromise = loadStripe('pk_test_51OK217Eub5KRjd22doJowfB4O3E0jIuekmGqDRXxtT15ECnkevRwCKwyknyMutwRgg9u1F05BNCC4pWuvwOhyVeQ00tncQ8Srl');

    const options = {
    mode: 'payment',
    amount: amount,
    currency: 'usd',
    clientSecret: 'pi_3OKBOsEub5KRjd221k41UF96_secret_yQxyVrC4vVakkwTCnYNoLLzZ2',
    // Fully customizable with appearance API.
    appearance: {
        /*...*/
    },
    };

    return [options,stripePromise];

}

async function getAllHotels(setData,setLoading){
    const data  = await fetch('http://localhost:3001/hotels/getHotels');
    const response = await data.json();
    setData(response);
    setLoading(false);
    console.log(response);
}

export {
    getServicesForStripePayment,
    getAllHotels
}