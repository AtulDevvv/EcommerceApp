import React, { useState, useEffect } from 'react';
import { Usecontext } from '../../contextapi';

function CounterPrice({ item }) {
  const { state: { cart }, dispatch } = Usecontext();
  const [inputValue, setInputValue] = useState(item.qty);

  // Sync with the context state in case it changes outside of this component
  useEffect(() => {
    setInputValue(item.qty);
  }, [item.qty]);

  const incrementQuantity = () => {
    const newQuantity = inputValue + 1;
    setInputValue(newQuantity);
    dispatch({ type: 'CHANGE_CART_QTY', payload: { id: item.id, qty: newQuantity } });
  };

  const decrementQuantity = () => {
    if (inputValue > 1) { // Assuming you don't want the quantity to go below 1
      const newQuantity = inputValue - 1;
      setInputValue(newQuantity);
      dispatch({ type: 'CHANGE_CART_QTY', payload: { id: item.id, qty: newQuantity } });
    }
  };

  return (
    <div className='add-cal-inc-decv flex flex-row gap-2 mt-5'>
      <button 
        onClick={incrementQuantity}
        className='px-[8px] py-[5px] font-bold rounded-[55%] !bg-[#2bbef9] text-white'>
        +
      </button>
      <input 
        type="text" 
        value={inputValue} 
        disabled={true} 
        className='backdrop-blur bg-blue-100 w-20 text-center rounded-xl' 
      />
      <button 
        onClick={decrementQuantity}
        className='px-[8px] py-[5px] font-bold rounded-[55%] !bg-[#2bbef9] text-white'>
        -
      </button>
    </div>
  );
}

export default CounterPrice;
