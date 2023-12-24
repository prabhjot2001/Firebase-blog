import React from 'react'
import ReactQuill from 'react-quill';
import { useState } from 'react';
import Preview from './Preview';
import { Blog } from '../../../../Context/Context';

const Write = () => {
    const [value, setValue] = useState('');
    const [title, setTitle] = useState('');
    const {publish, setPublish} = Blog();
  return (
    <section className='w-[90%] md:w-[80%] lg:w-[60%] mx-auto py-[3rem] '>
      <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder='Enter Title' className='outline-none text-4xl w-full'/>
      <ReactQuill theme="bubble" value={value} onChange={setValue} placeholder="Tell the World what's in your mind."
      className='write mt-8'/>

      <div className={`${publish? "visible opacity-100" : "invisible opacity-0"} transition-all duration-100`}>
        <Preview title={title} value={value}  />
      </div>
    </section>
  )
}

export default Write