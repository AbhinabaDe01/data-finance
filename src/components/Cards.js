import React from 'react'

import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full bg-white py-[10rem] px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-200'>
                <img src={Single} alt='' className='mx-auto w-20 bg-white mt-[-3rem] '/>
                <h2 className='text-2xl text-center font-bold py-8'>Single User</h2>
                <p className='text-4xl font-bold text-center'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send upto 2 GB</p>
                </div>
                <button className='w-[200px] bg-teal-500 rounded-md font-medium my-6 mx-auto text-xl py-3 text-black'>Start Trial</button>
            </div>

            <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 my-4 md:my-0 rounded-lg hover:scale-105 duration-200'>
                <img src={Double} alt='' className='mx-auto w-20 bg-transparent mt-[-3rem] '/>
                <h2 className='text-2xl text-center font-bold py-8'>Single User</h2>
                <p className='text-4xl font-bold text-center'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send upto 2 GB</p>
                </div>
                <button className='w-[200px] text-teal-500 rounded-md font-medium my-6 mx-auto text-xl py-3 bg-black'>Start Trial</button>
            </div>

            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-200'>
                <img src={Triple} alt='' className='mx-auto w-20 bg-white mt-[-3rem] '/>
                <h2 className='text-2xl text-center font-bold py-8'>Single User</h2>
                <p className='text-4xl font-bold text-center'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send upto 2 GB</p>
                </div>
                <button className='w-[200px] bg-teal-500 rounded-md font-medium my-6 mx-auto text-xl py-3 text-black'>Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Cards