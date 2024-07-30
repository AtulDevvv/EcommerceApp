import React,{useRef,useState} from 'react'
import { Dialog, Rating } from '@mui/material';
import Slider from "react-slick";
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CounterPrice from './CounterPrice';
import HeartIcon from './HeartSvg';
import { Usecontext } from '../../contextapi';

function ProductModel({setOpenProductModel,isOpenProductModel,item}) {
    const ZoomSliderBig=useRef()
    const zoomSlider=useRef()
    
    var settings2={
        dots:false,
        infinite:false,
        speed:700,
        slidesToShow:1,
        slidesToScroll:1,
        fade:false,
        arrows:false,
    
    }

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows:true,
        fade:false,
      };

    const goto=(index)=>{
        zoomSlider.current.slickGoTo(index);
        ZoomSliderBig.current.slickGoTo(index)
    }

    const{state:{cart},dispatch} = Usecontext();
    function ADDtoCart(item){
        dispatch({ type: 'AddToCart', payload: item });
        // alert('yes  i m clicked ')
        // console.log('yeah its working')
    }
  return (
    <div> <Dialog  onClose={()=>setOpenProductModel(false)} open={isOpenProductModel} className='flex justify-center items-center  '>
    <div className='w-[70vw] ml-10 h-[90vh] p-3 rounded-xl'>
     <h1 className='text-xl font-semibold mt-3'> {item.productName} </h1>
     <div className='flex items-center border-b-[1px] border-blur-gray-200 '>
         <div className='flex items-center mr-4'>
             <span> brand:<strong className='text-gray-700'>{item.brand}</strong></span>
            

         </div>
         <Rating name="read-only" value={item.rating} size='small' precision={0.5} readOnly/>
     </div>

     <div className='flex flex-row mt-2 gap-3 '>
         <div className='w-[30%] h-1/3 '>
         <div className='productZoom border-2 w-full'>
             <Slider {...settings2} className='zoomSliderBig' ref={ZoomSliderBig}> 
                 <div className='item'>
             <InnerImageZoom  zoomType='hover' zoomScale={1} src={item.productImages[0]}  />
                 
             </div>
                 <div className='item'>
             <InnerImageZoom  zoomType='hover' zoomScale={1}  src={item.productImages[1]}  />
                 
             </div>
                 <div className='item'>
             <InnerImageZoom  zoomType='hover' zoomScale={1}  src={item.productImages[2]} />
             {/* <InnerImageZoom  zoomType='hover' zoomScale={1.5}  src={item.productImages[3]} /> */}
                 
             </div>
             </Slider>
            
            
         </div>
       

         <div className='w-full'>
         <Slider {...settings} className='zoomSlider ' ref={zoomSlider}>
             <div className='  item w-[50px] h-50px]  overflow-hidden '>
                 <img className='w-full h-full object-contain' src={item.productImages[0]} width={'100px'} height={'100px'} onClick={()=>goto(0)} alt="" />
             </div>
             <div className=' item w-[50px] h-[50px]  overflow-hidden '>
                 <img className='w-full h-full object-contain'  src={item.productImages[1]}width={'100px'} height={'100px'} onClick={()=>goto(1)} alt="" />
             </div>
             <div className=' item w-[50px] h-[50px]  overflow-hidden '>
                 <img className='w-full h-full object-contain'  src={item.productImages[2]} width={'100px'} height={'100px'} onClick={()=>goto(2)} alt="" />
             </div>
             <div className=' item w-[50px] h-[50px]  overflow-hidden '>
                 <img className='w-full h-full object-contain'  src={item.productImages[3]} width={'100px'} height={'100px'} onClick={()=>goto(2)} alt="" />
             </div>
             
            

         </Slider></div>
             
         </div>
         


     <div className='left-product-model flex flex-col gap-4 '>
             <big className='font-bold'><strong className='text-red-400  text-semibold'>Rs.</strong> {item.price}</big>
             <small className='text-green-600 bg-green-100 p-2 w-20 rounded-xl'>in stock</small>
             <small className='text-md text-gray-900'>{item.description}</small>
            <CounterPrice item={item}/>
            <button className='bg-gradient-to-r from-blue-500 to-green-500 w-[10vw] p-2 ml-10 rounded-3xl'     onClick={()=>ADDtoCart(item)}>Add to cart</button>
          
           <span className='flex items-center text-blue-600 '> <HeartIcon/> <small>Add To Whistlist</small> </span> 
             <div></div>
         </div>
    </div>
     </div>
     </Dialog></div>
  )
}

export default ProductModel