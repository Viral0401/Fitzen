import React,{useState} from 'react';
import {AiOutlineClose , AiOutlineMenu} from 'react-icons/ai';
import {CiSearch} from 'react-icons/ci'
import logo from '../../Logos/fitzen-logo.jpg'


function Navbar() {

    const [nav,setNav] = useState(false);

    const handleNav =()=>{
        setNav(!nav);
    };


  return (
    <div className=' bg-white flex justify-between px-10 h-20  items-center py-11 border-b-[1px] border-gray-300 fixed w-screen md:z-0 z-50'>

        <p className='md:hidden text-xl'>THE BLOG</p>
        <ul className='hidden md:flex'>

            <li className='p-3 mx-5 text-lg cursor-pointer'>Blogs</li>

            <li className='p-3 mx-5 text-lg  cursor-pointer'>News</li>
            
        </ul>

        <ul className='hidden md:flex'>

            <a href='/' className='w-44 font-bold'><img src={logo} alt="main navbar logo"/></a> 
            
        </ul>

        <ul className='hidden md:flex'>

            <li className='p-3 mx-5 text-lg cursor-pointer'>Events</li>

            <li className='p-3 mx-5 text-lg  cursor-pointer'>Jobs</li>

            <li className='p-4 mx-5 text-lg  cursor-pointer bg-[#090909] text-white flex items-center justify-center'><CiSearch size={25}/></li>
            
        </ul>

        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineMenu className='cursor-pointer' size={30} /> : <AiOutlineClose className='cursor-pointer' size={30}/> }
        </div>

        <div className={nav ? 
        
        'fixed left-0 top-0 w-[75%] h-full border-r border-r-gray-300 p-10 ease-in-out duration-500 bg-[#131313] text-white' 

        : 

        'ease-in-out duration-500 fixed left-[-100%] top-0 w-[60%] h-full p-10'
        
        }>

            <p className='p-1 px-3 py-5 text-3xl border-b-[1px] border-gray-300'>The Blog</p>

            <ul className='pt-10 uppercase'>

                <li className='p-1 px-3 my-10 text-xl  cursor-pointer'>Blogs</li>

                <li className='p-1 px-3 my-10 text-xl cursor-pointer'>News</li>

                <li className='p-1 px-3 my-10 text-xl  cursor-pointer'>Events</li>

                <li className='p-1 px-3 my-10 text-xl cursor-pointer'>Jobs</li>

                <li className='p-1 px-3 my-80 text-xl cursor-pointer flex gap-3 items-center border-[1px] rounded-full '><CiSearch size={25}/>
                <input type="search" name="" id="" placeholder='Search...' className='w-full text-white bg-transparent focus:none border-none'/>
                
                </li>
                
            </ul>
        
        </div>
    </div>
  );
};

export default Navbar