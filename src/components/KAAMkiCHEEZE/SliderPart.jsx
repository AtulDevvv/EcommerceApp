import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Category from "./Category";


export default function SliderPart() {





  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // arrows:true,
  };



  return (
    <div className="banner  ">
      <Slider {...settings}>
      <div className="w-[100vw] h-[50vh] border-2">
       <img className="w-[1000vw] h-full object-contain" src='https://storiesflistgv2.blob.core.windows.net/stories/2022/12/Article-banners.png' alt="" />
      </div>
      <div    className="w-[100vw] h-[50vh] overflow-hidden">
       <img  className="w-[1000vw] h-full object-contain" src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Consumables/GW/Mar18/QC/PC_GW_Hero_3000x1200_01._CB579486410_.jpg" alt="" />
      </div>
      <div  className="w-[100vw] h-[50vh] overflow-hidden">
       <img  className="w-[1000vw] h-full object-contain" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG24/Smart_Watches/3000X1200_New_Launch_March_hero1._CB580055456_.jpg" alt="" />
      </div>
      <div  className="w-[100vw] h-[50vh] overflow-hidden">
       <img  className="w-[1000vw] h-full object-contain" src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/revised/final/Skincare-PC_3000_1200._CB560068220_.jpg" alt="" />
      </div>
     
     
    </Slider>
<div className=" w-full h-[15vw] flex items-center justify-center">

    <Category/>
</div>
    </div>
    
  );
}

