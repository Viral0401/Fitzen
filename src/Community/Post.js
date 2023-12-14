import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
//icons
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import SwapHorizOutlinedIcon from '@mui/icons-material/SwapHorizOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';

// https://rapidapi.com/Glavier/api/twitter135/
const Post = () => {
  return (
    <div className="p-3 flex items-start justify-start gap-5 cursor-pointer border-b border-gray-700">
      
      <img src='https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png' alt='placeholder' className='h-10 w-11 rounded-full' />

      <div className='w-[88%]'>
        
        {/* 1st part of the post */}
        <div className='flex items-start justify-between'>
          {/* userdata and post text*/}
          <div className='flex flex-col items-start justify-start'>

            <div className='flex items-center justify-start gap-3'>
              <p className='text-base font-semibold'>Bilal Anjum</p>
              <p className='text-xs text-[#6E767D]'>@bilalanjum | 3 days ago</p>
            </div>

            <div className='mt-2'>
              <p>Hey there hope you guys are doing well, i tweeting here for asking what's going on here ?</p>
            </div>

          </div>

          {/* ellipses */}
          <Button className='bg-gray-400 rounded-full h-7 w-7 flex items-center justify-start'><MoreVertIcon /></Button>
        </div>

        {/* image if any */}
        <div className='mt-3'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1tvdsWM7eGEqajUKlDO8a8arClgDo6Q7lH3lKplXIig&s" className='max-h-[350px] h-auto w-full rounded-xl shadow-xl' alt='post' />
        </div>

        {/* comment, retweet, like, share, poll icons */}
        <div style={{color:"#6E767D"}} className='mt-6 flex items-center justify-around'>

          <Button><SmsOutlinedIcon /></Button>
          <Button><SwapHorizOutlinedIcon /></Button>
          <Button><FavoriteBorderOutlinedIcon /></Button>
          <Button><ShareOutlinedIcon /></Button>
          <Button><BarChartOutlinedIcon /></Button>

        </div>

      </div>

    </div>
  )
}

export default Post