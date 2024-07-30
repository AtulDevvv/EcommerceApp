import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import ProductModel from './KAAMkiCHEEZE/ProductModel';
import { Usecontext } from '../contextapi';

function Product({ item }) {
  const [isOpenProductModel, setOpenProductModel] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPoppingHovered, setIsPoppingHovered] = useState(false);
  const{state:{cart},dispatch} = Usecontext();
function ADDtoCart(item){
    dispatch({ type: 'AddToCart', payload: item });
    // alert('yes  i m clicked ')
    // console.log('yeah its working')
}
// console.log(cart)

  if (!item) {
    return <div>Loading...</div>;
  }


  const calculateDiscount = (oldPrice, newPrice) => {
    if (!oldPrice || !newPrice) return 0;
    return Math.round(((oldPrice - newPrice) / oldPrice) * 100);
  };

  const discountPercentage = calculateDiscount(item.oldPrice, item.price);

  return (
    <div style={{ height: isHovered ? '60vh' : '55vh', transition: '0.4s ease-in-out' }}
      className='relative w-[17vw]  border-[1px] border-gray-300 rounded-xl flex hover:bg-opacity-75 hover:bg-gray-100 hover:backdrop-blur-lg flex-col items-center justify-center  overflow-hidden'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={item.catImg} alt="" style={{
          scale: isHovered ? '0.9' : '0.8',
          background:isHovered?'rgba(255, 255, 255, 0.2)':'',
          opacity:isHovered?'0.7':'',
          backdropFilter:isHovered?'blur(8)':'',

          transition: '0.4s ease-in-out',
          width: '70%',
          objectFit: 'cover',
        }}   />
      <div className='px-3 py-[-20px] leading-3'>
        <h3 className='font-[500] hover:text-blue-400 leading-5 text-sm'>{item.productName}</h3>
        <small className='text-green-400'>IN STOCK</small>
        <span className='flex'>{Array(4).fill().map((_, i) => <FaStar className='text-yellow-300' key={i} />)} <span><CiStar /></span></span>
        <div className='prices flex gap-2'>
          <h1 className='line-through text-sm text-gray-400'>Rs.{item.oldPrice}</h1>
          <strong className='text-red-500 text-sm font-semibold '>Rs.{item.price}</strong>
        </div>

        {discountPercentage > 0 && (
          <div style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            background: 'linear-gradient(45deg, #ff416c, #ff4b2b)',
            color: 'white',
            padding: '5px 10px',
            borderRadius: '5px',
            fontSize: '12px',
            fontWeight: 'bold',
            zIndex: '1',
          }}>
            {discountPercentage}% OFF
          </div>
        )}
        <button
          className='rounded-3xl bg-green-100 text-green-400 absolute top-[30%] hover:bg-green-300 hover:text-white w-40 h-10 border-[1px] border-green-400'
          style={{ opacity: isHovered ? '1' : '0', transform: isHovered ? 'translateY(10px)' : 'translateY(-40%)', transition: '0.5s ease-in-out' }}

          onClick={()=>ADDtoCart(item)}
        >
          Add to Cart
        </button>
      </div>
      <div
        className='absolute right-0 top-0 gap-5 flex flex-col opacity-1 w-[10vw] h-full'
        onMouseEnter={() => setIsPoppingHovered(true)}
        onMouseLeave={() => setIsPoppingHovered(false)}
      >
        <button
          onClick={() => setOpenProductModel((prev) => !prev)}
          className='w-[2.6rem] h-10 bg-gray-100 hover:bg-blue-800 hover:text-white flex items-center justify-center rounded-3xl'
          style={{ opacity: isPoppingHovered ? 1 : 0, transform: isPoppingHovered ? 'translateX(35%)' : 'translateX(-10px)', transition: isPoppingHovered ? '0.3s ease-in' : '0.1s ease-in-out' }}
        >
          <MdOutlineZoomOutMap className='text-gray-400 hover:scale-125' />
        </button>
        <button
          className='bg-gray-100 w-[2.6rem] h-10 hover:bg-blue-800 hover:text-white flex items-center justify-center rounded-3xl'
          style={{ opacity: isPoppingHovered ? 1 : 0, transform: isPoppingHovered ? 'translateX(35%)' : 'translateX(-10px)', transition: isPoppingHovered ? '0.3s ease-in' : '0.1s ease-in-out' }}
        >
          <FaRegHeart className='hover:scale-125 text-gray-400' />
        </button>
      </div>
      <ProductModel setOpenProductModel={setOpenProductModel} isOpenProductModel={isOpenProductModel} item={item} />
    </div>
  );
}

export default Product;
