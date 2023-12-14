import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Exercises = () => {
  // Exercise data
  const exercisesData = [
    {
      title: 'Bicep Curls',
      image: 'https://images.pexels.com/photos/3763115/pexels-photo-3763115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Perform 3 sets of 12 reps',
    },
    {
      title: 'Pushups',
      image: 'https://images.pexels.com/photos/14623737/pexels-photo-14623737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Complete 4 sets of 15 reps',
    },
    {
      title: 'Shoulder Presses',
      image: 'https://images.pexels.com/photos/6550851/pexels-photo-6550851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Do 3 sets of 10 reps with moderate weight',
    },
  ];

  return (
    <div>
      <div className='bg-gradient-to-r from-blue-600 to-blue-200 text-white font-extrabold'>
        <p className="text-4xl px-10 pb-5 pt-5 text-center">Seamless Workout Detection</p>
        <p className="text-lg italic px-10 pb-5 text-center">Effortless Tracking for a Healthier You</p>
      </div>

      <div className='flex flex-wrap gap-5 items-center justify-around w-full mt-6'>
        {/* Map through exercisesData to create cards */}
        {exercisesData.map((exercise, index) => (
            <div
            key={index}
            className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-3xl shadow-2xl"
            >
            <div className="w-[500px] h-[400px]">
                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125" src={exercise.image} alt={exercise.title} />
            </div>

            {/* on hover color */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>

            {/* on hover text */}
            <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="text-3xl font-bold text-white">{exercise.title}</h1>

                <p className="my-6 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{exercise.description}</p>

                {/* Use exercise.title for the Link */}
                <Link to={`/exercise/${exercise.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <Button variant="contained">Explore</Button>
                </Link>
            </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Exercises;
