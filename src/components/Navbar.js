import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {

    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
        <h1 className='text-3xl font-bold text-teal-300'>REACT.</h1>
        <ul className='hidden md:flex justify-around'>
            <li className='p-2 mx-2'>Home</li>  
            <li className='p-2 mx-2'>Company</li>
            <li className='p-2 mx-2'>Resources</li>
            <li className='p-2 mx-2 bg-teal-600 rounded-md cursor-pointer'>Sign In</li>
        </ul>

        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}     
        </div>

        <div className={!nav ? 'md:hidden fixed left-0 top-0 w-[60%] border-r h-full border-r-gray-600 bg-black text-center ease-in-out duration-500' : 'fixed left-[-100%]'}>

            <h1 className='text-3xl font-bold text-teal-300 mt-20'>REACT.</h1>

            <ul className='uppercase'>
                <li className='my-5 p-5 mx-2'>Home</li>  
                <li className='my-5 p-5 mx-2'>Company</li>
                <li className='my-5 p-5 mx-2'>Resources</li>
                <li className='my-5 p-3 bg-teal-600 rounded-md cursor-pointer mx-auto w-fit'>Sign In</li>                
            </ul>
        </div>
    </div>
  )
}

export default Navbar