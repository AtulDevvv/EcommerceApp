// src/pages/OrderConfirmation.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Usecontext } from '../contextapi';
import {  Rating } from '@mui/material'

const OrderConfirmation = () => {
  const{state:{cart,totalPrice}, dispatch}=Usecontext() // Retrieve cart items

  return (
    <div className="p-4 border rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Order Confirmation</h2>
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Thank you for your purchase!</h3>
        <p className='text-green-300'>Your order has been placed successfully. Below are the details of your order:</p>
      </div>
      <div className="table-responsive mt-4">
        <table className="w-full border rounded-md shadow-md">
        <thead>
            <tr className='grid grid-cols-5 gap-4 p-1 text-left  '>
              <th>Product</th>
              <th className='ml-10'>Unit Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
             
            </tr>
          </thead>
          <tbody>
          {cart?.map((item, index) => (
              <tr key={index} className='grid grid-cols-5 gap-3 p-2 items-center'>
                <td>
                  <Link to={`/product/${item.id}`}>
                    <div className='flex items-center'>
                      <div className='imgWrapper'>
                        <img className='w-[200px]' src={item.catImg} alt={item.productName} />
                      </div>
                      <div className='info ml-4'>
                        <h6>{item.productName}</h6>
                        <Rating name="read-only" value={item.rating} precision={0.5} size='small' readOnly />
                      </div>
                    </div>
                  </Link>
                </td>
                <td className='ml-10'><strong>{item.price}</strong></td>
                <td><strong>{item.qty}</strong></td>
                <td className='ml-[20px]'><strong>{Number(item.price.replace(/,/g, ''))*Number(item.qty) }</strong></td>
                <td className='flex justify-center'>
        
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4">
        <Link to="/" className="bg-blue-500 text-white p-2 rounded-md">Return to Home</Link>
      </div>
      <small className='text-yellow-600 font-["poppins"] font-semibold ml-[40vw]'> This will be delivered within 7 days</small>
    </div>
  );
};

export default OrderConfirmation;
