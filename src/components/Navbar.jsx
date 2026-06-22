import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-white shadow  p-4 flex justify-between'>

        <h1 className=' font-bold  text-xl  text-gray-800'>DevFinder 🔍</h1>


        <div className='space-x-4'>
            <NavLink to='/' className='text-gray-700 hover:text-blue-500'>
                Home
            </NavLink>
            <NavLink to='/favorites' className='text-gray-700 hover:text-blue-500'>
                Favorites 
            </NavLink>
        </div>
    </nav>
  )
}

export default Navbar
