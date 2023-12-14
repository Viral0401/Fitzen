import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import progress1 from './progress1.png'
import progress2 from './progress2.png'

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex', borderRadius:'100%' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius:'100%',
          boxShadow:'2px 2px 2px 2px rgba(0, 0, 0, 0.2)'
        }}
      >
        <Typography variant="h3" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

const fitnessProgressData = [
    {
      img: progress1,
      heading: 'Cardio Workout',
      description: 'Complete a 30-minute high-intensity cardio session to improve cardiovascular health.',
      reward: Math.floor(Math.random() * 100) + 1, // Random number between 1 and 100
    },
    {
      img: progress2,
      heading: 'Strength Training',
      description: 'Engage in a full-body strength training routine, focusing on major muscle groups.',
      reward: Math.floor(Math.random() * 100) + 1, // Random number between 1 and 100
    },
    {
      img: progress2,
      heading: 'Yoga and Flexibility',
      description: 'Practice 20 minutes of yoga for flexibility and mental relaxation.',
      reward: Math.floor(Math.random() * 100) + 1, // Random number between 1 and 100
    },
    {
      img: progress1,
      heading: 'Nutrition Check',
      description: 'Maintain a balanced diet with proper nutrients to support your fitness goals.',
      reward: Math.floor(Math.random() * 100) + 1, // Random number between 1 and 100
    },
    // Add more fitness progress items as needed
  ];
export default function Rewards() {
    const [progress, setProgress] = React.useState(45);
    let currentDate = new Date()
    // Getting individual components of the date
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1; // Months are zero-indexed, so add 1
    let day = currentDate.getDate();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    let formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  return (
    <div className='h-full w-full flex flex-col items-center justify-around p-5'>
        <p className='text-3xl font-bold my-3 tracking-widest'>Progress Tracker & Rewards</p>
        <div className='flex items-center justify-around w-full h-full'>
            <div className='w-[35%] py-10 flex flex-col items-center justify-center'>
                <CircularProgressWithLabel value={progress} size={200} />
                <div className='text-center gap-3 tracking-widest my-10'>
                    <p className='text-5xl my-4 font-extrabold'>Peak Progress</p>
                    <p className='font-bold'>Today is {formattedDate}</p>
                </div>
            </div>
            <div className='w-[60%] h-[60vh] overflow-y-scroll scrollbar-hide shadow-lg rounded-xl border-2 border-[#e4e3e3]'>

                {fitnessProgressData.map((item, index) => (
                    <div key={index} className='bg-white shadow-xl gap-3 flex rounded-lg mx-10 mt-5 mb-10 justify-between items-center'>
                        <img src={item.img} alt="" className='w-48 h-48 rounded-l-md'/>
                        <div className=' py-5'>
                            <div className='text-xl font-semibold'>{item.heading}</div>
                            <div className='text-lg'>{item.description}</div>
                        </div>
                        <div className='text-center'>
                            <p className='mx-3'>{item.reward}</p>
                            <p>Points Granted</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}