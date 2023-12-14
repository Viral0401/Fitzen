import React from 'react'
import payments from './payments.png'
import globality from './globality.png'
import integrate from './integrate.png'

const Payments = () => {


    const data = [
        {
            logo: globality,
            heading: "Video Lectures",
            content: "Watch amazing video lectures and enhance you knowledge on finance."
        },
        {
            logo: integrate,
            heading: "Quizzes",
            content: "Test Your Knowledge!! Solve quizzes to make your knowledge stand out."
        }
    ]

  return (
    <div className='md:flex items-center justify-center md:gap-16 p-20'>

        <div>
            <h1 className='text-4xl font-bold md:leading-[60px]'>Learn about payments with ease while playing games 🤑</h1>

            <div className='flex items-center justify-center my-10 gap-11'>
                
                {data.map((data, key) => (
                <div>
                    <img src={data.logo} alt={`img ${key}`} className='h-10 mb-10'/>

                    <h1 className='text-2xl font-medium py-5'>{data.heading}</h1>

                    <p className='py-5 font-semibold  text-gray-400'>{data.content}</p>
                </div>
                ))}

            </div>

        </div>

        <img src={payments} alt='bank accounts' className='shadow-2xl'/>

        

    </div>
  )
}

export default Payments