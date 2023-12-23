import React from 'react'

const Banner = () => {
  return (
    // bg-gradient-to-r from-cyan-600 to-indigo-600
    <div className='bg-gradient-to-r from-blue-800 to-indigo-900 border-b border-black'>
        <div className='size py-5 flex flex-col items-start gap-12 '>
            <h1 className='font-medium font-poppins text-white mt-10 text-4xl sm:text-5xl md:text-7xl'>Where Big Ideas Find Their Digital Home!</h1>
            <p className=' text-gray-100 font-poppins text-sm leading-7 sm:text-md md:text-lg'>Discover stories, thinking, and expertise from writers on any topic.</p>
            <button className='btn bg-yellow-400 text-black mb-10 hover:bg-yellow-500 ease-in-out duration-300 '>Start Reading</button>
        </div>
    </div>
  )
}

export default Banner