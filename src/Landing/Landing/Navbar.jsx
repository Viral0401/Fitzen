import React,{useState} from 'react';
import {AiOutlineClose , AiOutlineMenu} from 'react-icons/ai';
import logo from '../../Logos/fitzen-logo.jpg'


function Navbar() {

    const [nav,setNav] = useState(false);

    const handleNav =()=>{
        setNav(!nav);
    };


  return (
    <div className='text-black flex justify-between mx-auto p-5 h-20  items-center '>

        <a href='/' className='mx-11 w-44 font-bold'><img src={logo} alt="main navbar logo"/></a>
        
        <ul className='hidden md:flex font-bold text-base'>
            <a href='/About'><li className='p-1 px-7 transition duration-300 hover:text-[#A0BDFF]  cursor-pointer'>About Us</li></a>
            <a href='/Blog'><li className='p-1 px-7 transition duration-300 hover:text-[#A0BDFF]  cursor-pointer'>Blogs</li></a>
            <a href='/Community'><li className='p-1 px-7 transition duration-300 hover:text-[#A0BDFF]  cursor-pointer'>Community</li></a>

        </ul>

        <ul className='hidden md:flex font-bold text-base mr-14'>
            <li className='p-2 px-10 transition duration-300 hover:text-[#A0BDFF]  cursor-pointer'>
                <a href='/Login'>Login</a>
            </li>
            <li className='p-2 px-4 bg-[#A0BDFF] rounded-3xl transition duration-300 hover:text-white  cursor-pointer'>
                <button >
                    <a href='/SignUp'>Get Started</a>
                </button>
            </li>
        </ul>    

        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineMenu className='cursor-pointer' size={30} /> : <AiOutlineClose className='cursor-pointer' size={30}/> }
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[80%] h-screen bg-[#1b1a1a] opacity-95 p-4 ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%] top-0 w-[80%] h-full p-4'}>
        <a href='/' className='w-44 font-bold'><img src={logo} alt="main navbar logo"/></a>
            <ul className='pt-10 uppercase h-screen '>
    
                <a href='/About'><li className='py-5 px-4 text-2xl hover:text-[#A0BDFF] cursor-pointer'>About Us</li></a>
                <a href='/Blog'><li className='py-5 px-4 text-2xl hover:text-[#A0BDFF] cursor-pointer'>Blog</li></a>
                <a href='/Community'><li className='py-5 px-4 text-2xl hover:text-[#A0BDFF] cursor-pointer'>Community</li></a>
                <a href='/Login'><li className='py-5 px-4 text-2xl hover:text-[#A0BDFF] cursor-pointer'>Login</li></a>

            </ul>
        
        </div>

    </div>
  );
};

export default Navbar