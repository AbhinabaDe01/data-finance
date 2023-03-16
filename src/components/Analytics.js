import React from 'react'

import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt='laptop'/>
            <div className='flex flex-col justify-center'>
                <p className='font-bold text-teal-500'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='text-2xl sm:text-3xl md:text-4xl py-2'>Manage Data Analytics Centrally</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis sem est, eget eleifend leo condimentum id. Aenean ipsum dolor, tristique ultrices vulputate nec, rhoncus id sem. Fusce eu nisl est. Suspendisse urna lorem, efficitur vulputate mattis ut, malesuada vitae metus. Cras sit amet blandit lorem, eu hendrerit arcu. 
                </p>
                <button className='w-[200px] bg-black rounded-md font-medium my-6 mx-auto md:mx-0 text-xl py-3 text-teal-500'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics