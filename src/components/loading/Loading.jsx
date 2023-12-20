import React from 'react'

const Loading = () => {
  return (
    <div className='fixed inset-0 flex items-center justify-center flex-col gap-8 bg-white z-30'>
        <img src="/loading3.gif" alt="loading" className='w-[100px] h-[100px]'/>
        <h2 className='font-medium text-4xl'>Loading...</h2>
    </div>
  )
}

export default Loading