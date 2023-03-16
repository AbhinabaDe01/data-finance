import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 flex flex-col justify-center'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold py-2'>Want tips and tricks to optimize your flow?</h1>
                <p>Sign up to our newsletter and stay updated.</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input type='email' placeholder='Enter Email' className='p-3 w-full rounded-md text-black'/>
                    <button className='w-[200px] bg-teal-500 rounded-md font-medium ml-4 my-6 py-3 text-black'>Register Now</button>
    
                </div>
                <p>We care about the protection of your data. Read about our <span className='text-teal-500'>privacy policy</span>.</p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter