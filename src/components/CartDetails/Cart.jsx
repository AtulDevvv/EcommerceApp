import React,{useState,useEffect} from 'react'
import { Link, Rating } from '@mui/material'
import {IoIosClose} from 'react-icons/io'
import CounterPrice from '../KAAMkiCHEEZE/CounterPrice'
import { Usecontext } from '../../contextapi';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const{state:{cart,totalPrice}, dispatch}=Usecontext();
    const navigate = useNavigate()
    // console.log( typeof Number(cart[0]?.price))
    console.log(totalPrice)
  
    const [total,settotal]=useState(0);
    console.log(total)
    useEffect(()=>{
    settotal(cart.reduce((acc, item) => {
        // Remove commas and convert to number
        const itemPrice = Number(item.price.replace(/,/g, ''));
        const itemQty = Number(item.qty);
      
        if (isNaN(itemPrice) || isNaN(itemQty)) {
          console.error('Invalid item price or quantity:', item);
          return acc; // Skip this item if price or quantity is not a number
        }
      
        return acc + (itemPrice * itemQty);
      }, 0));
    },[cart])

    useEffect(() => {
      dispatch({ type: 'toatl_price', payload: total });
  }, [total, dispatch]);
    // remove from cart---->>>

    function RemoveFromCart(id){
      dispatch({type:'RemoveFromCart',payload:id})
  }
        // console.log(total)
  return (
    <div className='flex gap-2  items-centerjustify-between font-["Poppins"]'>
    <div className='left-cart'>
      <h1 className='font-["Poppins"] text-2xl text-blue-900 font-semibold'>Your Cart</h1>
      <h6 className='font-["Poppins"] text-sm text-gray-500'>There are <span>{cart.length}</span> products in your cart</h6>
      <div className='table-responsive'>
        <table className='ml-3 mt-2 font-["Poppins"] border-[2px] backdrop-blur-10 bg-zinc-100   rounded-2xl w-[90%]'>
          <thead>
            <tr className='grid grid-cols-5 gap-4 p-1 text-left  '>
              <th>Product</th>
              <th className='ml-10'>Unit Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Remove</th>
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
                <td className='ml-[-20px]'><CounterPrice item={item} /></td>
                <td className='ml-[20px]'><strong>{Number(item.price.replace(/,/g, ''))*Number(item.qty) }</strong></td>
                <td className='flex justify-center'>
                  <button className='w-8 bg-red-400 ml-[-100px] h-8 rounded-xl font-bold text-3xl flex items-center justify-center'  onClick={()=>RemoveFromCart(item.id)}>
                    <IoIosClose />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  
  
        <div className='cart-right w-[28vw]  mr-10 flex justify-center items-center h-[17vw] border-[1px] border-gray-300 mt-10'>
            <div className='cart-right w-[15vw] h-[15vw] border-[1px] border-gray-300 ' >
                <h1 className='text-2xl font-bold '>Cart Total</h1>

                <div className='flex border-b-2 justify-between'><small className='text-gray-600 '>subtotal</small> <strong className='text-green-400'>{total}</strong></div>
                <hr className='mt-3' />

                <div className='flex border-b-2 justify-between'><small className='text-gray-600 '>shipping</small> <strong className='text-black'>FREE</strong></div>
                <hr className='mt-3' />

                <div className='flex border-b-2 justify-between'><small className='text-gray-600 '>Total</small> <strong className='text-green-600'>{total}</strong></div>

                <button className='bg-gradient-to-r from-blue-500 to-green-500 p-2 rounded-3xl ml-10 mt-2' onClick={()=>navigate('/checkout')}>Buy Now</button>
            </div>


        </div>
    </div>
  )
}

export default Cart