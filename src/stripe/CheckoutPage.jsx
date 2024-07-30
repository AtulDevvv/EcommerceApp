// src/components/CheckoutPage.js
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const navigate= useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (data) => {
    setProcessing(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: {
        name: data.name,
        email: data.email,
        address: {
          line1: data.address,
          city: data.city,
          state: data.state,
          postal_code: data.postalCode,
          country: data.country,
        },
      },
    });

    if (error) {
      setError(error.message);
      setProcessing(false);
    } else {
      console.log(paymentMethod);
      setProcessing(false);
      setSuccess(true);
      alert('Payment successful!');
    }
    navigate('/OrderSuccessful')
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-1 border rounded-md shadow-md w-[50%]">
      <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
      
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          id="name"
          {...register("name", { required: 'Name is required' })}
          className="mt-1 p-2 border rounded-md w-full"
        />
        {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
      </div>
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          id="email"
          {...register("email", { required: 'Email is required' })}
          className="mt-1 p-2 border rounded-md w-full"
        />
        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
        <input
          id="address"
          {...register("address", { required: 'Address is required' })}
          className="mt-1 p-2 border rounded-md w-full"
        />
        {errors.address && <span className="text-red-500 text-sm">{errors.address.message}</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
        <input
          id="city"
          {...register("city", { required: 'City is required' })}
          className="mt-1 p-2 border rounded-md w-full"
        />
        {errors.city && <span className="text-red-500 text-sm">{errors.city.message}</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
        <input
          id="state"
          {...register("state", { required: 'State is required' })}
          className="mt-1 p-2 border rounded-md w-full"
        />
        {errors.state && <span className="text-red-500 text-sm">{errors.state.message}</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">Postal Code</label>
        <input
          id="postalCode"
          {...register("postalCode", { required: 'Postal Code is required' })}
          className="mt-1 p-2 border rounded-md w-full"
        />
        {errors.postalCode && <span className="text-red-500 text-sm">{errors.postalCode.message}</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
        <input
          id="country"
          {...register("country", { required: 'Country is required' })}
          className="mt-1 p-2 border rounded-md w-full"
        />
        {errors.country && <span className="text-red-500 text-sm">{errors.country.message}</span>}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Card Details</label>
        <CardElement className="mt-1 p-2 border rounded-md" />
      </div>

      {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

      <button disabled={processing} type="submit" className="bg-gradient-to-r from-blue-500 to-green-500 p-2 rounded-3xl mt-2 w-full">
        {processing ? "Processing..." : "Buy Now"}
      </button>

      {success && <div className="text-green-500 text-sm mt-4">Payment successful!</div>}
    </form>
  );
};

export default CheckoutPage;
