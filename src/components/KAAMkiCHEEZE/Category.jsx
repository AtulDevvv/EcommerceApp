import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Usecontext } from '../../contextapi';
import { useNavigate } from 'react-router-dom';

function Category() {
  const { state: { Products } } = Usecontext();
  const navigate = useNavigate();
  // console.log(Products[0])

  return (
    <div className='w-[80vw] h-[36vh] category relative'>
      <h1 className='font-bold text-xl mb-2 text-gray-800'>Features Categories</h1>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={-390}
        slidesPerView={3}
        loop={true}
        navigation={{
          width: 10, // Change width (limited)
          height: 10, // Change height (limited)
        }}
        
      
      >
        {Products.productData?.map((item) => (
          <SwiperSlide key={item.id} onClick={() => navigate(`/cat/${item.cat_name}`)}>
            <div className={`flex flex-col w-[10vw] justify-center  items-center h-30 cursor-pointer`} style={{background:item.color}}>
              <img src={item.image} alt="" />
              <span className='text-sm'>{item.cat_name}</span>
              <small>{item.items.length}</small>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Category;
