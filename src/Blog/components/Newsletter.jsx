import React from 'react'
import {Zoom} from 'react-reveal'


const Newsletter = () => {
  
  const bag2 = "https://assets.website-files.com/62cc07ca0720bd63152e1799/62cd16b4a5613c06cf9a0ff4_line-bg.svg";

  return (

    <div className='flex items-center justify-center md:p-20 w-full p-8 bg-[#5b5f63]' style={{backgroundImage: `url(${bag2})`, backgroundSize:'cover'}}>
        
        <div className='bg-[#24292E]  md:p-16 rounded-3xl p-5'>
            <p className='text-center text-xl md:text-3xl font-semibold text-white my-2'>Join Our Newsletter</p>
            <p className='text-center text-md md:text-lg text-gray-400 mb-7'>Sign up to receive the latest updates, directly from our company</p>

            <div className='md:flex justify-between'>
                <Zoom clear>
                <input type="text" name="fname" id="fname" placeholder='First Name' className='bg-[#353B42] text-gray-400 px-4 md:px-6 py-2 md:py-4 my-4 md:my-0 md:w-auto w-full outline-none rounded-xl '/>
                </Zoom>
                <Zoom clear>
                <input type="text" name="lname" id="lname" placeholder='Last Name' className='bg-[#353B42] text-gray-400 px-4 md:px-6 py-2 md:py-4 my-4 md:my-0 md:w-auto w-full outline-none rounded-xl ' />
                </Zoom>
            </div>

            <Zoom clear>
            <input type="email" name="email" id="email" placeholder='Email' className='bg-[#353B42] text-gray-400 px-4 md:px-6 py-2 md:py-4 outline-none rounded-xl w-full my-4 -z-50'/>
            </Zoom>

            <p className='text-center text-sm text-gray-400 mb-7 flex items-center justify-center gap-5 my-3'>
                <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div class="w-11 h-6 bg-gray-400 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                </label>
            Sign up to receive the latest updates
            
            </p>

            <button className='bg-[#0066FF] text-white font-semibold w-full rounded-xl px-4 md:px-6 py-2 md:py-4 mt-10 shadow-md shadow-[#0066FF] transition duration-300 hover:-translate-y-2' >Sign Up Now!</button>


        </div>

    </div>
  )
}

export default Newsletter