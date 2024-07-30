import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { GoPerson } from "react-icons/go";
import { IoBagOutline } from "react-icons/io5";
import CountryDropDown from './CountryDropDown';
import SearchBox from './SearchBox';
import Navigation from './Navigation/Navigation';
import { Usecontext } from '../contextapi';
import { auth } from './firebase/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


async function handleGoogle(e) {
  e.preventDefault();
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
}

function Header() {
  const { state: { cart,totalPrice} } = Usecontext();
  const navigate = useNavigate();

  return (
    <div className='Header_wrapper p-5 px-[4rem] border-b-2'>
      <div className='navSection pt-5 w-full flex'>
        <div className='logo w-[15vw] leading-3 h-[15vh]'>
          <Link to='/'>
            <img className='object' src="https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/bacola-logo.png" alt="Bacola Logo" />
          </Link>
          <span className='text-sm text-gray-300 ml-3'>Online Shopping</span>
        </div>
        <div className='dropdown-country border-[1px] !h-[10vh] border-green-300 ml-5'>
          <CountryDropDown />
        </div>
        <div className="searchBOX">
          <SearchBox />
        </div>
        <div className="top-right-nav ml-10 mt-1 w-[20vw] h-[5vh] flex gap-10">
          <Button
            style={{ border: '1px solid gray', borderRadius: '60%', minWidth: '10px' }}
            className='info w-10 min-w-[2vw] !h-[7vh] rounded-3xl p-[0.8vw] !border-[3px] !border-zinc-500'
            onClick={handleGoogle}
          >
            {auth.currentUser ? <span onClick={()=>navigate("/AuthPage")} ><GoPerson className='text-2xl'  /></span> : <p onClick={()=>navigate("/authPage")}>SignIn</p>}
          </Button>
          <div className="price w-20 h-10 p-2 text-center bg-gray-100 rounded-lg">
         <h1>{totalPrice?totalPrice:0}</h1>
          </div>
          <div className="basket relative p-3 w-10 h-10 rounded-3xl bg-[#fff1ee]">
            <IoBagOutline className='text-orange-600' />
            <span
              className='absolute top-0 right-0 w-5 flex items-center justify-center cursor-pointer rounded-xl text-orange-800 text-center bg-orange-300 h-5'
              onClick={() => navigate('/cart')}
            >
              {cart.length}
            </span>
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
}

export default Header;
