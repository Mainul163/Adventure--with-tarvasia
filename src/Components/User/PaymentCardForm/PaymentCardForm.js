import React, { useEffect,useContext, useState } from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

import { UserContext } from '../../../App';
const PaymentCardForm = ({pc}) => {
    const stripe = useStripe();
    const elements = useElements();
    const[paymentError,setPaymentError]=useState('')
    const[paymentSuccess,setPaymentSuccess]=useState('')
    const[details,setDetails]=useState({})
    const[loginUser,setLoginUser]=useContext(UserContext)
    const handleSubmit = async (event) => {
   
      event.preventDefault();
  
      if (!stripe || !elements) {
       
        return;
      }
  
    
      const cardElement = elements.getElement(CardElement);
  
    
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });
  
      if (error) {
        setPaymentError(error.message)
        setPaymentSuccess('')
        console.log('[error]', error);
      } else {
        setPaymentSuccess(paymentMethod.id)
        setPaymentError('')
        console.log('[PaymentMethod]', paymentMethod);
        setDetails(paymentMethod)
      }
    // bookingList.paymentId=details.id
    const bookingList={
      card:paymentMethod,
      bookings:pc
    }
    console.log(bookingList)
    fetch('https://fierce-crag-88105.herokuapp.com/bookinginfo',{
      method:'POST',
      headers:{'Content-Type':'application/json'}, 
      body:JSON.stringify({card:paymentMethod.card,name:pc.name,email:loginUser.email}) 
    })
    .then(res=>res.json())
    .then(result=>console.log(result))
     
    };
    console.log(pc.email)
    
    // useEffect(()=>{
    //   // const bookingList={
    //   //   day:pc.day
    //   // }
  
    // },[])
    
    return (
        <div>
             <form onSubmit={handleSubmit}>
                <CardElement />
                <button type="submit"  disabled={!stripe}>
                    Pay
                </button><p>please enter the pay button showing for payment</p>
            </form>
            {
                paymentError && <p style={{ color: 'red' }}>{paymentError}</p>

            }
            {
                paymentSuccess && <p style={{ color: 'green' }}>your payment method is successfull</p>
            }

         
        </div>
    );
};

export default PaymentCardForm;