import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

const MentalHealth = () => {
  return (
    <div>
        <p className='text-center px-8 py-5 text-3xl tracking-widest mt-3'>Explore Health Care Educational Content and Laws</p>

        <div className='flex items-center justify-around w-full mt-6'>

        <div className=" group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-3xl shadow-2xl">
            <div className="w-[500px] h-[400px]">
            <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhbHRoY2FyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="blog" />
            </div>

            {/* on hover color */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>

            {/* on hover text */}
            <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="text-3xl font-bold text-white">Mental Health Chatbot</h1>

            <p className="my-6 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Explore a virtual companion dedicated to mental well-being. Our chatbot provides support, resources, and a listening ear. Discover ways to enhance your mental health, find coping strategies, and engage in conversations that promote a positive mindset.</p>


            <Link to="/mental-health/mh-chatbot"><Button variant="contained">Explore</Button></Link>
            </div>

        </div>

        <div className=" group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-3xl shadow-2xl">
            <div className="w-[500px] h-[400px]">
                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125" src="https://interestedvideos.com/wp-content/uploads/2023/06/healthcare-5K1LG-1536x864.jpg" alt="blog" />
            </div>

            {/* on hover color */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>

            {/* on hover text */}
            <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="text-3xl font-bold text-white">Live Therapy Sessions</h1>

            <p className="my-6 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Embark on a journey of live therapy sessions designed to provide personalized support and guidance. Our sessions offer a safe space for self-discovery, healing, and growth. Connect with experienced therapists who are dedicated to helping you navigate life's challenges. .</p>


                <Link to="/mental-health/therapy"><Button variant="contained">Explore</Button></Link>
            </div>

        </div>

        </div>
    </div>
  )
}

export default MentalHealth