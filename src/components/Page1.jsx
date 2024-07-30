import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Slider from "react-slick";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; 

import Product from './Product';
import { Usecontext } from '../contextapi';
const PrevArrow = ({ onClick }) => (
  <div className="arrow prev text-md bg-blue-300 w-10 rounded-xl flex items-center justify-center " onClick={onClick}>
    <FaArrowLeft />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div  className="arrow next text-md bg-blue-300 w-10 rounded-xl flex items-center justify-center " onClick={onClick}>
    <FaArrowRight />
  </div>
);


function Page1() {
  const { state: { Products }, bestselling } = Usecontext();
  var settings2={
    dots:false,
    infinite:false,
    speed:100,
    slidesToShow:1,
    slidesToScroll:1,
    fade:false,
    arrows:false,

}

const settings = {
  dots: true,
  infinite: true,
  speed: 100,
  slidesToShow: 3.6,
  slidesToScroll: 4,
  prevArrow: <PrevArrow />, // Custom prev arrow component
  nextArrow: <NextArrow />, // Custom next arrow component
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

  // console.log(bestselling);

  useEffect(() => {
    const handleMouseEnter = (event) => {
      const item = event.currentTarget;
      const popping = item.querySelector('.popping');
      if (popping) {
        popping.style.opacity = 1;
        popping.style.transition = '1s ease-in';
        popping.style.transform = 'translateX(35%)';
      }
    };

    const handleMouseLeave = (event) => {
      const item = event.currentTarget;
      const popping = item.querySelector('.popping');
      if (popping) {
        popping.style.opacity = 0;
        popping.style.transition = '0.1s ease-in-out';
        popping.style.transform = 'translateX(-10px)';
      }
    };

    const items = document.querySelectorAll('.papa');
    items.forEach((item) => {
      item.addEventListener('mouseenter', handleMouseEnter);
      item.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      items.forEach((item) => {
        item.removeEventListener('mouseenter', handleMouseEnter);
        item.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div className='p-5 px-[4rem] min-w-[100vw]'>
      <div className='page1-kaam flex gap-16'>
        <div className='image-part w-[26vw] h-[70vh] bg-[url("https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/bacola-banner-04.jpg")] relative'>
          <div className='mt-10 ml-20 leading-9 absolute flex flex-col'>
            <h5 className='text-lg text-gray-400'>Best Bakery Products</h5>
            <h1 className='font-thin text-[1.6rem] text-gray-800'>Freshest Products</h1>
            <strong className='text-2xl'>every hour.</strong>
            <small>only from</small><br />
            <strong className='font-bold text-2xl'>$24.99</strong><br />
            <button className='bg-sky-600 flex items-center justify-center mt-3 w-24 rounded-2xl h-8'>Shop Now</button>
          </div>
        </div>
        <div className='product-part w-[70%]'>
          <div className='best-seller flex flex-row justify-between'>
            <div>
              <h1 className='font-["dosis"] text-xl font-bold text-gray-800'>BEST SELLERS</h1>
              <small className='text-gray-400'>Do not miss the current offers until the end of March.</small>
            </div>
            <button className='w-[5.9rem] rounded-2xl h-8 border-[1px] border-gray-400'>View All🔗</button>
          </div>
          <div className='slider-products overflow-hidden w-[100%]'>
          <Slider {...settings}  > 
              {bestselling?.map((item, i) => (
              
                  <Product item={item} key={item.id} />
              
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page1;
