// src/context/StripeContext.js
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51Pf5NYJoYyQoxFFfjec1EbMnnKixbJd9AxVJZHDfvv46LtI4TKwRALCdUEiNUDdhiPfUkfsfClgBRXQTUkfTJRMt00lJgrEuxK');

const StripeContext = ({ children }) => (
  <Elements stripe={stripePromise}>
    {children}
  </Elements>
);

export default StripeContext;
