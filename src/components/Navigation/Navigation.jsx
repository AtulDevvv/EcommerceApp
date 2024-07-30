import React, { useState } from 'react'
import { BiCategory } from "react-icons/bi";
import { FaAngleDown  } from "react-icons/fa";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { RiZcoolLine } from "react-icons/ri";
function Navigation() {

  const [showSubmenu, setSubmenus] = useState({
    shop: false,
    Fashion: false,
    Electronics:false,
    Grocery:false,
    AllCategroies:false,
    // Add more submenu states as needed
  });

  const handleMouseEnter = (submenu) => {
    setSubmenus((prevSubmenus) => ({
      ...prevSubmenus,
      [submenu]: true,
    }));
    
    // console.log(showSubmenu.AllCategroies)
    console.log(showSubmenu.shop)
  };
  const handleMouseLeave = (submenu) => {
    setSubmenus((prevSubmenus) => ({
      ...prevSubmenus,
      [submenu]: false,
    }));
    // console.log(showSubmenu.AllCategroies)
    console.log(showSubmenu.shop)
  };

  return (
    <div>
<nav className=' flex w-full gap-[10vw] items-center justify-between '>
    <div className='All-Categories relative'  onMouseEnter={() => handleMouseEnter('AllCategroies')}
                onMouseLeave={() => handleMouseLeave('AllCategroies')}>
        <Button className='!p-[1.2vw] flex gap-2 !bg-[#2bbef9] !text-white !rounded-[100px]' >
        <span><BiCategory className='w-[3vw] h-[3vh]' /></span>
            <span className='  text-sm'>All Categories</span>
            <span><FaAngleDown className='w-4 h-4' /></span>
        </Button>
        {
          showSubmenu.AllCategroies &&(
            <div className=' rounded-xl z-10 bg-white/70 absolute flex flex-col w-[15vw] h-[50vh]  left-[5%] !shadow-lg  font-[poppins] text-sm leading-6 text-gray-500   '   >
            <Link to='/'  ><span   className='hover:text-gray-700 '>Clothing</span></Link>
            <Link to='/'  ><span   className='hover:text-gray-700'>Footwear</span>    </Link>
            <Link to='/'  ><span   className='hover:text-gray-700'>Watches </span>   </Link>
            <Link to='/'  ><span   className='hover:text-gray-700'>Clothing</span>   </Link>
            <Link to='/'  ><span   className='hover:text-gray-700'>Footwear</span>      </Link>
            <Link to='/'  ><span   className='hover:text-gray-700'>Watches </span>  </Link>
            <Link to='/'  ><span   className='hover:text-gray-700'>Clothing</span> </Link>
            <Link to='/'  ><span   className='hover:text-gray-700'>Footwear</span>  </Link>
            <Link to='/'  ><span   className='hover:text-gray-700'>Watches </span>   </Link>
          </div>

          )
        }

    </div>



 <div className="2nd-col  ">
    <ul className=' ul  flex gap-[4vw] font-["Dosis"]  '>

        <Button style={{fontSize:'1.03rem',width:'70px' , height:'40px'}}>
          <li className=' hover:bg-blue font-["Dosis"] !rounded-2xl '> <Link to='/'>  <div className='flex items-center justify-center gap-2'><span>Home</span> <span><FaAngleDown/></span> </div></Link></li> </Button>

        <Button style={{fontSize:'1.03rem',width:'70px' , height:'40px'}} className='button'  ><li className=' hover:bg-blue font-["Dosis"]  relative transition-all duration-300 ease   ' onMouseEnter={() => handleMouseEnter('shop')}
                onMouseLeave={() => handleMouseLeave('shop')}  > <Link to='/'> <div className='flex items-center justify-center gap-2 transition-all duration-300 ease  '><span> Shop</span> <span><FaAngleDown/></span></div></Link>

        {
          showSubmenu.shop && (
            <div className='z-10 bg-white/70 w-[10vw] left-[-70%]  !shadow-lg  submenu absolute flex flex-col text-sm leading-6 text-gray-500 transform   '>
            <Link to='/'><Button>Clothing</Button></Link>
            <Link to='/'><Button>Clothing</Button></Link>
            <Link to='/'><Button>Clothing</Button></Link>
          </div>

          )
        }
       
         
        
        </li>
        
        
         </Button>
        <Button style={{fontSize:'1.03rem',width:'70px' , height:'40px'}}>
          
          <li className=' hover:bg-blue font-["Dosis"]  relative'  onMouseEnter={() => handleMouseEnter('Fashion')}
                onMouseLeave={() => handleMouseLeave('Fashion')} > <Link to='/'> <div className='flex items-center justify-center gap-2'><span> Fashion</span> <span><RiZcoolLine/></span></div> </Link>
              
        {
          showSubmenu.Fashion && (
            <div className=' z-10 bg-white/70 w-[10vw] left-[-70%]  !shadow-lg  submenu absolute flex flex-col text-sm leading-6 text-gray-500   '>
            <Link to='/'>Clothing</Link>
            <Link to='/'>Footwear</Link>
            <Link to='/'>Watches</Link>
          </div>

          )
        }
        
        </li></Button>
        
        <Button style={{fontSize:'1.03rem',width:'70px' , height:'40px'}}><li className=' hover:bg-blue font-["Dosis"] relative '  onMouseEnter={() => handleMouseEnter('Electronics')}
                onMouseLeave={() => handleMouseLeave('Electronics')} > <Link to='/'> Electornics</Link>
        {
          showSubmenu.Electronics && (
            <div className='z-10 bg-white/70 w-[10vw] left-[-30%]  !shadow-lg  submenu absolute flex flex-col text-sm leading-6 text-gray-500   '>
            <Link to='/'>Clothing</Link>
            <Link to='/'>Footwear</Link>
            <Link to='/'>Watches</Link>
          </div>

          )
        }
        
        
        </li> </Button>
        <Button style={{fontSize:'1.03rem',width:'70px' , height:'40px'}}><li className=' hover:bg-blue font-["Dosis"] relative '  onMouseEnter={() => handleMouseEnter('Grocery')}
                onMouseLeave={() => handleMouseLeave('Grocery')} > <Link to='/'> Grocery</Link>
        {
          showSubmenu.Grocery && (
            <div className='z-10 bg-white/70 w-[10vw] left-[-70%]  !shadow-lg  submenu absolute flex flex-col text-sm leading-6 text-gray-500  '>
            <Link to='/'>Clothing</Link>
            <Link to='/'>Footwear</Link>
            <Link to='/'>Watches</Link>
          </div>

          )
        }
        
        </li> </Button>
        <Button style={{fontSize:'1.03rem',width:'70px' , height:'40px'}}><li className=' hover:bg-blue font-["Dosis"]  '> <Link to='/'> Blog</Link>
       
        
        
        </li> </Button>
        <Button style={{fontSize:'1.03rem',width:'70px' , height:'40px'}}><li className=' hover:bg-blue font-["Dosis"] '> <Link to='/'> Contact</Link></li> </Button>

        
       
       
    </ul>
 </div>
    </nav>

    </div>
  )
}

export default Navigation