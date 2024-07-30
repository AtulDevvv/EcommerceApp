import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import { FaAngleDown  } from "react-icons/fa";
import Dialog from '@mui/material/Dialog'
import { IoSearch } from "react-icons/io5";
import { MdCancel } from "react-icons/md";

import { CountryList } from './Navigation/Countrylist';
function CountryDropDown() {
  const[drop, setdrop]=useState(false)
  const[country,setCountry]=useState('india')
  const [list , setlist]=useState()

  function dropCountry(){
setdrop(prev=>!prev)
  }


useEffect(()=>{
  setlist(CountryList);
},[])


 function countrySearch(e){
  let keyword=e.target.value.toLowerCase();
  console.log(keyword)
   setlist(
CountryList.filter((item)=>item.toLowerCase().includes(keyword)))


}
  function SelectCountry(e){

   let countryy=e.target.innerText;
   setCountry(countryy)
console.log(country)
  }


  return (
    <div>

 
        <Button  className=' w-[180px] h-[55px] min-w-[150px] ' onClick={dropCountry}>
         <div className='flex flex-col'>
            <span className='opacity-30 text-[1vw]'>Your Loaction</span>
           <div className='flex gap-8'> 
           <span> {country}</span>
           <span className='py-1'><FaAngleDown /></span>
           </div>

         </div>
        </Button>
   
        <Dialog open={drop} style={{padding:'4vw'}} className='LoacationModel text-center  '>
          <div className='text-center p-5 leading-10 relative'>
            <span className='absolute top-3 right-3'><MdCancel className='w-5 h-5' onClick={()=>setdrop(false)} /></span>

          <h4>Choose your Delivery Loaction</h4>
          <p className='text-sm text-gray-400'> Enter Your address and we will specify the offer for your area</p>
        <div className='ml-3 mr-3 mt-2 p-2 rounded-xl bg-[#f3f4f7]  relative'>
          <span className='absolute top-[26%] left-3'><IoSearch className='w-6 h-6  text-gray-700'/></span>
          <input type="text " className='outline-none  bg-transparent ml-8' placeholder='Select your Location...' onChange={(e)=>countrySearch(e)} />
        </div>
        <div className='border-b-3 flex flex-start text-slate-700 hover:text-sky-500'><span>Select Location</span></div>

        <ul className=' h-[30vh] overflow-scroll' onClick={(e)=>SelectCountry(e)}>
        { list?.map((item,index)=>(
           <li key={index} className='border-b-2 w-full list-none flex flex-start text-slate-700 hover:text-sky-200'>{item}</li>
        ))}
        </ul>
          </div>
      
        </Dialog>

        
    </div>
  )
}

export default CountryDropDown