import React, { useEffect, useRef, useState } from 'react'

import Product from './Product';
import { Usecontext } from '../contextapi';

function Page2() {
    const { state: { Products }, bestselling } = Usecontext();

  return (
    <div className='w-full h-[100vh] p-5 px-[4rem]'>
        <div className='page2 flex gap-14'>
        <div className='trending w-[30%] h-[60Vh] rounded-xl border-2 border-green-300 '> 
        <div className='product-trending'>
       <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/sidebar-banner.gif" alt="" />

        </div>
        </div>
         
           <div className='w-[70%]'>

 <div className='best-seller w-[100%] flex justify-between   '>
    <div>
        <h1 className=' font-["dosis"] text-xl font-bold text-gray-800'>BEST SELLERS</h1>
        <small className='text-gray-400'> Do not miss the current offers until the end of March.</small>
    </div>
<button className='w-[5.9rem] rounded-2xl h-8 border-[1px] border-gray-400'>View All🔗</button>
           </div>
     <div className='product-part gap-3 flex flex-wrap w-full '>
        
     {bestselling?.map((item, i) => (
              
              <Product item={item} key={item.id} />
          
          ))}

            </div>
          
          
            
           
    
           <div>




           </div>
    


</div>

           

            </div>
        </div>

  
  )
}

export default Page2