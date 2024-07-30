import { Checkbox, FormControlLabel } from '@mui/material'
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import React, { useState } from 'react'


function Sidebar({category}) {

    const[value,setValue]=useState([100,60000])
    const[value2,setValue2]=useState(0)
    console.log(category)

  return (
    <div className='w-[]'>
        <div className="container">
          {
            category!='Grocery' &&(
              <div>
              <h5 className='text-xl font-semibold'>Product Categgories</h5>
              <div className='flex leading-2 tracking-tighter flex-col text-sm text-zinc-800 w-[15vw] h-[14vw] border-t-[1px] border-gray-300 overflow-y-scroll'>
                 {['men', "women",'Fashion','digital','Fashion','digital'].map((item,i)=>(
                   <FormControlLabel key={i}  control={<Checkbox/>} label={item}/>
                 ))}
              </div>
              </div>

            )
          }
           
            <h5 className='uppercase font-semibold'>Filter By Price</h5>
           
               <RangeSlider className=" mt-2 outline-none color-green-300"  value={value} onInput={setValue} min={100} max={60000} step={5}/>
               <div className='flex pt-2 flex-row gap-10 '>
                <small>From:Rs.<span className='text-green-500'>{value[0]}</span></small> 
                <small>To: Rs.<span className='text-green-500'>{value[1]}</span></small> 
                </div>
        </div>

        <h5 className='text-xl mt-5 font-semibold'>Product Status</h5>
            <div className='flex leading-2 tracking-tighter flex-col text-sm text-zinc-800 w-[15vw] h-[8vw] border-t-[1px] border-gray-300 overflow-y-scroll'>
               {['inStock','inSale'].map((item,i)=>(
                 <FormControlLabel key={i} style={{border:'2x solid green'}}  control={<Checkbox/>} label={item}/>
               ))}
            </div>

            <h5 className='text-xl font-semibold'>Brands</h5>
            <div className='flex leading-2 tracking-tighter flex-col text-sm text-zinc-800 w-[15vw] h-[18vw] border-t-[1px] border-gray-300 overflow-y-scroll'>
               {['Fortune', "Nike",'Fashion','Lacoste','Fashion','digital'].map((item,i)=>(
                 <FormControlLabel key={i}  control={<Checkbox/>} label={item}/>
               ))}
            </div>

    </div>
  )
}

export default Sidebar