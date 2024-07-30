import React from 'react'
import { IoSearch } from "react-icons/io5";
import Button from '@mui/material/Button';
import { Usecontext } from '../contextapi';
import { useNavigate } from 'react-router-dom';
function SearchBox() {

const navigate=useNavigate()
  const{ filterState:{ byStock,
    byDelivery,
    byRating,
    sort,
    searchQuery},Filterdispatch} =Usecontext();
    // const handleChange = (e) => {
    //   navigate(`/cat/${e.target.value}`);
    // };
  return (
    <div>
        <div className='search-bar w-[36vw] !h-[3vh]  relative  p-6 bg-[#f3f4f7] ml-5 text-center  rounded-[14px] '>
    <input type="text"  className='bg-transparent w-full  !border-[0px] text-gray-600 !outline-none border-green-300  absolute top-[20%] left-[4%]' placeholder='search Your Items....' onChange={(e)=>Filterdispatch({type:'Filter_by_Search',payload:e.target.value})} />
    <Button className=' !w-1/20 !h-[4vh]  !rounded-[60%] !absolute top-[30%] right-[0%] z-3
    ' >

    <IoSearch className='w-6 h-6  text-gray-700' />
    </Button>
</div>
    </div>
  )
}

export default SearchBox