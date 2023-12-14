import React from 'react'
import jobs from './JobsData'
import { BiHeart } from 'react-icons/bi'
import {BsArrowRight} from 'react-icons/bs'
import { Fade } from 'react-reveal'


const Jobs = () => {
  return (
    <div className='p-16 border-b-[1px] border-gray-300'>

      <h1 className='text-3xl text-[#1b1b1b] font-semibold tracking-widest mb-4 mx-5 text-center md:text-left'>Find Jobs</h1>

      <h2 className='text-2xl text-[#684d4d] font-semibold tracking-widest mb-16 mx-5 text-center md:text-left'>Unlock Your Career Potential: Explore Job Opportunities!!</h2>

      <div className='flex flex-wrap gap-10 items-center justify-start md:mx-8 -z-50'>
        
        {jobs.map((jobs) => (
        <Fade bottom>
        <div className='h-auto w-[350px] p-4 border-[1px] border-gray-100 rounded-xl shadow-xl -z-50'>

            <div className='flex items-center justify-between w-full'>
              <div className='flex items-center justify-center gap-3'>
                <img src={jobs.image} alt={jobs.title} className='h-11 w-11 rounded-full' />
                <div>
                  <p className='text-lg font-bold text-[#1b1b1b]'>{jobs.company}</p>
                  <p className='text-sm text-gray-500 font-semibold'>{jobs.location}</p>
                </div>
              </div>
                <BiHeart className='fill-red-500'/>
            </div>


            <div className='w-full my-4'>
              <p className='text-xl font-semibold text-[#1b1b1b]'>{jobs.title}</p>
              <p className='text-[12px] my-1 font-semibold tracking-widest text-gray-400'>{jobs.salary}</p>

              <div className='flex items-center justify-start gap-2 my-3'>
                <p className='text-[11px] font-semibold bg-gray-200 px-[5px] py-[2px] rounded-md'>Full Time</p>
                <p className='text-[11px] font-semibold bg-gray-200 px-[5px] py-[2px] rounded-md'>Senior</p>
                <p className='text-[11px] font-semibold bg-gray-200 px-[5px] py-[2px] rounded-md'>Leadership</p>
              </div>
            </div>

            <div className='w-full my-4 flex items-center justify-between'>
              <p className='text-md font-semibold text-gray-400'>{jobs.date}</p>

              <button className='text-sm bg-gradient-to-b from-gray-800 via-[#1b1b1b] to-black text-white px-[6px] py-[3px] rounded-md'>Apply</button>
            </div>

        </div>
        </Fade>
        ))}

        <div className='w-full flex items-center justify-center'>  
          <button 
          
          className='bg-[#090909] text-white rounded-2xl px-9 py-3 text-xl font-bold flex items-center justify-center gap-5 my-12 group bg-gradient-to-b from-gray-800 via-[#1b1b1b] to-black'>

            Explore More Jobs Now!
            <BsArrowRight size={30} className='transition duration-500 group-hover:translate-x-4 '/>

          </button>
        </div>

      </div>
    </div>
  )
}

export default Jobs