import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import PaymentCardForm from '../PaymentCardForm/PaymentCardForm';
const PaymentCard = ({pc}) => {
 

const stripePromise = loadStripe('pk_test_51IeDpSLFhcn3g4r1lyPl6vsaDSRI8NtKHVqhnJ8iLS347eqNxh1gQAQjIekeqo0sfKnoi0Cje6fEHCWxDbDTv6n200p1A6fHll');
    return (
        <div>
             <Elements stripe={stripePromise}>
              <PaymentCardForm pc={pc}></PaymentCardForm>
            </Elements>
        </div>
    );
};

export default PaymentCard;