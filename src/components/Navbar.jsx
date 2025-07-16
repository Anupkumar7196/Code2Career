import React from 'react'
import { assets } from '../assets/assets'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
const Navbar = () => {

    const {openSignIn} = useClerk();

  return (
    <div className='shadow py-4'>
      <div className='container px-2 2xl:px-20 mx-auto flex justify-between items-center'>
        <img src={assets.logo1} atl="Logo" style={{ width: "150px", height: "auto" }}/>
        <div className='flex gap-4 max-sm:text-xs'>
            <button className='text-gray-600 cursor-pointer'>Recruiter Login</button>
            <button onClick={e => openSignIn()} className='bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full cursor-pointer'>Login</button>
        </div>
      </div>
    </div>
    
  )
}

export default Navbar
