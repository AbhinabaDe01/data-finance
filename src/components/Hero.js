import React from 'react'

// import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-teal-500 uppercase font-bold py-2 md:text-xl'>Growing with Data Analytics</p>
            <h1 className='text-4xl sm:text-6xl md:text-7xl font-bold md:py-4'>Grow with data.</h1>
            <div className='flex justify-center items-center'>
                <p className='text-xl sm:text-3xl md:text-4xl py-2'>Flexible, fast financing for All Types</p>
            </div>
            <p className='md:text-2xl text-xl text-gray-400'>Monitor your data analytics to increase revenue for BTB, BTC, D2C and SASS platforms</p>
            <button className='w-[200px] bg-teal-500 rounded-md font-medium my-6 mx-auto text-xl py-3 text-black'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero