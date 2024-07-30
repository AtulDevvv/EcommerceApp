import React, { useEffect,useState } from 'react'
import { MdOutlineEmail } from "react-icons/md";

function NewsLetter() {
    const [rotate,setrotate]=useState(0);

    useEffect(()=>{
        window.addEventListener('mousemove',(e)=>{
            let mousex=e.clientX;
            let mousey=e.clientY;
            let deltaX= mousex - window.innerWidth/2
            let deltaY= mousey - window.innerHeight/2;
            let angle=Math.atan2(deltaY,deltaX)*(180/Math.PI)
            // console.log(angle)
            setrotate(angle)
        },[rotate])
    })
    
  return (
    <div className='flex  w-full h-[75vh] mt-40 pt-3 pl-10 bg-blue-600 text-white font-[poppins]'>
        <div className='left-part flex flex-col gap-2'>
            <small className='text-xl font-thin text-white '>Rs.199 discount for your first order</small>
            <strong className='text-2xl font-bold'>Join our newsletter and get...</strong>
            <small className='text-[0.8rem] text-gray-300 font-thin mt-2'>Join our email subscription now to get updates on promotions and coupons.</small>

            <div>
                
                <div className='eye-part w-[30vw] h-[30vh]  relative'>
                   
                  <div  className='relative flex gap-10 '>

                    <div style={{ transform: `translate(100%,100%) rotate(${rotate}deg)` }}   className='w-10 text-xl font-bold eye text-blue-500 bg-white h-10 absolute top-0 rounded-3xl left-20 border-2 border-blue-200' >👁️</div>
                    <div style={{ transform: `translate(100%,100%) rotate(${rotate}deg)`}}   className='w-10 eye  text-xl font-bold   bg-white h-10 absolute top-0 rounded-3xl right-[40%] text-blue-500 border-2 border-blue-200 '>👁️</div>
                  </div>
                  <img className='bg-blue-600 w-[20vw] h-[20vh] ml-[5vw]' src="https://www.kindpng.com/picc/m/43-434314_transparent-png-eye-big-eyes-clip-art-png.png" alt="" />
                    <img className='w-full h-full' src="https://static.vecteezy.com/system/resources/previews/014/392/002/original/smile-icon-on-transparent-background-free-png.png" alt="" />
                </div>
            </div>
            <div className='relative  ml-9   w-[25vw] h-[6vw]  bg-white/70 rounded-lg  '>

                <input type="text" className='w-[20vw] ml-20 h-[5vw] z-10 outline-none rounded-xl bg-white/5  text-white/30' placeholder='enter your Email ' />
                <MdOutlineEmail className='absolute left-6 top-[40%] text-white/50 w-6 h-6'/>
            </div>

        </div>
        <div className='right-part'>
        <img className='translate-x-60  translate-y-[100px]' src="https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/coupon.png" alt="" />
        </div>
    </div>
  )
}

export default NewsLetter